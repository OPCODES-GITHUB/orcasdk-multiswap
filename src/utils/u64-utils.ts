import { u64 } from "@solana/spl-token";
import Decimal from "decimal.js";
import { OrcaU64 } from "..";
import { OrcaPoolToken } from "../model/orca/pool/pool-types";
import { DecimalUtil } from "./decimal-utils";

export const ZERO = new u64(0);
export const ONE = new u64(1);

export class U64Utils {
  public static toTokenU64(input: Decimal | OrcaU64, token: OrcaPoolToken, varName: string) {
    if (input instanceof OrcaU64) {
      if (input.scale !== token.scale) {
        throw new Error(
          `${varName}'s scale of ${input.scale} does not match token's decimal of ${token.scale}`
        );
      }
      return input.toU64();
    }

    return DecimalUtil.toU64(input, token.scale);
  }

  public static ceilingDivision(dividend: u64, divisor: u64): [u64, u64] {
    let quotient = dividend.div(divisor);
    if (quotient.eq(ZERO)) {
      return [ZERO, divisor];
    }

    let remainder = dividend.mod(divisor);
    if (remainder.gt(ZERO)) {
      quotient = quotient.add(ONE);
      divisor = dividend.div(quotient);
      remainder = dividend.mod(quotient);
      if (remainder.gt(ZERO)) {
        divisor = divisor.add(ONE);
      }
    }

    return [quotient, divisor];
  }

  public static toU64(value: number | Decimal, decimals: number): u64 {
    const shifter = Math.pow(10, decimals);
    const shiftedValue = typeof value === "number" ? value * shifter : value.mul(shifter);

    return new u64(shiftedValue.toString());
  }
}