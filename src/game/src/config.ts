import { BootScene } from './scenes/boot-scene';
import { PreloaderScene } from './scenes/preloader-scene';
import { ConnectWallet } from './scenes/connect-wallet-scene';
import { GameOver } from './scenes/game-over-scene';
import { Game } from './scenes/game-scene';
import { Inventory } from './scenes/inventory-scene';
import { SelectTank } from './scenes/select-tank-scene';

export const GameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Thetanks',
  url: 'https://github.com/waylad/thetanks',
  version: '2.0',
  width: 1600,
  height: 800,
  type: Phaser.AUTO,
  parent: 'game',
  scene: [BootScene, PreloaderScene, ConnectWallet, SelectTank, Game, Inventory, GameOver],
  input: {
    keyboard: true,
    mouse: true,
    touch: false,
    gamepad: false
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  backgroundColor: '#FFFFFF',
  render: { pixelArt: false, antialias: true }
};
