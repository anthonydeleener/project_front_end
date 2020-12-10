import Phaser from "phaser";
import { TextButton } from '../game-objetcts/text-button';
import TypeGame from "./TypeGame.js";

let typeGame = -1;
class CreateScene extends Phaser.Scene {

  constructor() {

  }

  preload() {
    for (let i = 1; i <= 2; i++) {
      this.load.image(i, "../../assets/" + i + ".png");
    }
  }

  create() {
    //Creation differents types de jeu
    /*for (let i = 1; i <= 2; i++) {
      new TypeGame(i);
    }*/

    sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'atlas', 'greenJellyfish0000');
    sprite.anchor.set(0.5);

    sprite.tint = Math.random() * 0xffffff;

    game.input.onDown.add(changeTint, this);



    // Si click
    //this.input.on('gameobjectdown', this.setTypeGame);
    //console.log(this.cardList);
  }

  setTypeGame(pointer, TypeGame) {
    typeGame = TypeGame.getVariantNumber
  }

  changeTint() {

    sprite.tint = Math.random() * 0xffffff;

}


 

}

export default CreateScene;
