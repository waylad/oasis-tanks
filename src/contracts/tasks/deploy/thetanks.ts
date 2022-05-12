// import { task } from "@nomiclabs/hardhat-ethers/signers";
import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

import { Oasistanks__factory } from "../../src/types/factories/contracts/Oasistanks__factory";
import { Oasistanks } from "../../src/types/contracts/Oasistanks";

task("deploy:Oasistanks")
  // .addParam("greeting", "Say hello, be nice")
  .setAction(async function (taskArguments: TaskArguments, { ethers }) {
    // const signers: SignerWithAddress[] = await ethers.getSigners();
    const oasistanksFactory: Oasistanks__factory = <Oasistanks__factory>await ethers.getContractFactory("Oasistanks");
    const oasistanks: Oasistanks = <Oasistanks>await oasistanksFactory.deploy('OASISTANKS', 'OASISTANKS');//, { from: signers[0].address });
    await oasistanks.deployed();
    console.log("Oasistanks deployed to: ", oasistanks.address);
  });
