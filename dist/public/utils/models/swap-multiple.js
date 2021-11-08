"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const pool_utils_1 = require("../pool-utils");
const key_utils_1 = require("../web3/key-utils");
const public_1 = require("../../../public");
const pool_instructions_1 = require("../../../public/utils/web3/instructions/pool-instructions");
function swapMultiple(owner, routes, connection //move to class variable?
) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!routes.length) {
            throw new Error("No route provided !");
        }
        const _owner = new key_utils_1.Owner(owner);
        const ownerAddress = _owner.publicKey;
        const swapMultipleTx = new public_1.TransactionBuilder(routes[0].pool.getConnection(), ownerAddress, _owner);
        for (let route of routes) {
            const { inputPoolToken, outputPoolToken } = (0, pool_utils_1.getTokens)(route.pool.getPoolParams(), route.inputToken.mint.toString());
            const amountInU64 = public_1.U64Utils.toTokenU64(route.amountIn, inputPoolToken, "amountIn");
            const minimumAmountOutU64 = public_1.U64Utils.toTokenU64(route.minimumAmountOut, outputPoolToken, "minimumAmountOut");
            const _a = yield (0, public_1.resolveOrCreateAssociatedTokenAddress)(connection, _owner, inputPoolToken.mint, amountInU64), { address: inputPoolTokenUserAddress } = _a, resolveInputAddrInstructions = __rest(_a, ["address"]);
            const _b = yield (0, public_1.resolveOrCreateAssociatedTokenAddress)(connection, _owner, outputPoolToken.mint), { address: outputPoolTokenUserAddress } = _b, resolveOutputAddrInstructions = __rest(_b, ["address"]);
            if (inputPoolTokenUserAddress === undefined || outputPoolTokenUserAddress === undefined) {
                throw new Error("Unable to derive input / output token associated address.");
            }
            const _c = (0, pool_instructions_1.createApprovalInstruction)(ownerAddress, amountInU64, inputPoolTokenUserAddress), { userTransferAuthority } = _c, approvalInstruction = __rest(_c, ["userTransferAuthority"]);
            const swapInstruction = yield (0, pool_instructions_1.createSwapInstruction)(route.pool.getPoolParams(), _owner, inputPoolToken, inputPoolTokenUserAddress, outputPoolToken, outputPoolTokenUserAddress, amountInU64, minimumAmountOutU64, userTransferAuthority.publicKey);
            swapMultipleTx
                .addInstruction(resolveInputAddrInstructions)
                .addInstruction(resolveOutputAddrInstructions)
                .addInstruction(approvalInstruction)
                .addInstruction(swapInstruction);
        }
        return yield swapMultipleTx.build();
    });
}
