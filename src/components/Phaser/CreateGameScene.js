import Phaser from "phaser";
import TypeGame from "./TypeGame.js";

let typeGame;
var nbeVariantes = 4;
let spriteList = [];

class CreateGameScene extends Phaser.Scene {

  constructor() {
    super('CreateGameScene');
  }

  preload() {
    for (let i = 1; i <= nbeVariantes; i++) {
      this.load.image('type' + i, "../../assets/" + i + ".png");
    }

  }

  create() {
    /*this.input.on('pointerdown', function (pointer) {
        this.scene.start('game-scene');
    }, this);*/



    console.log("createGameScene");
    var text = this.add.text(
      640,
      360,
      "CREATE GAME SCENE",
      {
        fontSize: 50,
        color: "black",
        fontStyle: "bold"
      }
    ).setOrigin(0.5);


    for (let i = 1; i <= nbeVariantes; i++) {
      spriteList[i] = this.add.sprite(this.cameras.main.centerX - (150 * nbeVariantes) + (300 / 2) * (1 + (i - 1) * 2), this.cameras.main.centerY - 200, 'type' + i);
      spriteList[i].setOrigin(0.5).setScale(0.4).setInteractive();
    }



    // Si click
    this.input.on('gameobjectdown', this.onObjectClicked);

  }

  onObjectClicked(pointer, gameObject) {
    typeGame = gameObject.texture.key;

    for (let i = 1; i <= nbeVariantes; i++) {
      spriteList[i].tint = 0x363636;
    }
    gameObject.tint = 0xffffff;;

    //console.log(typeGame);
  }


}
export default CreateGameScene;