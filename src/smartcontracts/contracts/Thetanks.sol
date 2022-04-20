// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

error ThetanksError();

contract Thetanks is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    mapping(uint256 => string) public _tokenToTankCode;
    mapping(address => mapping(uint256 => uint256)) public _ownedTokens;

    constructor(string memory tokenName, string memory symbol) ERC721(tokenName, symbol) {
        console.log("Deploying Thetanks contract");
    }

    function mintTank(address owner) public returns (uint256) {
        _tokenIds.increment();
        uint256 tokenId = _tokenIds.current();

        _safeMint(owner, tokenId);

        _tokenToTankCode[tokenId] = "000"; // Basic tank

        _addTokenToOwnerEnumeration(owner, tokenId);

        string memory metadataURI = string(abi.encodePacked("https://thetanks.app/assets/tanks/", "000", ".json"));
        _setTokenURI(tokenId, metadataURI);

        return tokenId;
    }

    function upgradeTank(uint256 tokenId, string memory tankCode) public {
        _tokenToTankCode[tokenId] = tankCode;

        string memory metadataURI = string(abi.encodePacked("https://thetanks.app/assets/tanks/", tankCode, ".json"));

        _setTokenURI(tokenId, metadataURI);
    }

    function _addTokenToOwnerEnumeration(address owner, uint256 tokenId) private {
        uint256 length = balanceOf(owner);
        _ownedTokens[owner][length] = tokenId;
    }

    function tokenOfOwnerByIndex(address owner, uint256 index) public view virtual returns (uint256) {
        //require(index < balanceOf(owner), "ERC721Enumerable: owner index out of bounds");
        return _ownedTokens[owner][index];
    }

    function throwError() external pure {
        revert ThetanksError();
    }
}
