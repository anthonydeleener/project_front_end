import Phaser from "phaser";
class CreateGameScene extends Phaser.Scene {

    constructor ()
    {
        super('CreateGameScene');
    }

    preload ()
    {
        
    }

    create ()
    {
        this.input.on('pointerup', function (pointer) {
            this.scene.start('game-scene');
        }, this);



        console.log("createGameScene");
        var text = this.add.text(
            640, 
            360, 
            "CREATE GAME SCENE", 
            {
                fontSize: 50,
                color: "black",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);


    }
}
export default CreateGameScene;