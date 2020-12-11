import Phaser from "phaser";
class GameOverScene extends Phaser.Scene {

    constructor ()
    {
        super('GameOverScene');
    }

    preload ()
    {
        
    }

    create ()
    {
        this.input.on('pointerup', function (pointer) {

            this.scene.start('CreateGameScene');

        }, this);


        console.log("GameOverScene");
        var text = this.add.text(
            640, 
            360, 
            "Hello GAME OVER", 
            {
                fontSize: 50,
                color: "black",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);


    }
}
export default GameOverScene;