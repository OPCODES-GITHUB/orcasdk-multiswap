import { Connection } from "@solana/web3.js";
import { OrcaPoolConfig, OrcaPool, OrcaFarmConfig, OrcaFarm } from "..";
export declare class OrcaFactory {
    getPool(connection: Connection, config: OrcaPoolConfig): OrcaPool;
    getFarm(connection: Connection, config: OrcaFarmConfig): OrcaFarm;
}
