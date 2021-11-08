"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stsolWldoPool = exports.sypUsdcPool = exports.stsolWstethPool = exports.mngoUsdcPool = exports.tulipUsdcPool = exports.mediaUsdcPool = exports.kuroUsdcPool = exports.abrUsdcPool = exports.grapeUsdcPool = exports.sunnyUsdcPool = exports.copeUsdcPool = exports.whapiUsdcPool = exports.slimUsdcPool = exports.ninjaSolPool = exports.samoUsdcPool = exports.bopUsdcPool = exports.polisUsdcPool = exports.atlasUsdcPool = exports.scnsolSolPool = exports.orcaMsolPool = exports.orcaPaiPool = exports.msolSolPool = exports.psolUsdcPool = exports.scnsolUsdcPool = exports.sbrUsdcPool = exports.portUsdcPool = exports.slrsUsdcPool = exports.msolUsdcPool = exports.snyUsdcPool = exports.liqUsdcPool = exports.samoSolPool = exports.kinSolPool = exports.orcaUsdcPool = exports.orcaSolPool = exports.usdcUsdtPool = exports.mapsSolPool = exports.fidaSolPool = exports.merSolPool = exports.btcSolPool = exports.oxySolPool = exports.copeSolPool = exports.fttSolPool = exports.srmSolPool = exports.stepSolPool = exports.ropeSolPool = exports.raySolPool = exports.ethUsdcPool = exports.ethSolPool = exports.solUsdtPool = exports.solUsdcPool = void 0;
exports.orcaPoolConfigs = exports.slndUsdcPool = exports.rayUsdcPool = exports.fttUsdcPool = exports.avaxUsdcPool = exports.auryUsdcPool = exports.wstethUsdcPool = exports.stsolUsdcPool = exports.jetUsdcPool = exports.prtUsdcPool = exports.larixUsdcPool = exports.ivnSolPool = exports.btcMsolPool = exports.msolWhethPool = exports.msolUsdtPool = exports.wagUsdcPool = exports.mndeMsolPool = exports.whethUsdcPool = exports.whethSolPool = void 0;
const web3_js_1 = require("@solana/web3.js");
const pool_types_1 = require("../model/orca/pool/pool-types");
const percentage_1 = require("../public/utils/models/percentage");
const Tokens = __importStar(require("./tokens"));
/**
 * The following content is auto-generated.
 */
exports.solUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("EGZ7tiLeH62TPV1gL8WwbXGzEPa9zmcpVnnkPKKnrE2U"),
    nonce: 252,
    authority: new web3_js_1.PublicKey("JU8kmKzDHF9sXWsnoznaFDFezLsE5uomX2JkRMbmsQP"),
    poolTokenMint: new web3_js_1.PublicKey("APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("8JnSiuvQq3BVuCU3n4DrSTw9chBSPvEMswrhtifVkr1o"),
    tokenIds: [Tokens.solToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("ANP74VNsHwSrq9uUSjiSNyNWvf6ZPrKTmE4gHoNd13Lg") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("75HgnSvXbWKZBpZHveX68ZzAhDqMzNDS29X6BGLtxMo1") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.solUsdtPool = Object.freeze({
    address: new web3_js_1.PublicKey("Dqk7mHQBx2ZWExmyrR2S8X6UG75CrbbpK2FSBZsNYsw6"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("2sxKY7hxVFrY5oNE2DgaPAJFamMzsmFLM2DgVcjK5yTy"),
    poolTokenMint: new web3_js_1.PublicKey("FZthQCuYHhcfiDma7QrX7buDHwrZEd7vL8SjS6LQa3Tx"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("BBKgw75FivTYXj85D2AWyVdaTdTWuSuHVXRm1Xu7fipb"),
    tokenIds: [Tokens.solToken.mint.toString(), Tokens.usdtToken.mint.toString()],
    tokens: {
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("DTb8NKsfhEJGY1TrA7RXN6MBiTrjnkdMAfjPEjtmTT3M") }),
        [Tokens.usdtToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdtToken), { addr: new web3_js_1.PublicKey("E8erPjPEorykpPjFV9yUYMYigEWKQUxuGfL2rJKLJ3KU") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.ethSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("EuK3xDa4rWuHeMQCBsHf1ETZNiEQb5C476oE9u9kp8Ji"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("DffrDbzPiswDJaiicBBo9CjqztKgFLrqXGwNJH4XQefZ"),
    poolTokenMint: new web3_js_1.PublicKey("71FymgN2ZUf7VvVTLE8jYEnjP3jSK1Frp2XT1nHs8Hob"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("unxKgWEc71ZiHwMqZs3VLqjcjmZhfTZEg94ZLGvjdMP"),
    tokenIds: [Tokens.ethToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.ethToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.ethToken), { addr: new web3_js_1.PublicKey("7F2cLdio3i6CCJaypj9VfNDPW2DwT3vkDmZJDEfmxu6A") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("5pUTGvN2AA2BEzBDU4CNDh3LHER15WS6J8oJf5XeZFD8") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.ethUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("FgZut2qVQEyPBibaTJbbX2PxaMZvT1vjDebiVaDp5BWP"),
    nonce: 253,
    authority: new web3_js_1.PublicKey("4dfCZR32xXhoTgMRhnViNaTFwiKP9A34TDjHCR3xM5rg"),
    poolTokenMint: new web3_js_1.PublicKey("3e1W6Aqcbuk2DfHUwRiRcyzpyYRRjg6yhZZcyEARydUX"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("DLWewB12jzGn4wXJmFCddWDeof1Ma4cZYNRv9CP5hTvX"),
    tokenIds: [Tokens.ethToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.ethToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.ethToken), { addr: new web3_js_1.PublicKey("H9h5yTBfCHcb4eRP87fXczzXgNaMzKihr7bf1sjw7iuZ") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("JA98RXv2VdxQD8pRQq4dzJ1Bp4nH8nokCGmxvPWKJ3hx") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.raySolPool = Object.freeze({
    address: new web3_js_1.PublicKey("3THMPkPmcHJ54JtHRyazhs7UN7HbV5KiNJVLJs6hSPSC"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("EUc3MtHPLL956pTDfM5q25jp5Fk9zW7omEzh1uyDY7s6"),
    poolTokenMint: new web3_js_1.PublicKey("5kimD5W6yJpHRHCyPtnEyDsQRdiiJKivu5AqN3si82Jc"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("65XNtnUsP1TMzKMGhMoD3GUFMNbmnZQwDaxDLE3jncUC"),
    tokenIds: [Tokens.rayToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.rayToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.rayToken), { addr: new web3_js_1.PublicKey("GZaUNWf4ov6VZaD5MqZtc5pHB3mWTqczNUB4sstt8CSR") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("GNSZ1rr57QQ6qLcmZnhMcoBymenVezhNpzcFSfJP37h9") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.ropeSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("DCENobjFZK59nLeMCVRkQtnkAWrJkWAVpmVnwVNc8gqH"),
    nonce: 251,
    authority: new web3_js_1.PublicKey("C2DDX95TK3uC9MQXhHp3LWRv9kWtFTp36Ub9VPCKKiCV"),
    poolTokenMint: new web3_js_1.PublicKey("ADrvfPBsRcJfGsN6Bs385zYddH52nuM5FA8UaAkX9o2V"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("88rKjeeDQYJxGVCG39znDvbxzjPc5H37XqHRQCSNJvED"),
    tokenIds: [Tokens.ropeToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.ropeToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.ropeToken), { addr: new web3_js_1.PublicKey("HLHPVwgzYjTHmu1fmV9eZzdE8H3fZwhuCBRNNN2Z5miA") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("7Be3aStQmKgeXC1xqfJnA8qaGzw6keQTLqHYAJprZK2H") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.stepSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("2sNtf8wLZMR7XJm2pzvvVUNPTNRFsGTiC5vgDSGv5QGD"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("HzAJLVqZ7fnmc2LfRPtz2GHu93RpAPQsdDTg6DRoTTmf"),
    poolTokenMint: new web3_js_1.PublicKey("8nTzqDXHriG2CXKbybeuEh1EqDQMtrbYMFWcP7AkiDaP"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("5FEmPmAk72NycwzMXLD3hc2f47zRXocv4mvd3HEUZ5io"),
    tokenIds: [Tokens.stepToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.stepToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.stepToken), { addr: new web3_js_1.PublicKey("35opuEpVvggzfV361hQVNXiC7KAKS1HCeDoVpfVybo8k") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("A3DSsYZJWHiwXSQb7P2AbEoaWhpauJLU1PVdTPnzV5s9") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.srmSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("EJRXAkKyDhDgzdZz1Ss5CpWKWSK9xTR5S6GDLAer8mdh"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("2pQbngWBSWUjBHWVWQ3tppKxW3Y5NzUcye1822itKyzZ"),
    poolTokenMint: new web3_js_1.PublicKey("9tf8rBSEQYG7AqL896fN2nZi1iYPqpWaLEdpbeQaC1Vy"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("APyc1s8wES4Q2FTqHN8jXZtRuWQyRWZ82u7EFfras2iZ"),
    tokenIds: [Tokens.srmToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.srmToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.srmToken), { addr: new web3_js_1.PublicKey("2JCxZv6LaFjtWqBXSC2brsWE9WryS4Cp3VwwDeNGvLyv") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("EdhG3vQbTVVAARZB4AbhU2HsVbvfFqX2yhBAfFV22nzA") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.fttSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("68Bg6yQxWm3mrUYk3XzMiF5ycE41HwPhyEdaB1cp6wuo"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("BpshqwEmPXmJwJfFgTFafmXoHN8Lc7SouvFsh6jyYQAm"),
    poolTokenMint: new web3_js_1.PublicKey("EsYaDKJCmcJtJHFuJYwQZwqohvVMCrFzcg8yo3i328No"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("FWBCbjZnypLKz7uHGJXpBAEez2FurQXi9J3js7ZT1xDe"),
    tokenIds: [Tokens.fttToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.fttToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.fttToken), { addr: new web3_js_1.PublicKey("3eVE92aEAsLYcBACXNu1yxoHVfTM8e8vmQC2zSApGRJX") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("BbsiNbFfJsRDwqF4JaiJ6sKecNuY4eWmEaDHcY6h6HuD") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.copeSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("BRx4dJecxzeGYc1BskCWonfGCeMyv9G7tk66cf2QGhK6"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("JAJr1D6BQHFj9qJ8pfXhvJgLfn9vTcviU9sTA8MhKzN4"),
    poolTokenMint: new web3_js_1.PublicKey("CzieDbGRdN1QGaGDNpSqzEA18bi881ccvkkGZi51pe1k"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("9X8VRnxk6EVKGA7TErdSZYFC8oLUM569pDbZTtycjvXw"),
    tokenIds: [Tokens.copeToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.copeToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.copeToken), { addr: new web3_js_1.PublicKey("7v5GCdHH439SztxcqL4wpfWdPvv9EfMm8GYTHSUQoGoY") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("5tSgRUK6f2x1nAXA4gdcHNXiWdToqni9pr5xvq2Fq82u") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.oxySolPool = Object.freeze({
    address: new web3_js_1.PublicKey("Cq4EZrvuFQpsCz8L3gS6t7iQ7VWzTtqDgSxD4AgVAAfd"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("FxxcJPunf6Vj9Ve5zyM9yatMbmkrzTQ1QSk4NqKW9DvK"),
    poolTokenMint: new web3_js_1.PublicKey("7tYCdLN84EnTMkxM7HNamWJx7F4xgKe9KiiWvLyWjbgT"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("Ch8i2A1GAspivXYfdme7vSxh1mhRjmRgeiKN8KpWhVqo"),
    tokenIds: [Tokens.oxyToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.oxyToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.oxyToken), { addr: new web3_js_1.PublicKey("BoZQMfTLTPcXnevJxNFkECVbKesfhXnTUg4kxLgzV9BX") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("8ZrEcJbgg7BdoBga5RYDR8aMujLf5cAQp8zdPZqk7nNC") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.btcSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("7N2AEJ98qBs4PwEwZ6k5pj8uZBKMkZrKZeiC7A64B47u"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("GqnLhu3bPQ46nTZYNFDnzhwm31iFoqhi3ntXMtc5DPiT"),
    poolTokenMint: new web3_js_1.PublicKey("Acxs19v6eUMTEfdvkvWkRB4bwFCHm3XV9jABCy7c1mXe"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("4yPG4A9jB3ibDMVXEN2aZW4oA1e1xzzA3z5VWjkZd18B"),
    tokenIds: [Tokens.btcToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.btcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.btcToken), { addr: new web3_js_1.PublicKey("9G5TBPbEUg2iaFxJ29uVAT8ZzxY77esRshyHiLYZKRh8") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("5eqcnUasgU2NRrEAeWxvFVRTTYWJWfAJhsdffvc6nJc2") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.merSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("UJBm2tHwDbQZpjQvaHozg5qkjh6prSKhnWheqR5T76Q"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("C8HcMrC9WRqqXVbHRhZWjuZPbbWmszDobKFxevCtGhpT"),
    poolTokenMint: new web3_js_1.PublicKey("HiwRobjfHZ4zsPtqCC4oBS24pSmy4t8GGkXRbQj4yU6L"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("3Fdj69449GhiDmqyvWWTSafjRphGdiDhZ5i5rqfHBdio"),
    tokenIds: [Tokens.merToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.merToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.merToken), { addr: new web3_js_1.PublicKey("DHdkRWTa9SRJNMtWZQYvNNbjrDP3n92EWLHezjFGPipb") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("DC5RwjB3VkXdt2PoWKTA4Ub9KbtcY8xXpmPNKsFjALwq") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.fidaSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("4SUBbivGMvMhem3ajVtkmuPvL4GuQ8kfYTJFuQfG4F8t"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("owuNLod7H14GpQCUodcdBBeD4LiZ2T5U9KpS2sAbTp6"),
    poolTokenMint: new web3_js_1.PublicKey("EYsNdtyu4gGTaGz8N5m5iQ3G1N6rDyMbR72B3CqbWW4W"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("J2s1GpduscTTvMYt3os8LdvT24uhr9bPnTbxSKZZhEma"),
    tokenIds: [Tokens.fidaToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.fidaToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.fidaToken), { addr: new web3_js_1.PublicKey("9ofyx5yFzjH1XWmJzfiGCDfhq6ho8yFbszGQrrJXe54") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("55moYcq91pXbSRpL2DR8P3BehqSNWiJrdTn5SZFc2STn") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.mapsSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("4rkgbbCPKk5zx3KiwcCNiSpNSSLgAkswKGfX7CJjGgtC"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("8uuBxVsGf2bqH5t8mct5NfpgcTDb7czXuWVEm6Boia4x"),
    poolTokenMint: new web3_js_1.PublicKey("99pfC8fWymXgbq3CvrExhx3UxQDC1fMWEWLbNT83F45e"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("8w3gx1GQ1UN5sodEVP14qUwzCcgopHWUeWbT26hgK3xh"),
    tokenIds: [Tokens.mapsToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.mapsToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.mapsToken), { addr: new web3_js_1.PublicKey("BqExNTYk7YdeiaREHqnqN2q1F3dBCTPhkwrrWBFD4F1m") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("HdEQ99E979aXn2xTcg5UXEfLynwFkqpPTxLaNkH7Nz7P") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.usdcUsdtPool = Object.freeze({
    address: new web3_js_1.PublicKey("F13xvvx45jVGd84ynK3c8T89UejQVxjCLtmHfPmAXAHP"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("3cGHDS8uWhdxQj14vTmFtYHX3NMouPpE4o9MjQ43Bbf4"),
    poolTokenMint: new web3_js_1.PublicKey("H2uzgruPvonVpCRhwwdukcpXK8TG17swFNzYFr2rtPxy"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("B4RNxMJGRzKFQyTq2Uwkmpyjtew13n7KtdqZy6qgENTu"),
    tokenIds: [Tokens.usdcToken.mint.toString(), Tokens.usdtToken.mint.toString()],
    tokens: {
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("6uUn2okWk5v4x9Gc4n2LLGHtWoa9tmizHq1363dW7t9W") }),
        [Tokens.usdtToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdtToken), { addr: new web3_js_1.PublicKey("AiwmnLy7xPT28dqZpkRm6i1ZGwELUCzCsuN92v4JkSeU") }),
    },
    curveType: pool_types_1.CurveType.Stable,
    amp: 100,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(6, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(1, 10000),
    },
});
exports.orcaSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("2ZnVuidTHpi5WWKUwFXauYGhvdT9jRKYv5MDahtbwtYr"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("2PH1quJj9MHQXATCmNZ6qQ2gZqM8R236DpKaz99ggVpm"),
    poolTokenMint: new web3_js_1.PublicKey("2uVjAuRXavpM6h1scGQaxqb6HVaNRn6T2X7HHXTabz25"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("4Zc4kQZhRQeGztihvcGSWezJE1k44kKEgPCAkdeBfras"),
    tokenIds: [Tokens.orcaToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.orcaToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.orcaToken), { addr: new web3_js_1.PublicKey("AioST8HKQJRqjE1mknk4Rydc8wVADhdQwRJmAAYX1T6Z") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("73zdy95DynZP4exdpuXTDsexcrWbDJX9TFi2E6CDzXh4") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.orcaUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("2p7nYbtPBgtmY69NsE8DAW6szpRJn7tQvDnqvoEWQvjY"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("3fr1AhdiAmWLeNrS24CMoAu9pPgbzVhwLtJ6QUPmw2ob"),
    poolTokenMint: new web3_js_1.PublicKey("n8Mpu28RjeYD7oUX3LG1tPxzhRZh3YYLRSHcHRdS3Zx"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("7CXZED4jfRp3qdHB9Py3up6v1C4UhHofFvfT6RXbJLRN"),
    tokenIds: [Tokens.orcaToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.orcaToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.orcaToken), { addr: new web3_js_1.PublicKey("9vYWHBPz817wJdQpE8u3h8UoY3sZ16ZXdCcvLB7jY4Dj") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("6UczejMUv1tzdvUzKpULKHxrK9sqLm8edR1v9jinVWm9") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.kinSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("Ez52BLSoZw3MxWxMK4ADsJXqzUiYW9sUnwcrrQwQGdLT"),
    nonce: 253,
    authority: new web3_js_1.PublicKey("C6WisvFQzqxTBF3DV6RFbPMPBiVHE816CZHoctB3WzrW"),
    poolTokenMint: new web3_js_1.PublicKey("HEvnD66WcBfTajS9adUYnGRBMDehFtLySiFHSD6kEBWs"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("5bLeJU66qTopjZBa48BUd7EXWcj4UeCMfHjjrvt8Zcgs"),
    tokenIds: [Tokens.kinToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.kinToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.kinToken), { addr: new web3_js_1.PublicKey("2Ssm5Dd1Zc5QpGSZzuqt3Ef4bADteuBbCGiEZJ5n48rV") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("HCS9EpKRxWDS9GCRFStNbPWgRQpvV6EyBWChJja2UbCm") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.samoSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("DiAP9qmp5foN7fLTWfBWjo9KBS1jgvKUJLWi1ZhqKaja"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("3uZcofBKVBYFrQ7jVjTFLEMWAQiZcih4AES5tKBqdo7m"),
    poolTokenMint: new web3_js_1.PublicKey("D6N9j8F2DhtzDtrdpT74y3u2YmYAzcggiLc3nTjqux9M"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("BYAjG645fRRHZ5JFnZKnXc4dzK9WppcoVWDMYj3zm3KF"),
    tokenIds: [Tokens.samoToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.samoToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.samoToken), { addr: new web3_js_1.PublicKey("AFcbD7UTzk9d1njRxyDHNbQ5Q6miPNAE1GctjD96JYAi") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("6kYbPDsYLQUwptV7ZvQKG3gjNreEEgaWh2CM4DQPYTpq") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.liqUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("AXSeEafwPUGSamiZWH8m2PJtvpDVtrofxvycNwxiysdh"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("6Y5TnCwgifc8Z7QYo672nT9uNd2hcivVR1NT6oDkJx6P"),
    poolTokenMint: new web3_js_1.PublicKey("3PD9SZFwXKkXr4akLf4ofo37ZUMycwML89R2P3qxcbZG"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("FSVPcprrTkQLRtDACFEpa2rhEVx4kBvjPuQaxj572SaC"),
    tokenIds: [Tokens.liqToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.liqToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.liqToken), { addr: new web3_js_1.PublicKey("CVspL8Tj5YdqntXJegNeDXHiBn3648QDNB7gex6D9MgY") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("8YzLsZ1FtsruswkBogEaXwmRTf5PMuyVcfSZXRAdi8qA") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.snyUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("BDn3Fj9UXVi2mRVMR2jzpCrAZZphnwfkvFhs192yhCTu"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("FvjsfbbzZAcrVdfrGtZUjGWAjWHXrfMG8Bjwc17vVSK3"),
    poolTokenMint: new web3_js_1.PublicKey("AZpo4BJHHRetF96v6SGinFZBMXM4yWMo4RA8C4PriDLk"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("DiULDJAYXdbtX8CfFsU2jCgHvQWT7u3gwRwpvQxfEMvr"),
    tokenIds: [Tokens.snyToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.snyToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.snyToken), { addr: new web3_js_1.PublicKey("14RHMRzwx9Y4Z41qpr9sTwJZ58wXqV1R9WTkUA7ybmKG") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("Dw9D9T4bBC3oGdMqxE1xWfPSCJ27SYwWD8rFfUxU99QG") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.msolUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("Hme4Jnqhdz2jAPUMnS7jGE5zv6Y1ynqrUEhmUAWkXmzn"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("9Z7E42k46kxnBjAh8YGXDw3rRGwwxQUBYM7Ccrmwg6ZP"),
    poolTokenMint: new web3_js_1.PublicKey("8PSfyiTVwPb6Rr2iZ8F3kNpbg65BCfJM9v8LfB916r44"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("3W3Skj2vQsNEMhGRQprFXQy3Q8ZbM6ojdgiDCokVPWno"),
    tokenIds: [Tokens.msolToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.msolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.msolToken), { addr: new web3_js_1.PublicKey("GBa7G5f1FqAXEgByuHXsqsEdpyMjRgT9SNxZwmmnEJAY") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("7hFgNawzzmpDM8TTVCKm8jykBrym8C3TQdb8TDAfAVkD") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.slrsUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("87Xz6RK1uzP5NEhSjMewZtDAZyg4V1tYAa1KHnvge17b"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("5D9v9y6Kbswe6k1wnVceuqRXHMsRQJ8xzx8hadSH6EAM"),
    poolTokenMint: new web3_js_1.PublicKey("AtB4nUmdyQfuWWJ9xAHw9xyVnJFfSjSuVWkiYan8y86w"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("CLxeBxNq42AtmD43F5BTqCHTnkVHX8sP9cVPdtRkTL7D"),
    tokenIds: [Tokens.slrsToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.slrsToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.slrsToken), { addr: new web3_js_1.PublicKey("CM7oGYHy1oxzHoum8Cxv4pwnndm6Jbs3NkBZkc6v9S9d") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("3QqPbMcUMZu3Rz762g7JgvpUxhRHPtE9HFk2MSDRmPqa") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.portUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("4if9Gy7dvjU7XwunKxdnCcPsaT3yAHPXdz2XS1eo19LG"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("BshtCZRCHj2RZYC7u5sW3ioRJo9ZiYA4T5p8muFwrKnb"),
    poolTokenMint: new web3_js_1.PublicKey("F8gPSpwVHj8FdAJAYULDuZBxFEJut87hUbARYYx3471w"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("5JZXUbCfaSo3y9PYq47Hj5Yc6hVFa4j7MkDzBJfMSRSN"),
    tokenIds: [Tokens.portToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.portToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.portToken), { addr: new web3_js_1.PublicKey("2wuSqR5z2Guft2yt57Hx7K6i1AYNoUi8fjxHUeAgaKXo") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("AvP1Db3SyUxLGMSc4nSXjJkjm1kAjiLjog7cup19eWa3") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.sbrUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("HiYggjP2fN53Jw46e5UuskqNP3HH98jceRxEgVoeRwNw"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("ATkEV1nEkdp7zgaGpzFCsJ5WAyejcJbxqzGhQpfcDW4S"),
    poolTokenMint: new web3_js_1.PublicKey("CS7fA5n4c2D82dUoHrYzS3gAqgqaoVSfgsr18kitp2xo"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("7S3KKuvcHfcKWBGLDwmoTgtB97JE8LHruP8jbmQkGfH"),
    tokenIds: [Tokens.sbrToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.sbrToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.sbrToken), { addr: new web3_js_1.PublicKey("DrJTQqNZqNCf2HDLpYg9zRCMRwnhZEVQuGjeaWtX6CA7") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("DEVLUv1uiUSukQoBdy9fDQyehi4N2Boojy8J2LQ8bK2E") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.scnsolUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("6Gh36sNXrGWYiWr999d9iZtqgnipJbWuBohyHBN1cJpS"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("GXWEpRURaQZ9E62Q23EreTUfBy4hfemXgWFUWcg7YFgv"),
    poolTokenMint: new web3_js_1.PublicKey("Dkr8B675PGnNwEr9vTKXznjjHke5454EQdz3iaSbparB"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("HsC1Jo38jK3EpoNAkxfoUJhQVPa28anewZpLfeouUNk7"),
    tokenIds: [Tokens.scnsolToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.scnsolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.scnsolToken), { addr: new web3_js_1.PublicKey("7xs9QsrxQDVoWQ8LQ8VsVjfPKBrPGjvg8ZhaLnU1i2VR") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("FZFJK64Fk1t619zmVPqCx8Uy29zJ3WuvjWitCQuxXRo3") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.psolUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("GW1Xt9HHtvcnky8X7aBA3BoTgiirJKP5XwC5REFcZSsc"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("GXueH9K1MzRncoTYbpLiXXC3WrKkmHUFxV5JEu8oADbw"),
    poolTokenMint: new web3_js_1.PublicKey("C2YzN6MymD5HM2kPaH7bzcbqciyjfmpqyVaR3KA5V6z1"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("BhHd49JYH3Hk6TV5kCjmUgf7fQSQKDjaWTokMmBhTx9o"),
    tokenIds: [Tokens.psolToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.psolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.psolToken), { addr: new web3_js_1.PublicKey("F7XioZaGe99nosYJQCahx25TKgdUGufYf6sudm1JSgu") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("BT14DfFyNS7qcBGc8TY4HAzDev4vvqsoFBJgjtQpdM2Z") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.msolSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("9EQMEzJdE2LDAY1hw1RytpufdwAXzatYfQ3M2UuT9b88"),
    nonce: 250,
    authority: new web3_js_1.PublicKey("6cwehd4xhKkJ2s7iGh4CaDb7KhMgqczSBnyNJieUYbHn"),
    poolTokenMint: new web3_js_1.PublicKey("29cdoMgu6MS2VXpcMo1sqRdWEzdUR9tjvoh8fcK8Z87R"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("6j2tt2UVYMQwqG3hRtyydW3odzBFwy3pN33tyB3xCKQ6"),
    tokenIds: [Tokens.msolToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.msolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.msolToken), { addr: new web3_js_1.PublicKey("6xmki5RtGNHrfhTiHFfp9k3RQ9t8qgL1cYP2YCG2h179") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("Ew2coQtVGLeca31vqB2ssHntjzZgUy1ad9VuuAX8yw7p") }),
    },
    curveType: pool_types_1.CurveType.Stable,
    amp: 100,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(6, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(1, 10000),
    },
});
exports.orcaPaiPool = Object.freeze({
    address: new web3_js_1.PublicKey("7LfLiCnoLPefaCVuh6z92TK2tPZUa9bPjW7gHT4jqrec"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("AwUWHxHyQHomqCGJJvagiSDhb2xMqJUiE25qDytdMw49"),
    poolTokenMint: new web3_js_1.PublicKey("C7TH2jEJJaxVwwuvkbcDGfHUiZvEkkeYjyAcdTMi5ujb"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("DrC2aGWrUmsnK6yAphSXEs8GW5nKUCkityaG8Bikn5Ne"),
    tokenIds: [Tokens.orcaToken.mint.toString(), Tokens.paiToken.mint.toString()],
    tokens: {
        [Tokens.orcaToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.orcaToken), { addr: new web3_js_1.PublicKey("HSUFpGyNXEogXQLgEMQ7aMTxE4HZneRaBovbi9btXepM") }),
        [Tokens.paiToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.paiToken), { addr: new web3_js_1.PublicKey("4c9rkBiqAY6fXpVvCbDwpDD44AGQ3MXSaCLcpmLUFtrX") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.orcaMsolPool = Object.freeze({
    address: new web3_js_1.PublicKey("49tTgthTYLMPEqozZNyEQifqkGYxHqqDie9YxVczS3iB"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("9FQ9gDtS6uNr5SMPafuzkDit2rMftHfQuz5mg2X3TqHT"),
    poolTokenMint: new web3_js_1.PublicKey("CVapmQn7HaU1yMDW3q6oUV4hx6XoYv54T4zfGXkuJqkA"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("Hq9xxKdMavJd4teMZusF4PiGNGV3hxdcMZwAdngkHCg7"),
    tokenIds: [Tokens.orcaToken.mint.toString(), Tokens.msolToken.mint.toString()],
    tokens: {
        [Tokens.orcaToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.orcaToken), { addr: new web3_js_1.PublicKey("7hoYJc4aqttctANrNe75gscdmQD9HcXZED6AjdDdZMQ9") }),
        [Tokens.msolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.msolToken), { addr: new web3_js_1.PublicKey("7MuvRUFT1wWiL7uJKdZqNwk9Fmz2HJ36bEArhDTnyFij") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.scnsolSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("2q6UMko5kTnv866W9MTeAFau94pLpsdeNjDdSYSgZUXr"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("Gyd77CwV23qq937x9UDa4TDkxEeQF9tp8ifotYxqW3Kd"),
    poolTokenMint: new web3_js_1.PublicKey("APNpzQvR91v1THbsAyG3HHrUEwvexWYeNCFLQuVnxgMc"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("42Xzazs9EvjtidvEDrj3JXbDtf6fpTq5XHh96mPctvBV"),
    tokenIds: [Tokens.scnsolToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.scnsolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.scnsolToken), { addr: new web3_js_1.PublicKey("C8DRXUqxXtUgvgBR7BPAmy6tnRJYgVjG27VU44wWDMNV") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("DzdxH5qJ68PiM1p5o6PbPLPpDj8m1ZshcaMFATcxDZix") }),
    },
    curveType: pool_types_1.CurveType.Stable,
    amp: 100,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(6, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(1, 10000),
    },
});
exports.atlasUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("3V5sjXj1mrWjjB1Xt6Xwp554QwHE5fppGSxbk4GzAtEW"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("8UYN675AJn5htWydDs724xqintBZ4XzsCWqMozUSDU8m"),
    poolTokenMint: new web3_js_1.PublicKey("FZ8x1LCRSPDeHBDoAc3Gc6Y7ETCynuHEr5q5YWV7uRCJ"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("CFN4DQ2p3qroX92pPNy3mov3Dw1aCNGLrU5AXHpHxbko"),
    tokenIds: [Tokens.atlasToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.atlasToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.atlasToken), { addr: new web3_js_1.PublicKey("xotXsNCx4tBhnwhrajGTaVgKq1sfuMkeYHc77ZegCqE") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("8YswVYsTi66umBF2Bnkh4LB2VWMKPssDpe54VAgiuJZQ") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.polisUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("CdKPtCb5fBRaGFS4bJgytfReeHuFyhpe9YUyWHPnEWZG"),
    nonce: 251,
    authority: new web3_js_1.PublicKey("8XB9V3VuHtPBzHqvxzcmpkpaoXNXjZMD8VBHC79SxcEL"),
    poolTokenMint: new web3_js_1.PublicKey("GteBdo9sqE7T41G8AJsaG9WHW48uXBwsLLznmu2TBdgy"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("3gZQ2YnrXbnRwJj5poffLirF7CwacatvtfGCNRFrbJdr"),
    tokenIds: [Tokens.polisToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.polisToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.polisToken), { addr: new web3_js_1.PublicKey("EbXNEUiKxSU1vwwhrbVNVk3qX4o1yU3p75SQUUMfc1zH") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("CLCj9b1vdPutrkvZS8ACTM5q42SXB2Q7khnMLVxDMGEK") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.bopUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("9pheQ8EX2wDKHZYm75G9haEbTyAcg8F2gFWybw2w6Vyc"),
    nonce: 253,
    authority: new web3_js_1.PublicKey("3rxJPYuiRijipJbciewUDacab2Wo3yAe1yWBGzmqn5f1"),
    poolTokenMint: new web3_js_1.PublicKey("2gXDJZ7XAtQEtf4PRSQZKoq1WMuu1H44tQanbMA3YVpu"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("2bei4349W8FUcu5gvP5Zt8yhkpwqcCngZxUkb3xRMJZJ"),
    tokenIds: [Tokens.bopToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.bopToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.bopToken), { addr: new web3_js_1.PublicKey("HkHjLSaP9yyWTzMGD1DKyoc1Dfvhvw4vakRhyjcVUCKs") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("CqRoKMF4kh2o568nFdDNHs7cszBjrkQME4RtCuTqcjCe") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.samoUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("Epvp7qMYAF21VVjacdB3VfKn6nnXQSF4rGYu8sD6Bkow"),
    nonce: 252,
    authority: new web3_js_1.PublicKey("AB4rTE2JiKFhnfynUQCovbW75CUxT9LxcJX2SDTbY9gy"),
    poolTokenMint: new web3_js_1.PublicKey("6VK1ksrmYGMBWUUZfygGF8tHRGpNxQEWv8pfvzQHdyyc"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("9U8UF7d8kBvsS25XoZnjmVQ9vGkP4BUnHJgfc615BvG1"),
    tokenIds: [Tokens.samoToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.samoToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.samoToken), { addr: new web3_js_1.PublicKey("7jwHW4Lw3nVaSJXskN5pUoKU6YB9RBVfZtGBp3VbR43U") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("G7Gqjxk9EaJMeFfoFTSy9WfH8uurgQkbNQCREWAc56DZ") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.ninjaSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("3ECUtPokme1nimJfuAkMtcm7QYjDEfXRQzmGC16LuYnz"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("H8f9n2PfehUc73gRWSRTPXvqUhUHVywdAxcfEtYmmyAo"),
    poolTokenMint: new web3_js_1.PublicKey("4X1oYoFWYtLebk51zuh889r1WFLe8Z9qWApj87hQMfML"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("43ViAbUVujnYtJyzGP4AhabMYCbLsExenT3WKsZjqJ7N"),
    tokenIds: [Tokens.ninjaToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.ninjaToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.ninjaToken), { addr: new web3_js_1.PublicKey("6Y9VyEYHgxVahiixzphNh4HAywpab9zVoD4S8q1sfuL8") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("9SxzphwrrDVDkwkyvmtag9NLgpjSkTw35cRwg9rLMYWk") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.slimUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("8JPid6GtND2tU3A7x7GDfPPEWwS36rMtzF7YoHU44UoA"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("749y4fXb9SzqmrLEetQdui5iDucnNiMgCJ2uzc3y7cou"),
    poolTokenMint: new web3_js_1.PublicKey("BVWwyiHVHZQMPHsiW7dZH7bnBVKmbxdeEjWqVRciHCyo"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("E6aTzkZKdCECgpDtBZtVpqiGjxRDSAFh1SC9CdSoVK7a"),
    tokenIds: [Tokens.slimToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.slimToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.slimToken), { addr: new web3_js_1.PublicKey("ErcxwkPgLdyoVL6j2SsekZ5iysPZEDRGfAggh282kQb8") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("EFYW6YEiCGpavuMPS1zoXhgfNkPisWkQ3bQz1b4UfKek") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.whapiUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("2Y1Jmpkf5wt1X5zcFHNBDoHxqjTXbMJfj1UFtrYQwUbG"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("8K4eRHeyPhBGB9zCjKtyBHoPPZ75zLN64oxBF6GyF4Qg"),
    poolTokenMint: new web3_js_1.PublicKey("ELfBngAgvLEHVBuJQhhE7AW6eqLX7id2sfrBngVNVAUW"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("Bx3ZhEBFedDqCBzuzKVS4eMKTtW1MmHkcMGU45FcyxRT"),
    tokenIds: [Tokens.whapiToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.whapiToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.whapiToken), { addr: new web3_js_1.PublicKey("DRYADMQevoJHDFCYbDQeS4p551MpsDN2d7CJU3LxfNHa") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("HzsECCX6RZ2ccbR3FarRSEfc5rkuETfywXJnRZut5JzU") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.copeUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("DhGTKyT6RVkpvPxXAJodi4Z41RSvQZxV1f5eRvJ5bE4r"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("Hu8AWoRBa7ZaYQFdHQyRHeEZGB16Me86fA5vAZzjVUmv"),
    poolTokenMint: new web3_js_1.PublicKey("HsauTv9s52Zv12eaDuSp6y7BEm4e4BHEyAsbdjyyWzPK"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("JEGcxfGxWJpRkGtvA6J6kEgTBebDz6kxURoeB3SX8vaW"),
    tokenIds: [Tokens.copeToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.copeToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.copeToken), { addr: new web3_js_1.PublicKey("6N3P3etaUYGeBs2C67ZQTDRqHsExNsfj85dDWPwHtQBS") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("36VVz3eY8YmWBGskQVjvGGBfyUKHHCEDBgkFtzMpFqeU") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.sunnyUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("3Ukqqshh3kZ8UPbcYYFSRaeJcsgttcmShtNNn12F1rj2"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("7NP8DTzPdpbQofhNyhLW3j2khutmfy1kuFp2AjaD8rrp"),
    poolTokenMint: new web3_js_1.PublicKey("GHuoeq9UnFBsBhMwH43eL3RWX5XVXbSRYJymmyMYpT7n"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("CCuSVbnnq8SUj7cpPe7BbHLuKanyxfvfrwypzCBnaDdf"),
    tokenIds: [Tokens.sunnyToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.sunnyToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.sunnyToken), { addr: new web3_js_1.PublicKey("F6nCAMYEFxsyRDVonQXLNufXgAHsgAa1Br8DhBoX3KAV") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("HWCTHmQppFSsKQEk1bHUqPC2WLaidgnfTG9MQGD4XKEt") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.grapeUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("6MxUhBLXHCqpdYaFPTmw1D9fQ7zYnm9grZyJvpGiqr15"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("SvWmpVVUkv8cwoRnBQ5Gqt2FFYjdpWLS665gE2ZLNQp"),
    poolTokenMint: new web3_js_1.PublicKey("EorFh8siFyLF1QTZ7cCXQaPGqyo7eb4SAgKtRH8Jcxjd"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("6vWYnRDEHu7kRLbA2dnBgEfbdba72iDMDD9k3munyPaP"),
    tokenIds: [Tokens.grapeToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.grapeToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.grapeToken), { addr: new web3_js_1.PublicKey("686KiYDMMkbredNoWx8yqvAdKSiHuWSG3dnbL6yWYmZp") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("9i14ZKzaDmzKCAQb8hCv4h5GCo2Xiq83JcL7bofk4Ddj") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.abrUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("rxwsjytcEBvXpXrXBL1rpsjhoh78imBn8WbxjKmLRge"),
    nonce: 252,
    authority: new web3_js_1.PublicKey("AcaxutE6Rh9vRxipTLdqinEdRK6R4ayUAAv2bZPh6UU9"),
    poolTokenMint: new web3_js_1.PublicKey("GMzPbaCuQmeMUm1opH3oSCgKUjVgJUW14myq99RVPGX5"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("7pPJGwd8Vq7aYmHaocQpQSfTn3UWYGKUgFkFhpMmRdDF"),
    tokenIds: [Tokens.abrToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.abrToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.abrToken), { addr: new web3_js_1.PublicKey("6FRxhbY7bvSiDojPiqoidjTyDjxaUyCoPQk3ifEdfFbm") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("8aTapFecZRZmC2bTeKr2voHFW2twNvbrh8nWYdXYQWkZ") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.kuroUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("HdeYs4bpJKN2oTb7PHxbqq4kzKiLr772A5N2gWjY57ZT"),
    nonce: 250,
    authority: new web3_js_1.PublicKey("2KRcBDQJWEPygxcMMFMvR6dMTVtMkJV6kbxr5e9Kdj5Q"),
    poolTokenMint: new web3_js_1.PublicKey("DRknxb4ZFxXUTG6UJ5HupNHG1SmvBSCPzsZ1o9gAhyBi"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("5XuLrZqpX9gW3pJw7274EYwAft1ciTXndU4on96ERi9J"),
    tokenIds: [Tokens.kuroToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.kuroToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.kuroToken), { addr: new web3_js_1.PublicKey("DBckbD9CoRBFE8WdbbnFLDz6WdDDSZ7ReEeqdjL62fpG") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("B252w7ZkUX4WyLUJKLEymEpRkYMqJhgv2PSj2Z2LWH34") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.mediaUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("5L2aVMnNsmrnkxU4B25ajb2pR5AJWBRfUa73wjasjyaB"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("HX3JKg5HtboRw9nQRWm47rSJkBHczdcXwBgWASyHi3Wk"),
    poolTokenMint: new web3_js_1.PublicKey("2toFgkQDoPrTJYGDEVoCasPXuL9uQnjvXJaDwa9LHyTx"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("5BkyYnBWnzBWQKnU9AcUaDrmyhjLpAcFxCvVTTnRGyYk"),
    tokenIds: [Tokens.mediaToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.mediaToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.mediaToken), { addr: new web3_js_1.PublicKey("BFAyLvCbMhgF7CQ9fsWWK46jD9mPXfBMDWvXgk5LTgsT") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("7CvBsWsfEif4sAo9dnsf1JKVAfBGcZUVTktqtxBSkgwB") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.tulipUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("BNwrRN23RCoq5MAneJ6Cot7iN2FLtyt9rtcjaVfAXTLt"),
    nonce: 253,
    authority: new web3_js_1.PublicKey("EFZs7veYVdWBHt7RcAPvXQc46gDzccpZTxAcEm6NyXFg"),
    poolTokenMint: new web3_js_1.PublicKey("4SBx8GXu8HhcVHWydQv1vsDdZs3G93XSL9CtMBny6hS5"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("8BiqDTCBQ77qjGpED2was7C4iHJrQx9bXhzRt3Wz9xJG"),
    tokenIds: [Tokens.tulipToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.tulipToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.tulipToken), { addr: new web3_js_1.PublicKey("5CKd5M2nXdPM1TMXxqK6Up6GZehKL5uU9Z9Ytm2sFCiz") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("HjMQnuxjVRodoaAg9WcNXb9TAssDaFNpgwcUUKNjWdh5") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.mngoUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("Hk9ZCvmqVT1FHNkWJMrtMkkVnH1WqssWPAvmio5Vs3se"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("5RyiYaHFDVupwnwxzKCRk7JY1CKhsczZXefMs3UUmx4Z"),
    poolTokenMint: new web3_js_1.PublicKey("H9yC7jDng974WwcU4kTGs7BKf7nBNswpdsP5bzbdXjib"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("FWKcKaMfaVezLRFr946MdgmpTZHG4A2GgqehAxjTyDAB"),
    tokenIds: [Tokens.mngoToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.mngoToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.mngoToken), { addr: new web3_js_1.PublicKey("J8bQnhcNyixFGBskQoJ2aSPXPWjvSzaaxF4YPs96XHDJ") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("5yMoAhjfFaCPwEwKM2VeFFh2iBs5mHWLTJ4LuqZifsgN") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.stsolWstethPool = Object.freeze({
    address: new web3_js_1.PublicKey("B32UuhPSp6srSBbRTh4qZNjkegsehY9qXTwQgnPWYMZy"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("EtwQJxu8wih29vMpdTa74K9W9tgtL4LT6hbWBkhHwvU5"),
    poolTokenMint: new web3_js_1.PublicKey("Eswigpwm3xsipkTqahGi2PEJsJcULQBwZgxhQpr6yBEa"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("74b9j23njRpt3PYPxoze2XS29ZgGmucziLB7WrsDpBdD"),
    tokenIds: [Tokens.stsolToken.mint.toString(), Tokens.wstethToken.mint.toString()],
    tokens: {
        [Tokens.stsolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.stsolToken), { addr: new web3_js_1.PublicKey("CeSEpgqc3zV8xDr7Q6PiwJju6a6e92wpAv7Kg6QyFfQB") }),
        [Tokens.wstethToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.wstethToken), { addr: new web3_js_1.PublicKey("Fb3XpEJgghTURUGd1wphWr93ruX5egnesfdZtjWCxJFy") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.sypUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("5DnwMqYAGEKekYXJdN8Bue6vN1p5zrEnBpmd53jEK61S"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("4NfadURWeSDPJBGcKQRt39mPhbG9M7EJx6FZDwwcFB9f"),
    poolTokenMint: new web3_js_1.PublicKey("qJxKN9BhxbYvRNbjfK2uAVWboto6sonj8XC1ZEW5XTB"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("57L2bEFecsAv4jnaM2PBaeAVyPZEYtTmXBi7eaG2xWXw"),
    tokenIds: [Tokens.sypToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.sypToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.sypToken), { addr: new web3_js_1.PublicKey("6d19CQA1FP2MLLAzA7XoZEc9Agc32FaKUS175UVWLGtv") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("HpPnUHyo19VjmXbP6FbbKXu7WQCUEn6h7be76fZdHVmf") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.stsolWldoPool = Object.freeze({
    address: new web3_js_1.PublicKey("CqwyVxWeaiikQ3VhvEZSEmupmG1Wmc2FeaUjsCV492Sx"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("213QoNt5dR56Ye2sx9cwPwpR3NpJUEStQXn8EbbWKkfJ"),
    poolTokenMint: new web3_js_1.PublicKey("74B9aMS7SA832xKngt5VLKmWAP3pa3qkUzWncTmQSsGF"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("D4kH4fcwwDtGMj4LpcynB977YVnmvDUcuDQoo5sqAgRz"),
    tokenIds: [Tokens.stsolToken.mint.toString(), Tokens.wldoToken.mint.toString()],
    tokens: {
        [Tokens.stsolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.stsolToken), { addr: new web3_js_1.PublicKey("GDprNAcXeR5GVGnCtkS5UqyPGMm2Sy5Lk15qqN36faMT") }),
        [Tokens.wldoToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.wldoToken), { addr: new web3_js_1.PublicKey("VCgdcsExfmxUDQwusLP2xqZ3ap7VuYyQMMHDPSva2hx") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.whethSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("FcEro2uFpHcb7Z785CBs6q12KMJqUJKa8VTXPi4TTBMf"),
    nonce: 252,
    authority: new web3_js_1.PublicKey("HMxZz8fv2uR9suzAPRbJGNB3wZL1eT3eKL3cpYWUbM8K"),
    poolTokenMint: new web3_js_1.PublicKey("7aYnrdmdCRodDy2Czn6keUquUhjF1jPEmfwZPh488z8U"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("YCVJDKdHNi1mhJtWz7QGbBRreMmw1soeipz7wZbQKEK"),
    tokenIds: [Tokens.whethToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.whethToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.whethToken), { addr: new web3_js_1.PublicKey("3uQytDKNd5H6XK8FhTei4wCUmj2eTbLTbiLAtWk2SmbA") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("GR3g8Wej3jmv92hYM1t22kaXog2xjkGjQ7V1XzLd1efT") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.whethUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("4reGGLbesqpAeAZdAJv9hhgA2tgj45oGcyRuEvhATdMm"),
    nonce: 252,
    authority: new web3_js_1.PublicKey("8uLtzZ1iTLTCPsm3b4QttRmDXcFjhVHRuMS9VTVEwo7E"),
    poolTokenMint: new web3_js_1.PublicKey("7NPtjjAP7vhp4t5NCLyY4DY5rurvyc8cgZ2a2rYabRia"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("AVw52spXtzFh4bb5ghhpJaDbLx3XWuY85eQNDEo3X1yN"),
    tokenIds: [Tokens.whethToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.whethToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.whethToken), { addr: new web3_js_1.PublicKey("9KpjcpKwhoFPbixvKDfcAhBQcVXk1CSBTGsJdzojDPRv") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("5HaG31FQS4McBVcHxVfwaKaWXE3VCGqvJ1ZDkTxs94cQ") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.mndeMsolPool = Object.freeze({
    address: new web3_js_1.PublicKey("vjHagYsgZwG9icyFLHu2xWHWdtiS5gfeNzRhDcPt5xq"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("3HWcojnC1ruEMmsE92Ez1BoebdDXzYQa4USaeWX7eTuM"),
    poolTokenMint: new web3_js_1.PublicKey("5PHS5w6hQwFNnLz1jJFe7TVTxSQ98cDYC3akmiAoFMXs"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("46mdANZ2DCA2sTFchvD7WwbffbLQa4jCFkkRL23WuYG8"),
    tokenIds: [Tokens.mndeToken.mint.toString(), Tokens.msolToken.mint.toString()],
    tokens: {
        [Tokens.mndeToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.mndeToken), { addr: new web3_js_1.PublicKey("2LferrWvYWtHFfdkmixzt9g3aKa3yBNfgbRrP1CcWMMp") }),
        [Tokens.msolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.msolToken), { addr: new web3_js_1.PublicKey("GimsuZjYqMXM6xK6S3e9JpGvX6jaMPuNeR6s2piDESmy") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.wagUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("B76e3wtCDTKBgKQjvx87EBkDLPGcCY9w1SGiwjD5kaK7"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("FRUmMZDiZrDrwioiUYi3tdqF7SEBeT219bBu54PGxoCo"),
    poolTokenMint: new web3_js_1.PublicKey("Df6XNHMF3uRVZnz7LCEGiZVax6rXgz76owtVkBHEjSb6"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("BCuRKfsM99LJFCchKUBLBZ26UuziDewJDRkkKMwx2qnd"),
    tokenIds: [Tokens.wagToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.wagToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.wagToken), { addr: new web3_js_1.PublicKey("8voSogytL9jLgE73GS3WuujBinKFRQJjvUFsVGYexWZd") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("HEP7mACuN13cT95eDAYTNjgwriqJnMQVhnyRctqnBRe4") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.msolUsdtPool = Object.freeze({
    address: new web3_js_1.PublicKey("Afofkb7JTc32rdpqiyc3RDmGF5s9N6W1ujcdYVfGZ5Je"),
    nonce: 251,
    authority: new web3_js_1.PublicKey("8vrC1FAnW6hQMwJuU5waZdRrBbDJTULqjpdc4GjDtKR6"),
    poolTokenMint: new web3_js_1.PublicKey("9cMWe4UYRPGAUUsTkjShJWVM7bk8DUBgxtwwH8asFJoV"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("7GPvi21QbwMyBoXU5Zqf8VhnuEh7VH4A1SRPgHJ36eE7"),
    tokenIds: [Tokens.msolToken.mint.toString(), Tokens.usdtToken.mint.toString()],
    tokens: {
        [Tokens.msolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.msolToken), { addr: new web3_js_1.PublicKey("RTXKRxghfWJpE344UG7UhKnCwN2Gyv6KnNSTFDnaASF") }),
        [Tokens.usdtToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdtToken), { addr: new web3_js_1.PublicKey("J15KntYr6iout4ce2kcD2QEdkVbLN4EHHFLfCtke3f6Y") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.msolWhethPool = Object.freeze({
    address: new web3_js_1.PublicKey("A71DQffTzgxBSzXjPL3tmf8XXTNtS5mR2D78Y8rmV2hk"),
    nonce: 250,
    authority: new web3_js_1.PublicKey("FPWpe7QEQnDMivnHksQW2uvcw9tvX1oxejKBX136WRkr"),
    poolTokenMint: new web3_js_1.PublicKey("5qoTq3qC4U7vFxo3iCzbXcaD1UEmDeCD63Dsuoct71oV"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("FSqUYVzF3XZzLcnj132eT6ed3bK95G1yG4MazcHZi99Q"),
    tokenIds: [Tokens.msolToken.mint.toString(), Tokens.whethToken.mint.toString()],
    tokens: {
        [Tokens.msolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.msolToken), { addr: new web3_js_1.PublicKey("Fcp5u8bL3V24MXjA4noSfMpcEAP2vSj1WTaA1ZNxACZL") }),
        [Tokens.whethToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.whethToken), { addr: new web3_js_1.PublicKey("DuBCBX3y2FjDWUn2ncK5EKQh229JiJ7HTCjYJhNC87K8") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.btcMsolPool = Object.freeze({
    address: new web3_js_1.PublicKey("8DRw5wQE1pyg6RB1UwypGNFgb2Pzp2hpyDDNwo76Lcc8"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("3X1aLdyvcQNc8TvBMPiucMsRCnGMBnGsjJHpZEyCf3pn"),
    poolTokenMint: new web3_js_1.PublicKey("8nKJ4z9FSw6wrVZKASqBiS9DS1CiNsRnqwCCKVQjqdkB"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("AqiLHbUAy4UWWKGVVgbHsaUVCMg1zemNkgsYBPSirT92"),
    tokenIds: [Tokens.btcToken.mint.toString(), Tokens.msolToken.mint.toString()],
    tokens: {
        [Tokens.btcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.btcToken), { addr: new web3_js_1.PublicKey("6D3sxC6yEe84FUnF5Kpbgx6gN57N9poJCKAtrCeCWdJo") }),
        [Tokens.msolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.msolToken), { addr: new web3_js_1.PublicKey("EPoVJLhi9QtVPVo8n31M5k5Knvb48j8zbYyRrUbrHwC5") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.ivnSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("CFCivUWXBuULVNfJezj1fAhX6hdwVFi2BsCtpu6m96bR"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("JGhNs5r7YNnJokzzXZWE3REKV8x4GiUvn2xSg7XGg59"),
    poolTokenMint: new web3_js_1.PublicKey("DfgCnzaiTXfPkAH1C1Z441b5MzjjTCEh134ioxqRZxYf"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("HwwgrSjJGFBtRN8h2daWnVLBciwoo79wNeKi6b5SZmE2"),
    tokenIds: [Tokens.ivnToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.ivnToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.ivnToken), { addr: new web3_js_1.PublicKey("C5yDeB3jBz5yZPa6FgP6b7HNoFxLP63Pyzpaosnkikis") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("CCm846T6xj9VAhSAifuUJAXYCR3kaGp5KqhXFHCaeWUh") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.larixUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("DaNULZAv2VyLk75pW3QD5szVzx5dT6iNvoih94Bttqf5"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("FUVkG7fM3i8T49qV7WsJd68rBaYKvqTkAQCdftqTWWNj"),
    poolTokenMint: new web3_js_1.PublicKey("8sfThep3io4gvcGeuoAg1Rs8GDwKJjtcdAFHqQSSNAVE"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("AVb9Bvu4rjFYNCHygEnAYCjwnkgtC8C6UmJ7at3dsfdz"),
    tokenIds: [Tokens.larixToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.larixToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.larixToken), { addr: new web3_js_1.PublicKey("AAjjSJsZM3AKK4h9cbGTHkquEZ2fWjgo9A9Pmrj2ynTH") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("82Fs8dSpMxPPfN1ULsXGFREHWz3JizREpTxwz2MaZ1n1") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.prtUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("CRm5uRBsVmUVHVqKfCCvCUX1RLUkjfcBWAeMQ5D9VuCM"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("A9eqdCXYys7jeoroMFEnkGLoYLa2q5gGbg8RSKHkR2ne"),
    poolTokenMint: new web3_js_1.PublicKey("6jCERp5hKj37PCXP3VTjCDJeoPuSpnMDMz5A6jWQv3yS"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("FHVidN2ZdGnVaCjYwLjLXrimPbVsaqsUEEiGcVZ6WAPq"),
    tokenIds: [Tokens.prtToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.prtToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.prtToken), { addr: new web3_js_1.PublicKey("3oL2GjsUnQLjHw77p78CsRr7t94AVrtsCnW5uf6NYQ3g") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("2EiVwvsH5cvyk4W243zKoywkaEQb9Bwe9WGphRgBSqaP") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.jetUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("ErWwp9HKjk5ZPLDt8SrHKH5PvSKTwFDdFo5E3zDuE5Be"),
    nonce: 253,
    authority: new web3_js_1.PublicKey("GYY1t5d4pZnJC4rMXGY9yKMyCzLqxRqbtSguD2KkxghH"),
    poolTokenMint: new web3_js_1.PublicKey("GBijunwxa4Ni3JmYC6q6zgaVhSUJU6hVX5qTyJDRpNTc"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("6NhybmW42rdWj5TcobNKQT6JaZispgngcfTDrCsgVq4Q"),
    tokenIds: [Tokens.jetToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.jetToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.jetToken), { addr: new web3_js_1.PublicKey("GEtZSc8188t2cCAv21UGCyjvxCeyU5Co99GtRtyTkpdh") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("Bi95f8H7o7zHWuYysxDHEubPv4c3NhsHWhaesXJu91NC") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.stsolUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("EfK84vYEKT1PoTJr6fBVKFbyA7ZoftfPo2LQPAJG1exL"),
    nonce: 252,
    authority: new web3_js_1.PublicKey("8PSN1CQxfyZ7T4sM3HM3RAgF2Y6VCf4tKSc8xY73Tnq5"),
    poolTokenMint: new web3_js_1.PublicKey("GtQ1NT7R5aaTiST7K6ZWdMhwDdFxsSFvVFhBo8vyHGAq"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("CJhL3UGesECFt6fvLB3csrGMuHf3M3G78pUzTopUiV8T"),
    tokenIds: [Tokens.stsolToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.stsolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.stsolToken), { addr: new web3_js_1.PublicKey("9SEBxqhP8sTAzmfiQfCPim1MqQXuDPb6fkGzJF7Z339i") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("G45yhM5mZ5RXZpLxGWLk3PVzdAp33z8aH6F9mLW8fQj3") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.wstethUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("v51xWrRwmFVH6EKe8eZTjgK5E4uC2tzY5sVt5cHbrkG"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("3Kk8rpjxpc9qv2pJPr1CbmyQqrTDPntpryXActLogQeD"),
    poolTokenMint: new web3_js_1.PublicKey("5a6Y1ephcbKSoyLMQyD1JWbtqawCy8p2FtRL9v3zhaG5"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("ACKiRmbiMaPEc73pz4dVMuJGPaa74Vx9sfYADjnHuzvo"),
    tokenIds: [Tokens.wstethToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.wstethToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.wstethToken), { addr: new web3_js_1.PublicKey("5c4tzhRVaCxpmu8o3HrEZ8PWBDKSR6QNkBdQrUo9oe3e") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("AFNaWHH7ZGFjB7y7jmPM7jVs7QBAciffu7Z5tZidRHPR") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.auryUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("6HSguUukDH9zqJBm6oAAmFkg1WK9dJ5iLgnppTCM6jHm"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("9T1koZp2PNJgspcx3G22yLiChBUfYzAjs2dhj2kgw2LZ"),
    poolTokenMint: new web3_js_1.PublicKey("6mJqqT5TMgveDvxzBt3hrjGkPV5VAj7tacxFCT3GebXh"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("JCqbv7r3mtYhzruNFjc21X14fndDVBLMiaNQrsHVpWui"),
    tokenIds: [Tokens.auryToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.auryToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.auryToken), { addr: new web3_js_1.PublicKey("413s6jiRbayD9didA4VnY8kQVgVBgkYNpYB2tyNf8sbh") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("GdPeogNxRWAZtUj7ZHc7fUpBuGHJosdbukiT2krFtXm8") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.avaxUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("7c2CLgatf2TU36PgpS65WLmvWk94rmaHVf1Z1peZ7mcA"),
    nonce: 251,
    authority: new web3_js_1.PublicKey("Mq46N9EknnxHL9fRkJhS4Eg9YXRifHiWzFJTD11ePWC"),
    poolTokenMint: new web3_js_1.PublicKey("Hmfrtmo93DpSDmVNLQKcBS5D1ia5JatiRSok9ososubz"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("7JH76Kw4dHyC5szRXkx6MFkJ3BEViodfNy15uFJst1cX"),
    tokenIds: [Tokens.avaxToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.avaxToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.avaxToken), { addr: new web3_js_1.PublicKey("5rU6M2jAXQMSmgrsn14BPoVVhoBdCU6y5cP7XMjN4ZYy") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("D28rzq246bcXBrYiCeALY86y8NwvCUmuJGNggvKsh4WR") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.fttUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("8npdwWX2BR39kcFLtTJABbcjNq7NWQvipfqxgsfk9mTX"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("8zU13KiLb1e87skt4rf8q1LhamEKKecyu6Xxb4Hqnm7e"),
    poolTokenMint: new web3_js_1.PublicKey("FwCombynV2fTVizxPCNA2oZKoWXLZgdJThjE4Xv9sjxc"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("C8D52rGuZcsBENhWtR9aqJVRU62cL7jyyEhxesKwc1k8"),
    tokenIds: [Tokens.fttToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.fttToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.fttToken), { addr: new web3_js_1.PublicKey("SasuKsATA2ATrMfFfSJr86wAGVgdS69PkQT3jFASBB8") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("3wADiuUqoakdoYYYxKqwoA4VN3uWZy5UwvLePox1mEsK") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.rayUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("2R2VhohRc5WoNHtRdwnjovAQaZRAmr1DE3QFW5jfgb6v"),
    nonce: 252,
    authority: new web3_js_1.PublicKey("9B9ZcYT8jDQ6XLe6gRLDCFv1zz3uHVKdbZT9DFhsYSQW"),
    poolTokenMint: new web3_js_1.PublicKey("4cXw2MYj94TFBXLL73fEpMCr8DPrW68JvrV8mzWgktbD"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("HURhvCRsrwwR5TiG75Hn274WwL76kaKgjgC6n9h4FEHj"),
    tokenIds: [Tokens.rayToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.rayToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.rayToken), { addr: new web3_js_1.PublicKey("9ASj9zDg7cT6wtvn4euSUiZte8yN2U3Tn6cTVZvMHbU7") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("HGTxSWbb62nxk4oGkLkHUvrEzR5D4GKYRb8ZDcA2dpki") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.slndUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("GhosXH9yZPxqSyTHqJtXQt6w65YfiGjKXcEXciX1P3z8"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("ChmSHndtXRsYnFjYA2F7yRRsnyZ8kCpxSogTsCUgCEsh"),
    poolTokenMint: new web3_js_1.PublicKey("F59gkD7NnsdJbFKrRZsiBC8PAooN4c56T8QmahfW1iXN"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("GMipxN5pu6F6wwUrq6RhpqgcMjcKLTsnDTeNFCuUm5n7"),
    tokenIds: [Tokens.slndToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.slndToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.slndToken), { addr: new web3_js_1.PublicKey("9RcdfprKxbTzp3erTJMwXKznNCLmbCUaKhibaTMXhToi") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("6wEh8r3Czc3nKkN6JXobShnLG7ZqA5Y5DREGzkirYR36") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
/**
 * Mapping for OrcaPool parameters
 * Key: poolTokenMint : OrcaPoolParams
 */
exports.orcaPoolConfigs = {
    APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9: exports.solUsdcPool,
    FZthQCuYHhcfiDma7QrX7buDHwrZEd7vL8SjS6LQa3Tx: exports.solUsdtPool,
    "71FymgN2ZUf7VvVTLE8jYEnjP3jSK1Frp2XT1nHs8Hob": exports.ethSolPool,
    "3e1W6Aqcbuk2DfHUwRiRcyzpyYRRjg6yhZZcyEARydUX": exports.ethUsdcPool,
    "5kimD5W6yJpHRHCyPtnEyDsQRdiiJKivu5AqN3si82Jc": exports.raySolPool,
    ADrvfPBsRcJfGsN6Bs385zYddH52nuM5FA8UaAkX9o2V: exports.ropeSolPool,
    "8nTzqDXHriG2CXKbybeuEh1EqDQMtrbYMFWcP7AkiDaP": exports.stepSolPool,
    "9tf8rBSEQYG7AqL896fN2nZi1iYPqpWaLEdpbeQaC1Vy": exports.srmSolPool,
    EsYaDKJCmcJtJHFuJYwQZwqohvVMCrFzcg8yo3i328No: exports.fttSolPool,
    CzieDbGRdN1QGaGDNpSqzEA18bi881ccvkkGZi51pe1k: exports.copeSolPool,
    "7tYCdLN84EnTMkxM7HNamWJx7F4xgKe9KiiWvLyWjbgT": exports.oxySolPool,
    Acxs19v6eUMTEfdvkvWkRB4bwFCHm3XV9jABCy7c1mXe: exports.btcSolPool,
    HiwRobjfHZ4zsPtqCC4oBS24pSmy4t8GGkXRbQj4yU6L: exports.merSolPool,
    EYsNdtyu4gGTaGz8N5m5iQ3G1N6rDyMbR72B3CqbWW4W: exports.fidaSolPool,
    "99pfC8fWymXgbq3CvrExhx3UxQDC1fMWEWLbNT83F45e": exports.mapsSolPool,
    H2uzgruPvonVpCRhwwdukcpXK8TG17swFNzYFr2rtPxy: exports.usdcUsdtPool,
    "2uVjAuRXavpM6h1scGQaxqb6HVaNRn6T2X7HHXTabz25": exports.orcaSolPool,
    n8Mpu28RjeYD7oUX3LG1tPxzhRZh3YYLRSHcHRdS3Zx: exports.orcaUsdcPool,
    HEvnD66WcBfTajS9adUYnGRBMDehFtLySiFHSD6kEBWs: exports.kinSolPool,
    D6N9j8F2DhtzDtrdpT74y3u2YmYAzcggiLc3nTjqux9M: exports.samoSolPool,
    "3PD9SZFwXKkXr4akLf4ofo37ZUMycwML89R2P3qxcbZG": exports.liqUsdcPool,
    AZpo4BJHHRetF96v6SGinFZBMXM4yWMo4RA8C4PriDLk: exports.snyUsdcPool,
    "8PSfyiTVwPb6Rr2iZ8F3kNpbg65BCfJM9v8LfB916r44": exports.msolUsdcPool,
    AtB4nUmdyQfuWWJ9xAHw9xyVnJFfSjSuVWkiYan8y86w: exports.slrsUsdcPool,
    F8gPSpwVHj8FdAJAYULDuZBxFEJut87hUbARYYx3471w: exports.portUsdcPool,
    CS7fA5n4c2D82dUoHrYzS3gAqgqaoVSfgsr18kitp2xo: exports.sbrUsdcPool,
    Dkr8B675PGnNwEr9vTKXznjjHke5454EQdz3iaSbparB: exports.scnsolUsdcPool,
    C2YzN6MymD5HM2kPaH7bzcbqciyjfmpqyVaR3KA5V6z1: exports.psolUsdcPool,
    "29cdoMgu6MS2VXpcMo1sqRdWEzdUR9tjvoh8fcK8Z87R": exports.msolSolPool,
    C7TH2jEJJaxVwwuvkbcDGfHUiZvEkkeYjyAcdTMi5ujb: exports.orcaPaiPool,
    CVapmQn7HaU1yMDW3q6oUV4hx6XoYv54T4zfGXkuJqkA: exports.orcaMsolPool,
    APNpzQvR91v1THbsAyG3HHrUEwvexWYeNCFLQuVnxgMc: exports.scnsolSolPool,
    FZ8x1LCRSPDeHBDoAc3Gc6Y7ETCynuHEr5q5YWV7uRCJ: exports.atlasUsdcPool,
    GteBdo9sqE7T41G8AJsaG9WHW48uXBwsLLznmu2TBdgy: exports.polisUsdcPool,
    "2gXDJZ7XAtQEtf4PRSQZKoq1WMuu1H44tQanbMA3YVpu": exports.bopUsdcPool,
    "6VK1ksrmYGMBWUUZfygGF8tHRGpNxQEWv8pfvzQHdyyc": exports.samoUsdcPool,
    "4X1oYoFWYtLebk51zuh889r1WFLe8Z9qWApj87hQMfML": exports.ninjaSolPool,
    BVWwyiHVHZQMPHsiW7dZH7bnBVKmbxdeEjWqVRciHCyo: exports.slimUsdcPool,
    ELfBngAgvLEHVBuJQhhE7AW6eqLX7id2sfrBngVNVAUW: exports.whapiUsdcPool,
    HsauTv9s52Zv12eaDuSp6y7BEm4e4BHEyAsbdjyyWzPK: exports.copeUsdcPool,
    GHuoeq9UnFBsBhMwH43eL3RWX5XVXbSRYJymmyMYpT7n: exports.sunnyUsdcPool,
    EorFh8siFyLF1QTZ7cCXQaPGqyo7eb4SAgKtRH8Jcxjd: exports.grapeUsdcPool,
    GMzPbaCuQmeMUm1opH3oSCgKUjVgJUW14myq99RVPGX5: exports.abrUsdcPool,
    DRknxb4ZFxXUTG6UJ5HupNHG1SmvBSCPzsZ1o9gAhyBi: exports.kuroUsdcPool,
    "2toFgkQDoPrTJYGDEVoCasPXuL9uQnjvXJaDwa9LHyTx": exports.mediaUsdcPool,
    "4SBx8GXu8HhcVHWydQv1vsDdZs3G93XSL9CtMBny6hS5": exports.tulipUsdcPool,
    H9yC7jDng974WwcU4kTGs7BKf7nBNswpdsP5bzbdXjib: exports.mngoUsdcPool,
    Eswigpwm3xsipkTqahGi2PEJsJcULQBwZgxhQpr6yBEa: exports.stsolWstethPool,
    qJxKN9BhxbYvRNbjfK2uAVWboto6sonj8XC1ZEW5XTB: exports.sypUsdcPool,
    "74B9aMS7SA832xKngt5VLKmWAP3pa3qkUzWncTmQSsGF": exports.stsolWldoPool,
    "7aYnrdmdCRodDy2Czn6keUquUhjF1jPEmfwZPh488z8U": exports.whethSolPool,
    "7NPtjjAP7vhp4t5NCLyY4DY5rurvyc8cgZ2a2rYabRia": exports.whethUsdcPool,
    "5PHS5w6hQwFNnLz1jJFe7TVTxSQ98cDYC3akmiAoFMXs": exports.mndeMsolPool,
    Df6XNHMF3uRVZnz7LCEGiZVax6rXgz76owtVkBHEjSb6: exports.wagUsdcPool,
    "9cMWe4UYRPGAUUsTkjShJWVM7bk8DUBgxtwwH8asFJoV": exports.msolUsdtPool,
    "5qoTq3qC4U7vFxo3iCzbXcaD1UEmDeCD63Dsuoct71oV": exports.msolWhethPool,
    "8nKJ4z9FSw6wrVZKASqBiS9DS1CiNsRnqwCCKVQjqdkB": exports.btcMsolPool,
    DfgCnzaiTXfPkAH1C1Z441b5MzjjTCEh134ioxqRZxYf: exports.ivnSolPool,
    "8sfThep3io4gvcGeuoAg1Rs8GDwKJjtcdAFHqQSSNAVE": exports.larixUsdcPool,
    "6jCERp5hKj37PCXP3VTjCDJeoPuSpnMDMz5A6jWQv3yS": exports.prtUsdcPool,
    GBijunwxa4Ni3JmYC6q6zgaVhSUJU6hVX5qTyJDRpNTc: exports.jetUsdcPool,
    GtQ1NT7R5aaTiST7K6ZWdMhwDdFxsSFvVFhBo8vyHGAq: exports.stsolUsdcPool,
    "5a6Y1ephcbKSoyLMQyD1JWbtqawCy8p2FtRL9v3zhaG5": exports.wstethUsdcPool,
    "6mJqqT5TMgveDvxzBt3hrjGkPV5VAj7tacxFCT3GebXh": exports.auryUsdcPool,
    Hmfrtmo93DpSDmVNLQKcBS5D1ia5JatiRSok9ososubz: exports.avaxUsdcPool,
    FwCombynV2fTVizxPCNA2oZKoWXLZgdJThjE4Xv9sjxc: exports.fttUsdcPool,
    "4cXw2MYj94TFBXLL73fEpMCr8DPrW68JvrV8mzWgktbD": exports.rayUsdcPool,
    F59gkD7NnsdJbFKrRZsiBC8PAooN4c56T8QmahfW1iXN: exports.slndUsdcPool,
};
