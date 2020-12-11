//let Phaser = require("phaser");
import Phaser from "phaser";
import GameScene from "./GameScene.js";
import { setLayout } from "../../utils/render.js";
import {getUserSessionData} from "../../utils/session.js";
import LoginPage from "../LoginPage.js";

var game;

const PhaserGamePage = () => {
  //setLayout("Making your first Phaser 3 game");
  let user = getUserSessionData();
  if(user) {
    let phaserGame = `
    <div id="gameDiv" class="d-flex justify-content-center my-3">
    </div>`;

    let page = document.querySelector("#page");
    page.innerHTML = phaserGame;

  let config = {
    type: Phaser.AUTO,
    width: 1500,
    height: 600,
    
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
  }
  else {
    LoginPage();
  }
  
};

export default PhaserGamePage;
