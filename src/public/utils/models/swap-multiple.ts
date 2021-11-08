import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import Decimal from "decimal.js";
import { OrcaPoolImpl } from "../../../model/orca/pool/orca-pool";
import { OrcaToken } from "../../pools/types";
import { OrcaU64 } from "../numbers/orca-u64";
import { getTokens } from "../pool-utils";
import { Owner } from "../web3/key-utils";
import {
  U64Utils,
  resolveOrCreateAssociatedTokenAddress,
  TransactionBuilder,
} from "../../../public";
import {
  createApprovalInstruction,
  createSwapInstruction,
} from "../../../public/utils/web3/instructions/pool-instructions";
async function swapMultiple(
  owner: Keypair | PublicKey,
  routes: [
    {
      pool: OrcaPoolImpl;
      inputToken: OrcaToken;
      amountIn: Decimal | OrcaU64;
      minimumAmountOut: Decimal | OrcaU64;
    }
  ],
  connection: Connection //move to class variable?
) {
  if (!routes.length) {
    throw new Error("No route provided !");
  }

  const _owner = new Owner(owner);

  const ownerAddress = _owner.publicKey;

  const swapMultipleTx = new TransactionBuilder(
    routes[0].pool.getConnection(),
    ownerAddress,
    _owner
  );

  for (let route of routes) {
    const { inputPoolToken, outputPoolToken } = getTokens(
      route.pool.getPoolParams(),
      route.inputToken.mint.toString()
    );
    const amountInU64 = U64Utils.toTokenU64(route.amountIn, inputPoolToken, "amountIn");
    const minimumAmountOutU64 = U64Utils.toTokenU64(
      route.minimumAmountOut,
      outputPoolToken,
      "minimumAmountOut"
    );

    const { address: inputPoolTokenUserAddress, ...resolveInputAddrInstructions } =
      await resolveOrCreateAssociatedTokenAddress(
        connection,
        _owner,
        inputPoolToken.mint,
        amountInU64
      );

    const { address: outputPoolTokenUserAddress, ...resolveOutputAddrInstructions } =
      await resolveOrCreateAssociatedTokenAddress(connection, _owner, outputPoolToken.mint);

    if (inputPoolTokenUserAddress === undefined || outputPoolTokenUserAddress === undefined) {
      throw new Error("Unable to derive input / output token associated address.");
    }

    const { userTransferAuthority, ...approvalInstruction } = createApprovalInstruction(
      ownerAddress,
      amountInU64,
      inputPoolTokenUserAddress
    );

    const swapInstruction = await createSwapInstruction(
      route.pool.getPoolParams(),
      _owner,
      inputPoolToken,
      inputPoolTokenUserAddress,
      outputPoolToken,
      outputPoolTokenUserAddress,
      amountInU64,
      minimumAmountOutU64,
      userTransferAuthority.publicKey
    );

    swapMultipleTx
      .addInstruction(resolveInputAddrInstructions)
      .addInstruction(resolveOutputAddrInstructions)
      .addInstruction(approvalInstruction)
      .addInstruction(swapInstruction);
  }

  return await swapMultipleTx.build();
}
