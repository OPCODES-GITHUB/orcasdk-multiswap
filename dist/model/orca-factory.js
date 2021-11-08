"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrcaFactory = void 0;
const constants_1 = require("../constants");
const orca_farm_1 = require("./orca/farm/orca-farm");
const orca_pool_1 = require("./orca/pool/orca-pool");
class OrcaFactory {
    getPool(connection, config) {
        return new orca_pool_1.OrcaPoolImpl(connection, constants_1.orcaPoolConfigs[config]);
    }
    getFarm(connection, config) {
        return new orca_farm_1.OrcaFarmImpl(connection, constants_1.orcaFarmConfigs[config]);
    }
}
exports.OrcaFactory = OrcaFactory;
