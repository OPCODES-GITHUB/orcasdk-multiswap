import { Connection, PublicKey, Keypair } from "@solana/web3.js";
import Decimal from "decimal.js";
import { OrcaU64, OrcaPool, OrcaToken, OrcaPoolToken, Quote, TransactionPayload, DepositQuote, WithdrawQuote } from "../../../public";
import { OrcaPoolParams } from "./pool-types";
export declare class OrcaPoolImpl implements OrcaPool {
    private connection;
    private poolParams;
    constructor(connection: Connection, config: OrcaPoolParams);
    getTokenA(): OrcaPoolToken;
    getTokenB(): OrcaPoolToken;
    getPoolTokenMint(): PublicKey;
    getPoolParams(): OrcaPoolParams;
    getConnection(): Connection;
    getLPBalance(owner: PublicKey): Promise<OrcaU64>;
    getLPSupply(): Promise<OrcaU64>;
    getQuote(inputToken: OrcaToken, inputAmount: Decimal | OrcaU64, slippage?: Decimal): Promise<Quote>;
    swap(owner: Keypair | PublicKey, inputToken: OrcaToken, amountIn: Decimal | OrcaU64, minimumAmountOut: Decimal | OrcaU64): Promise<TransactionPayload>;
    getDepositQuote(maxTokenAIn: Decimal | OrcaU64, maxTokenBIn: Decimal | OrcaU64, slippage?: Decimal): Promise<DepositQuote>;
    deposit(owner: Keypair | PublicKey, maxTokenAIn: Decimal | OrcaU64, maxTokenBIn: Decimal | OrcaU64, minPoolTokenAmountOut: Decimal | OrcaU64): Promise<TransactionPayload>;
    getWithdrawQuote(withdrawTokenAmount: Decimal | OrcaU64, withdrawTokenMint: PublicKey, slippage?: Decimal): Promise<WithdrawQuote>;
    withdraw(owner: Keypair | PublicKey, poolTokenAmountIn: Decimal | OrcaU64, minTokenAOut: Decimal | OrcaU64, minTokenBOut: Decimal | OrcaU64): Promise<TransactionPayload>;
}
