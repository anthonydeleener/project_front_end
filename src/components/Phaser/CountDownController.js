
    /**@type {Phaser.Scene} */
    scene

    /**@type {Phaser.GameObjects.Text} */
    label
    
    /**@type {Phaser.Time.TimerEvent} */
    timerEvent
    
    
    duration =0;
export default class CountdownController
{

    /**
     * 
     * @param {Phaser,Scene} scene 
     * @param {Phaser,GameObjects.Text} label 
     */
    constructor(scene,label){
        this.scene=scene;
        this.label=label;
    }

    /**
     * 
     * @param {number} duration 
     * @param {(=>void)} callback 
     */
    start(duration = 45000,callback){
        this.stop()

        this.finishedCallback = callback

        this.scene.time.addEvent({
            delay:duration,
            callback:()=>{
                this.stop()
                if(callback){
                   callback()
                }
            }
        })
    }


    stop(){
        if(this.timerEvent){
            this.timerEvent=destroy()
            this.timerEvent=undefined
        }
    }


    update()
    {
        if(!this.timerEvent || this.duration <=0)  return 
        
        const elapsed = this.timerEvent.getElapsed()
        const remaining = this.duration -elapsed
        const seconds = remaining/1000
        this.label.text = sceonds.toFixed(2)

        this.label.text=seoconds.toFixed(2)
    }
}