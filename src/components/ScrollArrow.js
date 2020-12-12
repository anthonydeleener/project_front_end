let scrollArrow = document.querySelector("#scrollArrow");
import ScrollMagic from 'scrollmagic';
var controller = new ScrollMagic.Controller();

const ScrollArrow = () => {
    let scrollArrow1;
    scrollArrow1=`<img src="./assets/scroll-down.svg" alt="Fleche vers le bas en bas de page" style="width: 20px;">`;
    return (scrollArrow.innerHTML = scrollArrow1);
}

//window.addEventListener("scroll", hideScrollArrow);

/*function hideScrollArrow() {
    return scrollArrow.innerHTML = "";
}*/

export default ScrollArrow;