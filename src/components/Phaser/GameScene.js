import Phaser from "phaser";
import Symbol from "./Symbol.js";
import Cards from "./Cards.js";


let cards;
let clickCounter = 0;
let speedX = [];
let speedY = [];

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
    this.onSymbolClicked = this.onSymbolClicked.bind(this);
    this.addDeckCard = this.addDeckCard.bind(this);
    this.remainingCards = undefined;
    this.gameObjectBefore = undefined;
    this.christmasTheme = '';
  }

  init(data) {
    this.nbreCartes = data.nbrCartes;
    this.typeGame = data.typeGame;
  }

  preload() {

    for (let i = 1; i <= 57; i++) {
      this.load.image(i, "../../assets/symbols/1/" + i + ".png");

    }
    for (let i = 1; i <= 57; i++) {
      this.load.image('christmas' + i, "../../assets/symbols/christmas/" + i + ".png");
    }


    this.load.image('quitButton', "../../assets/buttonsImage/quitGameButton.png");
  }

  create() {
    if (this.typeGame == 'type2') {
      this.initSpeed();
    }
    if (this.typeGame == 'type3') {
      this.christmasTheme = 'christmas';
    } else {
      this.christmasTheme = '';
    }

    cards = new Cards();
    this.cardList = cards.getCards(this.nbreCartes);
    this.remainingCards = this.cardList.length - 1;
    this.textDeck = this.add.text(25, 10, this.remainingCards + " cartes restantes", { fontFamily: 'Comic Sans MS', fontSize: '30px', color: 'black' });

    this.indexDeck = 0;

    //creation separation line
    this.add.line(this.cameras.main.centerX, this.cameras.main.centerY, 0, 0, 1500, 0, 0x6666ff);


    //creation quit button
    this.add.sprite(1415, 570, 'quitButton').setOrigin(0.5).setScale(0.2).setInteractive({ useHandCursor: true }).on('pointerdown', () => this.scene.start('CreateGameScene'));


    //draw of the player's first card
    this.playerFirstCardNumber = Math.floor(Math.random() * this.nbreCartes);

    //creation player cards 
    for (let i = 0; i < 8; i++) {
      //random position
      let randomY = Math.floor(Math.random() * (515 - 360 + 1)) + 360;

      cards.getPlayerCard().push(new Symbol(this.add.sprite(110 + (i * 180), randomY, this.christmasTheme + this.cardList[this.playerFirstCardNumber][i]).setInteractive({ useHandCursor: true }).setScale(this.randomSymbolScaling()), this.playerFirstCardNumber));

    }
    //creation deck card
    this.addDeckCard();
    this.indexDeck++;

    //if you click on a symbol
    this.input.on('gameobjectdown', this.onSymbolClicked);
    // timer display
    this.textTimer = this.add.text(1260, 10, "", { fontFamily: 'Comic Sans MS', color: 'black', fontSize: '30px' });
    this.timedEvent = this.time.addEvent({ delay: 6000000, callback: this.onEvent, callbackScope: this });
  }


  onSymbolClicked(pointer, gameObject) {
    clickCounter++;

    if (clickCounter == 1) {
      this.gameObjectBefore = gameObject;
      gameObject.setScale(0.2);
      
    } else {
      //click twice same symbol
      if (this.gameObjectBefore.texture.key == gameObject.texture.key && ((this.gameObjectBefore.y < 300 && gameObject.y > 300) || (this.gameObjectBefore.y > 300 && gameObject.y < 300))) {
        this.gameObjectBefore.setScale(0.12);

        //destroy player card
        for (let i = 0; i < 8; i++) {
          cards.getPlayerCard().pop().getSprite().destroy();
        }
        //Put deck card in card player
        for (let i = 0; i < 8; i++) {
          cards.getDeckCard()[i].getSprite().y += 250;
          cards.getDeckCard()[i].getSprite().x = 110 + (i * 180);
          cards.getPlayerCard().push(cards.getDeckCard()[i]);
        }

        //Delete deck card
        for (let i = 0; i < 8; i++) {
          cards.getDeckCard().pop();
        }

        if (this.typeGame == 'type2') {
          //Change speed
          this.initSpeed();
        }


        //if end of the game
        if (this.indexDeck == this.cardList.length || (this.indexDeck == this.playerFirstCardNumber && this.indexDeck + 1 == this.cardList.length)) {
          this.gameOver = true;
        } //creation new deckCard
        else {
          this.addDeckCard();

          this.remainingCards--;

          if (this.remainingCards == 1) {
            this.textDeck.setText(this.remainingCards + " carte restante");
          } else {
            this.textDeck.setText(this.remainingCards + " cartes restantes");
          }
          this.indexDeck++;
        }


      } else {
        this.gameObjectBefore.setScale(this.randomSymbolScaling());
      }
      clickCounter = 0;
    }


  }

  addDeckCard() {
    if (this.indexDeck == this.playerFirstCardNumber) {
      this.indexDeck++;
    }
    for (let i = 0; i < 8; i++) {
      let randomY = Math.floor(Math.random() * (260 - 85 + 1)) + 85;
      cards.getDeckCard().push(new Symbol(this.add.sprite(110 + (i * 180), randomY, this.christmasTheme + this.cardList[this.indexDeck][i]).setInteractive({ useHandCursor: true }).setScale(this.randomSymbolScaling()), this.indexDeck));
    }
  }

  randomSymbolScaling() {
    let differentSize = [0.12, 0.15, 0.07];
    let i = Math.floor(Math.random() * (2 + 1));
    return differentSize[i];
  }

  initSpeed() {
    for (let i = 0; i < 8; i++) {
      speedX[i] = Math.floor(Math.random() * 7) -3;
      speedY[i] = Math.floor(Math.random() * 7) -3;
    }
  }


  update() {
    //end of the game
    if (this.gameOver) {
      this.gameOver = false;
      this.scene.start('GameOverScene', { "timer": this.textTimer._text });
      return;
    }

    /* update timer */
    this.textTimer.setText(this.timedEvent.getElapsedSeconds().toString().substr(0, 5) + " secondes");


    /* update position for tornado mode */
    if (this.typeGame == 'type2') {

      for (let i = 0; i < 8; i++) {
        let picture = cards.getDeckCard()[i].getSprite();
        picture.x += speedX[i];
        picture.y += speedY[i];

        if (picture.x < 50)
          speedX[i] = Math.floor(Math.random() * 3) +1;
        if (picture.x > 1450)
          speedX[i] = Math.floor(Math.random() * 3) -3;

        if (picture.y < 85)
          speedY[i] = Math.floor(Math.random() * 3) +1;
        if (picture.y > 260)
          speedY[i] = Math.floor(Math.random() * 3) -3;
      }

    }
    
  }

}


export default GameScene;