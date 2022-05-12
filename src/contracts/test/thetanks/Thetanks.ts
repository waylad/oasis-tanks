import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { artifacts, ethers, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";

import type { Oasistanks } from "../../src/types/contracts/Oasistanks";
import { Signers } from "../types";
import { shouldBehaveLikeOasistanks } from "./Oasistanks.behavior";

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];
    this.signers.alice = signers[1];
    this.signers.bob = signers[2];

  });

  describe("Oasistanks", function () {
    beforeEach(async function () {
      const oasistanksArtifact: Artifact = await artifacts.readArtifact("Oasistanks");
      this.oasistanks = <Oasistanks>await waffle.deployContract(this.signers.admin, oasistanksArtifact, ['OASISTANKS', 'OASISTANKS']);
    });

    shouldBehaveLikeOasistanks();
  });
});
