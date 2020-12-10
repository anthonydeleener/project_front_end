//let Phaser = require("phaser");
import Phaser from "phaser";
import GameScene from "./GameScene.js";
import { setLayout } from "../../utils/render.js";

var game;

const PhaserGamePage = () => {
  //setLayout("Making your first Phaser 3 game");
  let phaserGame = `
<div id="gameDiv" class="d-flex justify-content-center my-3">
</div>`;

  let page = document.querySelector("#page");
  page.innerHTML = phaserGame;

  let config = {
    type: Phaser.AUTO,
    width: 1100,
    height: 620,
    
    scale: {
      parent: 'page',
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [GameScene],
    //  parent DOM element into which the canvas created by the renderer will be injected.
    parent: "gameDiv",
    "transparent"    : true

  };

  // there could be issues when a game was quit (events no longer working)
  // therefore destroy any started game prior to recreate it
  if(game)
    game.destroy(true);
  game = new Phaser.Game(config);
};

export default PhaserGamePage;
