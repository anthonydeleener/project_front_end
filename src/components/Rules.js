let rules = document.querySelector("#rules");
import ScrollMagic from 'scrollmagic';
var controller = new ScrollMagic.Controller();

const Rules = () => {
    let rules1;
    rules1 = '<div style="height: 350px;"></div> <div class="rules">Rules</div> <div style="height: 350px;"></div>';


    


    return (rules.innerHTML = rules1);
}

new ScrollMagic.Scene({
    triggerElement: '#rules',
    triggerHook: 0.5, 
    //duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
    //offset: 50 // move trigger to center of element
}).setClassToggle("#rules", "visible") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '#rules',
    triggerHook: 0.7, 
    //duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
    //offset: 50 // move trigger to center of element
}).setClassToggle("#toMakeInvisible", "yes") // add class to reveal
.addTo(controller);
// A MODIFIER ET AMELIORER


export default Rules;