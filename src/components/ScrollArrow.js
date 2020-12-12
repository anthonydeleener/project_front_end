let scrollArrow = document.querySelector("#scrollArrow");



const ScrollArrow = () => {
    let scrollArrow1;
    scrollArrow1=`<img src="./assets/scroll-down.svg" alt="Fleche vers le bas en bas de page" style="width: 20px;">`;
    return (scrollArrow.innerHTML = scrollArrow1);
}

export default ScrollArrow;