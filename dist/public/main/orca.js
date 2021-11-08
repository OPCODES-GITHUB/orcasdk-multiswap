"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrca = void 0;
const orca_impl_1 = require("../../model/orca/orca-impl");
/**
 * Retrieve an instance of the Orca SDK
 * @param connection Solana connection class
 * @returns An instance of Orca SDK
 */
function getOrca(connection) {
    return new orca_impl_1.OrcaImpl(connection);
}
exports.getOrca = getOrca;
