import Phaser from "phaser";
import ScoreLabel from "./ScoreLabel.js";
let countClick = 0;
let nameSymbolBefore;
let symbols = [];
var testSymbol;


class GameScene extends Phaser.Scene {

  constructor() {
    
    super("game-scene");
   
    this.gameOver = false;
    this.timedEvent = undefined;
    this.text = undefined;

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

    this.input.on('gameobjectdown', this.onObjectClicked);
    for (let i = 1; i < 5; i++) {

      symbols[i - 1].on('pointerover', function (pointer) {
        console.log("dessus");
        symbols[i - 1].setScale(0.2);
      })

    }

    // /* timer display */
     this.text = this.add.text(450, 32);
     this.timedEvent = this.time.addEvent({ delay: 60000, callback: this.onEvent, callbackScope: this });
    //  The same as above, but uses a method signature to declare it (shorter, and compatible with GSAP syntax)
    //timedEvent = this.time.delayedCall(3000, onEvent, [], GameScene);

  }


  onObjectClicked(pointer, gameObject) {
    console.log(gameObject.texture.key);
    countClick++;
    if (countClick == 1) {
      nameSymbolBefore = gameObject.texture.key;
    } else {
      if (nameSymbolBefore == gameObject.texture.key) {
        console.log("click deux fois de suite meme symbole");
      } else {
        console.log("perdu");
      }
      countClick = 0;
    }
  }

   /* event when timer finishes */
   onEvent ()
   {
  
   }

  update() {
    if (this.gameOver) {
      return;
    }
    /* update timer */ 
    this.text.setText('Timer ' + this.timedEvent.getElapsedSeconds().toString().substr(0,3));
  }
}

export default GameScene;
