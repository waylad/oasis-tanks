import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { artifacts, ethers, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";

import type { Thetanks } from "../../src/types/contracts/Thetanks";
import { Signers } from "../types";
import { shouldBehaveLikeThetanks } from "./Thetanks.behavior";

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];
    this.signers.alice = signers[1];
    this.signers.bob = signers[2];

  });

  describe("Thetanks", function () {
    beforeEach(async function () {
      const thetanksArtifact: Artifact = await artifacts.readArtifact("Thetanks");
      this.thetanks = <Thetanks>await waffle.deployContract(this.signers.admin, thetanksArtifact, ['THETANKS', 'THETANKS']);
    });

    shouldBehaveLikeThetanks();
  });
});
