//let Phaser = require("phaser");
import Phaser from "phaser";
import GameScene from "./GameScene.js";
import CreateGameScene from "./CreateGameScene";
import GameOverScene from "./GameOverScene";
import { setLayout } from "../../utils/render.js";
import {getUserSessionData} from "../../utils/session.js";
import LoginPage from "../LoginPage.js";

var game;

const PhaserGamePage = () => {
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
    scene: [ CreateGameScene, GameScene, GameOverScene],
    parent: "gameDiv",
    "transparent"    : true
  };

    if(game)
    game.destroy(true);
    game = new Phaser.Game(config);
  }
  else {
    LoginPage();
  }
  
};

export default PhaserGamePage;
