import Phaser from "phaser";
class GameOverScene extends Phaser.Scene {

    constructor() {
        super('GameOverScene');
    }

    init(data) {
        this.timer = data.timer;
    }

    preload() {
        this.load.image('replayButton', "../../assets/buttonsImage/replayButton.png");

    }

    create() {


        this.gameOverText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 250, "GameOver", { fontFamily: 'Comic Sans MS', fontSize: '60px', color: 'black' });
        this.gameOverText.setOrigin(0.5);

        this.timeText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 50, "Ton temps : " + this.timer, { fontFamily: 'Comic Sans MS', fontSize: '56px', color: 'black' });
        this.timeText.setOrigin(0.5);

        this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY + 150, 'replayButton').setOrigin(0.5).setScale(0.4).setInteractive({ useHandCursor: true }).on('pointerup', () => this.restartGame());

    }

    restartGame() {
        console.log("restart");
        this.scene.start('CreateGameScene');
    }

}
export default GameOverScene;