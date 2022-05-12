import { expect } from "chai";

export function shouldBehaveLikeOasistanks(): void {
  it("should behave like oasistanks", async function () {
    // Mint new tanks
    await this.oasistanks.connect(this.signers.admin).mintTank(this.signers.admin.address);
    await this.oasistanks.connect(this.signers.admin).mintTank(this.signers.admin.address);
    await this.oasistanks.connect(this.signers.admin).mintTank(this.signers.admin.address);
    await this.oasistanks.connect(this.signers.alice).mintTank(this.signers.alice.address);
    await this.oasistanks.connect(this.signers.bob).mintTank(this.signers.bob.address);

    // Get balances
    const adminBalance = await this.oasistanks.balanceOf(this.signers.admin.address);
    expect(adminBalance).to.equal(3);
    const aliceBalance = await this.oasistanks.balanceOf(this.signers.alice.address);
    expect(aliceBalance).to.equal(1);
    const bobBalance = await this.oasistanks.balanceOf(this.signers.bob.address);
    expect(bobBalance).to.equal(1);

    // Get tokenIds
    const adminToken1 = await this.oasistanks.tokenOfOwnerByIndex(this.signers.admin.address, 1);
    expect(adminToken1).to.equal(1);
    const adminToken2 = await this.oasistanks.tokenOfOwnerByIndex(this.signers.admin.address, 2);
    expect(adminToken2).to.equal(2);
    const adminToken3 = await this.oasistanks.tokenOfOwnerByIndex(this.signers.admin.address, 3);
    expect(adminToken3).to.equal(3);
    const adminToken4 = await this.oasistanks.tokenOfOwnerByIndex(this.signers.admin.address, 4);
    expect(adminToken4).to.equal(0);
    const aliceToken1 = await this.oasistanks.tokenOfOwnerByIndex(this.signers.alice.address, 1);
    expect(aliceToken1).to.equal(4);
    const bobToken1 = await this.oasistanks.tokenOfOwnerByIndex(this.signers.bob.address, 1);
    expect(bobToken1).to.equal(5);

    // Get tank codes
    const tankCode1 = await this.oasistanks._tokenToTankCode(1);
    expect(tankCode1).to.equal("000");

    // Upgrade tank
    await this.oasistanks.connect(this.signers.admin).upgradeTank(1, "123");
    const upgradedTankCode1 = await this.oasistanks._tokenToTankCode(1);
    expect(upgradedTankCode1).to.equal("123");
  });
}
