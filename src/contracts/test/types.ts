import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import type { Fixture } from "ethereum-waffle";

import type { Thetanks } from "../src/types/contracts/Thetanks";

declare module "mocha" {
  export interface Context {
    thetanks: Thetanks;
    loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
    signers: Signers;
  }
}

export interface Signers {
  admin: SignerWithAddress;
  alice: SignerWithAddress;
  bob: SignerWithAddress;
}
