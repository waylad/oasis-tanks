## Oasistanks

### Video demo : https://www.youtube.com/watch?v=8KsU3B5G8bc

### Try it out now on https://oasistanks.io

Oasis Tanks is a tank fighting game with upgradable NFTs. Mint a basic tank to start with. Pilot it in the game and fight enemies! Harvest their parts. Upgrade your tank. Then sell your upgraded NFT.
![](https://oasistanks.io/assets/screenshots/present-model.png)

First, click "connect your wallet". Metamask opens to authorize the connection. If you are not already connected to the Oasis Testnet, Metamask will offer you to do so.
![](https://oasistanks.io/assets/screenshots/connect-wallet-scene.png)

The game will then fetch all your tank NFTs from the smart contract. If you do not yet have a OasisTank NFT, click "Mint New Tank" and Metamask will open to trigger the mint. You will receive a basic tank with entry-level turret, body and chassis. The tank will appear in your list of tanks (if not refresh the page). Select that tank to access the game.
![](https://oasistanks.io/assets/screenshots/select-tank-scene.png)

The game is built with PhaserJS, a 2D Javascript game engine that allows us to pilot our tank and fire at enemies. Use the directional arrows to move the tank and press the space bar to fire. Try to kill the enemy tanks, but be careful not to get hit. When the enemy is destroyed, it drops some loot. Move your tank over it to get it into your inventory.
![](https://oasistanks.io/assets/screenshots/gameplay1.png)

Then open your inventory to see all the parts you have found. Drag and drop a tank part to its corresponding area on your tank to upgrade that part. A Oasis transaction opens that will actually modify your NFT metadata and image with the new part.
![](https://oasistanks.io/assets/screenshots/inventory-scene.png)

The smart contract is a modified ERC721 with a new endpoint to modify an NFT metadata and image.
We have created a NFT collection of 540 unique tanks made of 10 turrets, 9 chassis and 6 bodies.
![](https://oasistanks.io/assets/screenshots/present-parts.png)
![](https://oasistanks.io/assets/screenshots/present-possibilities.png)

### How it's built

The GitHub repository is a mono-repo containing :

- The game, located in `src/game`, built with PhaserJS, a 2D javascript game engine

- The images and metadata generator for the NFTs, located in `src/generator`, a custom script that takes the 10 turrets, 9 chassis and 6 bodies and mix them together to create the 540 combinations of json metadata and png files.

- The smart contracts for upgradable NFTs in `src/contracts`, which is a modified ERC721, created with OpenZepellin, Hardhat and Typechain.

### What's next?

I want to create more parts to generate up to 10,000 unique tanks and then sell the collection in order to finance the development of the game for more enemies, worlds, multiplayer, some storytelling, etc...
