import Phaser from "phaser";
//import { TextButton } from '../game-objetcts/text-button';
import TypeGame from "./TypeGame.js";

let typeGame = -1;
var sprite;

class CreateScene extends Phaser.Scene {

  constructor() {

  }

  preload() {
    for (let i = 1; i <= 2; i++) {
      this.load.image('type' + i, "../../assets/" + i + ".png");
    }
  }

  create() {
    //Creation differents types de jeu
    /*for (let i = 1; i <= 2; i++) {
      new TypeGame(i);
    }*/

    sprite = this.add.sprite(game.world.centerX, game.world.centerY, 'type1');
    sprite.anchor.set(0.5);

    sprite.tint = Math.random() * 0xffffff;

    this.input.onDown.add(changeTint, this);



    // Si click
    this.input.on('pointerdown', this.setTypeGame);
    //console.log(this.cardList);
  }

  setTypeGame(pointer, TypeGame) {
    typeGame = TypeGame.getVariantNumber;

  }

  changeTint() {

    sprite.tint = Math.random() * 0xffffff;

}


 

}

export default CreateScene;
