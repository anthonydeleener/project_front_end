import Phaser from "phaser";
//import CountDownController from './CountDownController'
import ScoreLabel from "./ScoreLabel.js";
let countClick = 0;
let nameSymbolBefore;
let coordSymbolBefore;

let symbols = [];
var testSymbol;


class GameScene extends Phaser.Scene {

  constructor() {
    super("game-scene");

    this.gameOver = false;
    
  }

  preload() {
    for (let i = 1; i < 5; i++) {
      this.load.image(i, "../../assets/" + i + ".png");
    }
  }

  create() {
    for (let i = 1; i < 5; i++) {
      symbols.push(this.add.sprite(200 + (i * 100), 300, i).setInteractive().setScale(0.12));
    }
    for(let i=1;i<5;i++){
      symbols.push(this.add.sprite(200 + (i * 100), 500, i).setInteractive().setScale(0.12));
    }

    this.input.on('gameobjectdown', this.onObjectClicked);
    for (let i = 1; i < 5; i++) {

      symbols[i - 1].on('pointerover', function (pointer) {
        //console.log("dessus");
        symbols[i - 1].setScale(0.2);
        //symbols[i-1].tween.
      })

    }

  /** timer 
  const timerLabel = this.add.text(width *0.5,50,'45', {fontSize:48})
  .setOrigin(0.5)
  this.CountDownController = new CountDownController(this,timerLabel)
  */

  }

  onObjectClicked(pointer, gameObject) {
   
    //console.log(gameObject);
    //console.log(gameObject.x); 
    //console.log(gameObject.y);
    countClick++;
    if (countClick == 1) {
      nameSymbolBefore = gameObject.texture.key;
      coordSymbolBefore=gameObject.x + gameObject.y;
    } else {
      if (nameSymbolBefore == gameObject.texture.key && coordSymbolBefore != gameObject.x + gameObject.y) {
        console.log("click deux fois de suite meme symbole");
      } else {
        console.log("perdu");
      }
      countClick = 0;
    }

  }

  



  update() {
    if (this.gameOver) {
      return;
    }

  
  }

  




}

export default GameScene;
