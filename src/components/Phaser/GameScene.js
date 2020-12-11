import Phaser from "phaser";
import Symbol from "./Symbol.js";
import Cards from "./Cards.js";

let cards;
let clickCounter = 0;

class GameScene extends Phaser.Scene {

  constructor() {
    super("game-scene");
    this.gameOver = false;
    this.timedEvent = undefined;
    this.textTimer = undefined;
    this.cardList = undefined;
    this.indexDeck;
    this.firstKeySymbol = undefined;
    this.coordinatesX = undefined;
    this.coordinatesY = undefined;
    this.playerFirstCardNumber = 0;
    this.textDeck = undefined;
    this.onObjectClicked = this.onObjectClicked.bind(this);
    this.remainingCards = undefined;
    this.gameObjectBefore = undefined;

  }

  preload() {

    for (let i = 1; i <= 57/*cards.getNumberOfCards()*/; i++) {
      this.load.image(i, "../../assets/" + i + ".png");
    }
  }

  create() {




  //Creation cartes joueur + cartes pile
  this.playerFirstCardNumber = Math.floor(Math.random() * 56);
  this.textDeck = this.add.text(300, 10, this.remainingCards +" cartes restantes", { color: 'black', fontSize: '30px ' });
    



    for (let i = 0; i < 8; i++) {
      let randomScale = Math.random() * 0.05 + 0.08;
      let randomY = Math.floor(Math.random() * (550 - 350 + 1)) + 350;

      cards.getPlayerCard().push(new Symbol(this.add.sprite(110 + (i * 180), randomY, this.cardList[this.playerFirstCardNumber][i]).setInteractive({ useHandCursor: true }).setScale(randomScale), this.playerFirstCardNumber));
      if (this.indexDeck == cards.getPlayerCard()[0].getCardNumber()) {
        this.indexDeck++;
      }
      randomScale = Math.random() * 0.05 + 0.08;
      randomY = Math.floor(Math.random() * (250 - 50 + 1)) + 50;
      cards.getDeckCard().push(new Symbol(this.add.sprite(110 + (i * 180), randomY, this.cardList[this.indexDeck][i]).setInteractive({ useHandCursor: true }).setScale(randomScale), this.indexDeck));
    }
    this.indexDeck++;
    console.log("indexDeck" + this.indexDeck);

    // Si click
    this.input.on('gameobjectdown', this.onObjectClicked);
    // timer display
    this.textTimer = this.add.text(1000, 10,"Timer ",{color : 'black',fontSize:'30px'});
    this.timedEvent = this.time.addEvent({ delay: 6000000, callback: this.onEvent, callbackScope: this });
    // The same as above, but uses a method signature to declare it (shorter, and compatible with GSAP syntax)
    //timedEvent = this.time.delayedCall(3000, onEvent, [], GameScene);
  }


  onObjectClicked(pointer, gameObject) {
    clickCounter++;

    if (clickCounter == 1) {
      this.gameObjectBefore = gameObject;
      gameObject.setScale(0.2);
      this.firstKeySymbol = gameObject.texture.key;
      this.coordinatesX = gameObject.x;
      this.coordinatesY = gameObject.y;
    } else {
      if (this.firstKeySymbol == gameObject.texture.key && (this.coordinatesX != gameObject.x || this.coordinatesY != gameObject.y)) {
        console.log("CLICK 2 FOIS MEME SYMBOLE");
        this.gameObjectBefore.setScale(0.12);
        //Supprimer card player et rajouter les nouvelles
        for (let i = 0; i < 8; i++) {
          cards.getPlayerCard().pop().getSprite().destroy();
        }
        //Mettre la carte deck dans card player
        for (let i = 0; i < 8; i++) {
          cards.getDeckCard()[i].getSprite().y += 300;
          cards.getPlayerCard().push(cards.getDeckCard()[i]);
        }

        //Supprimer carte deck
        for (let i = 0; i < 8; i++) {
          cards.getDeckCard().pop();
        }

        //Ajouter carte deck (indexDeck)  
        if (this.indexDeck == this.playerFirstCardNumber) {
          this.indexDeck++;
        }
        console.log(this.indexDeck);
        // PARTIE TERMINEE
        if (this.indexDeck == this.cardList.length) {
          this.gameOver = true;
        } else {

          for (let i = 0; i < 8; i++) {
            let randomY = Math.floor(Math.random() * (250 - 50 + 1)) + 50;
            cards.getDeckCard().push(new Symbol(this.add.sprite(110 + (i * 180), randomY, this.cardList[this.indexDeck][i]).setInteractive({ useHandCursor: true }).setScale(0.12), this.indexDeck));
          }
          this.remainingCards--;
          this.textDeck.setText(this.remainingCards + " cartes restantes");
          this.indexDeck++;
        }


      } else {
        console.log("PERDU");
        this.gameObjectBefore.setScale(0.12);
      }
      clickCounter = 0;
    }


  }

  /* event when timer finishes */
  onEvent() {

  }

  update() {
    if (this.gameOver) {
      console.log("gameover");
      this.gameOver = false;
      this.scene.start('GameOverScene', { "timer": "le timer " });
    }
    /* update timer */
    this.textTimer.setText("Timer " + this.timedEvent.getElapsedSeconds().toString().substr(0,4)+ " seconds");  
    }

}


export default GameScene;