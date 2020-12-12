import Phaser from "phaser";

let typeGame;
let nbeCartes = 0;
let textList = ['Peu de cartes (10)', 'Beaucoup de cartes (25)', 'Toutes les cartes (57)'];
var nbeCartesButton;

var nbeVariantes = 2;
let spriteList = [];

class CreateGameScene extends Phaser.Scene {

  constructor() {
    super('CreateGameScene');
    this.onObjectClicked = this.onObjectClicked.bind(this);
    this.nbeCartes = 0;
  }

  preload() {
    for (let i = 1; i <= nbeVariantes; i++) {
      this.load.image('type' + i, "../../assets/variantGameImage/variant" + i + ".png");
    }

    this.load.image('createButton', "../../assets/buttonsImage/createPartyButton.png");

  }

  create() {

    // Boutons choix de la variante de jeu
    for (let i = 1; i <= nbeVariantes; i++) {
      spriteList[i] = this.add.sprite(this.cameras.main.centerX - (150 * nbeVariantes) + (300 / 2) * (1 + (i - 1) * 2), this.cameras.main.centerY - 200, 'type' + i);
      spriteList[i].setOrigin(0.5).setScale(0.4).setInteractive({ useHandCursor: true });
    }


    // Boutons choix nombre de carte
    this.add.text(this.cameras.main.centerX-200, 320, "Nombre de cartes :",
      {
        fontSize: 30,
        color: "black",
        fontStyle: "bold"
      }
    ).setOrigin(0.5);

    nbeCartesButton = this.add.text(this.cameras.main.centerX+200, 320, textList[nbeCartes],
    { 
      fontSize: 25,
      fill: "blue",
      fontStyle: "bold"
    }
    ).setOrigin(0.5).setInteractive({ useHandCursor: true });



    // Bouton créer partie
    this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY + 200, 'createButton').setOrigin(0.5).setScale(0.4).setInteractive({ useHandCursor: true });



    // Si click
    this.input.on('gameobjectdown', this.onObjectClicked);

  }

  onObjectClicked(pointer, gameObject) {

    // Si click bouton choix nombre de carte
    if (gameObject.type == 'Sprite' && gameObject.texture.key.startsWith('type')) {
      typeGame = gameObject.texture.key;

      for (let i = 1; i <= nbeVariantes; i++) {
        spriteList[i].tint = 0x363636;
      }
      gameObject.tint = 0xffffff;
    }


    // Si click bouton choix nombre de carte
    if (gameObject.type == 'Text') {
      this.nbeCartes = (this.nbeCartes+1)%3;
      nbeCartesButton.setText(textList[this.nbeCartes]);
      console.log(this.nbeCartes);

    }



    // Si click bouton créer partie
    if (gameObject.type == 'Sprite' && gameObject.texture.key.startsWith('createButton')) {
      if(this.nbeCartes == 0){
        this.nbeCartes = 10;
      }else if(this.nbeCartes == 1){
        this.nbeCartes = 25;
      }else if(this.nbeCartes ==2){
        this.nbeCartes = 57;
      }
      this.scene.start('game-scene', { "nbrCartes": this.nbeCartes });
    }


  }


}
export default CreateGameScene;