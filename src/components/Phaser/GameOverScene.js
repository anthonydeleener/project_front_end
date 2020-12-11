import Phaser from "phaser";
class GameOverScene extends Phaser.Scene {

    constructor() {
        super('GameOverScene');
    }

    init(data) {
        this.timer = data.timer;
    }

    preload() {

    }

    create() {
        

        this.gameOverText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 250, "GameOver", { fontFamily: 'Comic Sans MS', fontSize: '60px', color: 'black' });
        this.gameOverText.setOrigin(0.5);

        this.timeText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 100, "Ton temps : "+this.timer, { fontFamily: 'Comic Sans MS', fontSize: '56px', color: 'black' });
        this.timeText.setOrigin(0.5);


        this.clickButton = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 75, 'Rejouer!', { fontFamily: 'Comic Sans MS', fontSize: '56px', fill: 'black' })
            .setInteractive({ useHandCursor: true })
            .on('pointerover', () => this.enterButtonHoverState())

            
            .on('pointerup', () => {
                this.restartGame();
            }
            );

        this.clickButton.setOrigin(0.5);



    }
    enterButtonHoverState() {
        this.clickButton.setStyle({ fill: 'blue' });
    }

    restartGame() {
        console.log("restart");
        this.scene.start('CreateGameScene');
    }

}
export default GameOverScene;