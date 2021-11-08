import { Connection } from "@solana/web3.js";
import { Orca, OrcaFarm, OrcaPool, OrcaPoolConfig, OrcaFarmConfig } from "../../public";
export declare class OrcaImpl implements Orca {
    private connection;
    private factory;
    constructor(connection: Connection);
    getPool(pool: OrcaPoolConfig): OrcaPool;
    getFarm(farm: OrcaFarmConfig): OrcaFarm;
}
