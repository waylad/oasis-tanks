import { expect } from "chai";

export function shouldBehaveLikeThetanks(): void {
  it("should behave like thetanks", async function () {
    // Mint new ships
    await this.thetanks.connect(this.signers.admin).mintTank(this.signers.admin.address);
    await this.thetanks.connect(this.signers.admin).mintTank(this.signers.admin.address);
    await this.thetanks.connect(this.signers.admin).mintTank(this.signers.admin.address);
    await this.thetanks.connect(this.signers.alice).mintTank(this.signers.alice.address);
    await this.thetanks.connect(this.signers.bob).mintTank(this.signers.bob.address);

    // Get balances
    const adminBalance = await this.thetanks.balanceOf(this.signers.admin.address);
    expect(adminBalance).to.equal(3);
    const aliceBalance = await this.thetanks.balanceOf(this.signers.alice.address);
    expect(aliceBalance).to.equal(1);
    const bobBalance = await this.thetanks.balanceOf(this.signers.bob.address);
    expect(bobBalance).to.equal(1);

    // Get tokenIds
    const adminToken1 = await this.thetanks.tokenOfOwnerByIndex(this.signers.admin.address, 1);
    expect(adminToken1).to.equal(1);
    const adminToken2 = await this.thetanks.tokenOfOwnerByIndex(this.signers.admin.address, 2);
    expect(adminToken2).to.equal(2);
    const adminToken3 = await this.thetanks.tokenOfOwnerByIndex(this.signers.admin.address, 3);
    expect(adminToken3).to.equal(3);
    const adminToken4 = await this.thetanks.tokenOfOwnerByIndex(this.signers.admin.address, 4);
    expect(adminToken4).to.equal(0);
    const aliceToken1 = await this.thetanks.tokenOfOwnerByIndex(this.signers.alice.address, 1);
    expect(aliceToken1).to.equal(4);
    const bobToken1 = await this.thetanks.tokenOfOwnerByIndex(this.signers.bob.address, 1);
    expect(bobToken1).to.equal(5);

    // Get ship codes
    const shipCode1 = await this.thetanks._tokenToTankCode(1);
    expect(shipCode1).to.equal("000");

    // Upgrade ship
    await this.thetanks.connect(this.signers.admin).upgradeTank(1, "123");
    const upgradedTankCode1 = await this.thetanks._tokenToTankCode(1);
    expect(upgradedTankCode1).to.equal("123");
  });
}
