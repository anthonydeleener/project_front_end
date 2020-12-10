import Phaser from "phaser";
//import ScoreLabel from "./ScoreLabel.js"
import Symbol from "./Symbol.js";
import Cards from "./Cards.js";

let cards;
let clickCounter = 0;
let textDeck = '';
class GameScene extends Phaser.Scene {

  constructor() {
    super("game-scene");
    this.gameOver = false;
    this.timedEvent = undefined;
    this.text = undefined;
    this.cardList = undefined;
    this.indexDeck = 0;
    this.firstNameSymbol = undefined;
    this.coordinatesFirstSymbol = undefined;
    //this.textDeck = undefined;
    this.onObjectClicked = this.onObjectClicked.bind(this);
  }

  preload() {
    cards = new Cards();
    this.cardList = cards.getCards();
    for (let i = 1; i <= cards.getNumberOfCards(); i++) {
      this.load.image(i, "../../assets/" + i + ".png");
    }
  }

  create() {
    //Creation cartes joueur + cartes pile
    let playerCardNumber = Math.floor(Math.random() * 56);
    for (let i = 0; i < 8; i++) {
      let random = Math.random() * 0.05 + 0.08;

      cards.getPlayerCard().push(new Symbol(this.add.sprite(100 + (i * 100), 450, this.cardList[playerCardNumber][i]).setInteractive().setScale(random), playerCardNumber));
      textDeck = this.add.text(300, 10, (this.cardList.length - this.indexDeck - 1), { color: 'white', fontSize: '20px ' });
      if (this.indexDeck == cards.getPlayerCard()[0].getCardNumber()) {
        this.indexDeck++;
      }
      random = Math.random() * 0.05 + 0.08;
      cards.getDeckCard().push(new Symbol(this.add.sprite(100 + (i * 100), 150, this.cardList[this.indexDeck][i]).setInteractive().setScale(random), this.indexDeck));

    }
    this.indexDeck++;


    // Si click
    this.input.on('gameobjectdown', this.onObjectClicked);
    console.log(this.cardList);
    // /* timer display */
    this.text = this.add.text(450, 32);
    this.timedEvent = this.time.addEvent({ delay: 60000, callback: this.onEvent, callbackScope: this });
    //  The same as above, but uses a method signature to declare it (shorter, and compatible with GSAP syntax)
    //timedEvent = this.time.delayedCall(3000, onEvent, [], GameScene);
  }


  onObjectClicked(pointer, gameObject) {
    clickCounter++;

    if (clickCounter == 1) {
      this.firstNameSymbol = gameObject.texture.key;
      this.coordinatesFirstSymbol = gameObject.x + gameObject.y;
    } else {
      if (this.firstNameSymbol == gameObject.texture.key && this.coordinatesFirstSymbol != gameObject.x + gameObject.y) {
        console.log("CLICK 2 FOIS MEME SYMBOLE");
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
        if (this.indexDeck == cards.getPlayerCard()[0].getCardNumber()) {
          this.indexDeck++;
        }
        // PARTIE TERMINEE
        if (this.indexDeck == this.cardList.length) {
          console.log("game over");
          this.gameOver = true;
        }

        for (let i = 0; i < 8; i++) {
          cards.getDeckCard().push(new Symbol(this.add.sprite(100 + (i * 100), 150, this.cardList[this.indexDeck][i]).setInteractive().setScale(0.12), this.indexDeck));
        }

        this.indexDeck++;

      } else {
        console.log("PERDU");
      }
      clickCounter = 0;
    }


  }

  /* event when timer finishes */
  onEvent() {

  }

  update() {
    if (this.gameOver) {
      return;
    }
    /* update timer */
    this.text.setText('Timer ' + this.timedEvent.getElapsedSeconds().toString().substr(0, 3));
    textDeck.setText(this.cardList.length - this.indexDeck - 1);
  }



}

export default GameScene;
