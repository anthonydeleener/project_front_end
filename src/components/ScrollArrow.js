let scrollArrow = document.querySelector("#scrollArrow");
import ScrollMagic from 'scrollmagic';
var controller = new ScrollMagic.Controller();

const ScrollArrow = () => {
    let scrollArrow1;
    scrollArrow1=`<img src="./assets/scroll-down.svg" alt="Fleche vers le bas en bas de page" style="width: 20px;">`;
    return (scrollArrow.innerHTML = scrollArrow1);
}

/*new ScrollMagic.Scene({
    triggerElement: '#rules',
    triggerHook: 0.3,
    //duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
}).setClassToggle("#scrollArrow", "visible") // add class to reveal
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '#rules',
    triggerHook: 0.3, 
}).setClassToggle("#toMakeInvisible", "yes")
.addTo(controller); */

export default ScrollArrow;