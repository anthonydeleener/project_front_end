import Phaser from "phaser";
import ScoreLabel from "./ScoreLabel.js";
let countClick = 0;
let nameSymbolBefore;
let coordSymbolBefore;

let symbols = [];
var testSymbol;

let cartes = [[1, 2, 3, 4, 5, 6, 7, 50], [8, 9, 10, 11, 12, 13, 14, 50], [15, 16, 17, 18, 19, 20, 21, 50], [22, 23, 24, 25, 26, 27, 28, 50], [29, 30, 31, 32, 33, 34, 35, 50], 
[36, 37, 38, 39, 40, 41, 42, 50], [43, 44, 45, 46, 47, 48, 49, 50], [1, 9, 17, 25, 33, 41, 49, 52], [2, 10, 18, 26, 34, 42, 43, 52], [3, 11, 19, 27, 35, 36, 44, 52], 
[4, 12, 20, 28, 29, 37, 45, 52], [5, 13, 21, 22, 30, 38, 46, 52], [6, 14, 15, 23, 31, 39, 47, 52], [7, 8, 16, 24, 32, 40, 48, 52], [1, 16, 31, 46, 12, 27, 42, 53], 
[2, 17, 32, 47, 13, 28, 36, 53], [3, 18, 33, 48, 14, 22, 37, 53], [4, 19, 34, 49, 8, 23, 38, 53], [5, 20, 35, 43, 9, 24, 39, 53], [6, 21, 29, 44, 10, 25, 40, 53], [7, 15, 30, 45, 11, 26, 41, 53], 
[1, 23, 45, 18, 40, 13, 35, 54], [2, 24, 46, 19, 41, 14, 29, 54], [3, 25, 47, 20, 42, 8, 30, 54], [4, 26, 48, 21, 36, 9, 31, 54], [5, 27, 49, 15, 37, 10, 32, 54], 
[6, 28, 43, 16, 38, 11, 33, 54], [7, 22, 44, 17, 39, 12, 34, 54], [1, 30, 10, 39, 19, 48, 28, 55], [2, 31, 11, 40, 20, 49, 22, 55], [3, 32, 12, 41, 21, 43, 23, 55], 
[4, 33, 13, 42, 15, 44, 24, 55], [5, 34, 14, 36, 16, 45, 25, 55], [6, 35, 8, 37, 17, 46, 26, 55], [7, 29, 9, 38, 18, 47, 27, 55], [1, 37, 24, 11, 47, 34, 21, 56], 
[2, 38, 25, 12, 48, 35, 15, 56], [3, 39, 26, 13, 49, 29, 16, 56], [4, 40, 27, 14, 43, 30, 17, 56], [5, 41, 28, 8, 44, 31, 18, 56], [6, 42, 22, 9, 45, 32, 19, 56], 
[7, 36, 23, 10, 46, 33, 20, 56], [1, 44, 38, 32, 26, 20, 14, 57], [2, 45, 39, 33, 27, 21, 8, 57], [3, 46, 40, 34, 28, 15, 9, 57], [4, 47, 41, 35, 22, 16, 10, 57], 
[5, 48, 42, 29, 23, 17, 11, 57], [6, 49, 36, 30, 24, 18, 12, 57], [7, 43, 37, 31, 25, 19, 13, 57], [1, 8, 15, 22, 29, 36, 43, 51], [2, 9, 16, 23, 30, 37, 44, 51], 
[3, 10, 17, 24, 31, 38, 45, 51], [4, 11, 18, 25, 32, 39, 46, 51], [5, 12, 19, 26, 33, 40, 47, 51], [6, 13, 20, 27, 34, 41, 48, 51], [7, 14, 21, 28, 35, 42, 49, 51], 
[50, 51, 52, 53, 54, 55, 56, 57]];

class GameScene extends Phaser.Scene {

  constructor() {
    
    super("game-scene");
   
    this.gameOver = false;
<<<<<<< HEAD
=======
    this.timedEvent = undefined;
    this.text = undefined;
>>>>>>> 8d61356fc7cb1f3066c03b940e2c089979de2c4f

  }

  preload() {
    for (let i = 1; i <= cartes.length; i++) {
      this.load.image(i, "../../assets/" + i + ".png");
    }
  }

  create() {
    //TEST FIRST CARD
    for (let i = 0; i < 8; i++) {
      console.log(cartes[0][i]);
     symbols.push(this.add.sprite(50 + (i * 100), 100, cartes[0][i]).setInteractive().setScale(0.12));
    }
    // TEST SECOND CARD
    for (let i = 0; i < 8; i++) {
      console.log("second card");
      console.log(cartes[1][i]);
      symbols.push(this.add.sprite(50 + (i * 100), 350, cartes[1][i]).setInteractive().setScale(0.12));
    }

    this.input.on('gameobjectdown', this.onObjectClicked);
    for (let i = 1; i < 5; i++) {

      symbols[i - 1].on('pointerover', function (pointer) {
        //console.log("dessus");
        symbols[i - 1].setScale(0.2);
        //symbols[i-1].tween.
      })

    }

<<<<<<< HEAD
    /** timer 
    const timerLabel = this.add.text(width *0.5,50,'45', {fontSize:48})
    .setOrigin(0.5)
    this.CountDownController = new CountDownController(this,timerLabel)
    */
=======
    // /* timer display */
     this.text = this.add.text(450, 32);
     this.timedEvent = this.time.addEvent({ delay: 60000, callback: this.onEvent, callbackScope: this });
    //  The same as above, but uses a method signature to declare it (shorter, and compatible with GSAP syntax)
    //timedEvent = this.time.delayedCall(3000, onEvent, [], GameScene);
>>>>>>> 8d61356fc7cb1f3066c03b940e2c089979de2c4f

  }


  onObjectClicked(pointer, gameObject) {

    //console.log(gameObject);
    //console.log(gameObject.x); 
    //console.log(gameObject.y);
    //gameObject.debug.renderSpriteBounds(spriteObjectToHighlight, [red]);
    //this.renderSpriteCorners(gameObject,false,false);
    countClick++;
    if (countClick == 1) {
      nameSymbolBefore = gameObject.texture.key;
      coordSymbolBefore = gameObject.x + gameObject.y;
    } else {
      if (nameSymbolBefore == gameObject.texture.key && coordSymbolBefore != gameObject.x + gameObject.y) {
        console.log("click deux fois de suite meme symbole");
      } else {
        console.log("perdu");
      }
      countClick = 0;
    }
<<<<<<< HEAD

    //nbSymByCard=8
    //n=nbSymByCard-1
    //cards=[[i+n**2 for i in range(n+1)]] + [[(o+i*n) for i in range(n)]+[n+n**2] for o in range(n) ] + 
    //[[(o*n+i*(p*n+1))%(n**2) for i in range(n)]+[p+n**2] for p in range(n) for o in range(n)]
    //print (cards)
 
   

=======
>>>>>>> 8d61356fc7cb1f3066c03b940e2c089979de2c4f
  }

   /* event when timer finishes */
   onEvent ()
   {
  
   }

  update() {
    if (this.gameOver) {
      return;
    }
<<<<<<< HEAD


  }






=======
    /* update timer */ 
    this.text.setText('Timer ' + this.timedEvent.getElapsedSeconds().toString().substr(0,3));
  }
>>>>>>> 8d61356fc7cb1f3066c03b940e2c089979de2c4f
}

export default GameScene;
