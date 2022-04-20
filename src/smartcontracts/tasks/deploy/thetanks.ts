// import { task } from "@nomiclabs/hardhat-ethers/signers";
import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

import { Thetanks__factory } from "../../src/types/factories/contracts/Thetanks__factory";
import { Thetanks } from "../../src/types/contracts/Thetanks";

task("deploy:Thetanks")
  // .addParam("greeting", "Say hello, be nice")
  .setAction(async function (taskArguments: TaskArguments, { ethers }) {
    // const signers: SignerWithAddress[] = await ethers.getSigners();
    const thetanksFactory: Thetanks__factory = <Thetanks__factory>await ethers.getContractFactory("Thetanks");
    const thetanks: Thetanks = <Thetanks>await thetanksFactory.deploy('THETANKS', 'THETANKS');//, { from: signers[0].address });
    await thetanks.deployed();
    console.log("Thetanks deployed to: ", thetanks.address);
  });
