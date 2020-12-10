import Phaser from "phaser";
import GameScene from "./GameScene.js";
import { setLayout } from "../../utils/render.js";


const CreateGamePage = () => {
  //setLayout("Making your first Phaser 3 game");
  let phaserGame = `
<div id="createDiv" class="d-flex justify-content-center my-3">
</div>`;

  let page = document.querySelector("#page");
  page.innerHTML = createGame;

  let config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 620,
  
    scene: [GameScene],
    //  parent DOM element into which the canvas created by the renderer will be injected.
    parent: "createDiv",
  };

};

export default CreateGamePage;
