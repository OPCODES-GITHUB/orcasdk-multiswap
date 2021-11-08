"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrcaImpl = void 0;
const orca_factory_1 = require("../orca-factory");
class OrcaImpl {
    constructor(connection) {
        this.connection = connection;
        this.factory = new orca_factory_1.OrcaFactory();
    }
    getPool(pool) {
        return this.factory.getPool(this.connection, pool);
    }
    getFarm(farm) {
        return this.factory.getFarm(this.connection, farm);
    }
}
exports.OrcaImpl = OrcaImpl;
