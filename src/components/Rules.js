let rules = document.querySelector("#rules");
import ScrollMagic from 'scrollmagic';
var controller = new ScrollMagic.Controller();

const Rules = () => {
    let rules1;
    rules1=
    `<div style="height: 50px;"></div> <h1 class="rules" style="text-align: center">Rules</h1><div style="height: 50px;"></div>

    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
    <h2>Les bases</h2>
    <article>Chaque joueur recoit des cartes. Le but est de detecter un symbole commun entre la carte du millieu et celui
    de votre deck. Une fois trouve, cliquez sur les deux symboles correspendants. Vous vous debarasserez alors d'une de vos
    cartes. Le premier a se debarasser de toutes ses cartes a gagne.</article>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 ml-auto" style="text-align: right">
    <h2>Mode solo</h2>
    <article>Dans le mode solo, le but est de se debarasser de ses cartes le plus rapidement possible. Votre temps sera
    chronometre, et vous pourrez ensuite vous comparer avec les meilleurs joueurs du site !</article>
    </div>
    
    
    
    
    `;


    


    return (rules.innerHTML = rules1);
}

new ScrollMagic.Scene({
    triggerElement: '#rules',
    triggerHook: 1.0, 
    //duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
    //offset: 50 // move trigger to center of element
}).setClassToggle("#rules", "visible") // add class to reveal
.addTo(controller);

//new ScrollMagic.Scene({
//    triggerElement: '#rules',
//    triggerHook: 1.0, 
    //duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
    //offset: 50 // move trigger to center of element
//}).setClassToggle("#toMakeInvisible", "yes") // add class to reveal
//.addTo(controller);
// A MODIFIER ET AMELIORER


export default Rules;