let rules = document.querySelector("#rules");
import ScrollMagic from 'scrollmagic';
var controller = new ScrollMagic.Controller();

const Rules = () => {
    let rules1;
    rules1=
    `<div style="height: 50px;"></div> <h1 class="rules" style="text-align: center">Règles</h1><div style="height: 50px;"></div>

    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
    <h2>Les bases</h2>
    <article>Chaque joueur reçoit des cartes. Le but est de détecter un symbole commun entre la carte du millieu et celle
    de votre deck. Une fois trouvé, cliquez sur les deux symboles correspondants. Vous vous débarasserez alors d'une de vos
    cartes. Le premier à se débarasser de toutes ses cartes à gagné.</article>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 ml-auto" style="text-align: right">
    <h2>Mode solo</h2>
    <article>Dans le mode solo, le but est de se débarasser de ses cartes le plus rapidement possible. Votre temps sera
    chronometré, et vous pourrez ensuite vous comparer avec les meilleurs joueurs du site !</article>
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