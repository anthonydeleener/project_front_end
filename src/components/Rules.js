let rules = document.querySelector("#rules");
import ScrollMagic from 'scrollmagic';
var controller = new ScrollMagic.Controller();

const Rules = () => {
    let rules1;
    rules1 =
        `<div style="height: 50px;"></div> <h1 class="rules" style="text-align: center">Règles</h1><div style="height: 50px;"></div>

    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
    <h2>Les bases</h2>
    <article>Chaque joueur reçoit des cartes. Le but est de détecter un symbole en commun entre la carte du millieu et celle
    de votre deck. Une fois trouvé, cliquez sur les deux symboles correspondants. Vous récuperez alors la carte du millieu.
    Le jeu s'arrête quand il n'y a plus de cartes au centre.</article>
    </div>
    <p></p>
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 ml-auto" style="text-align: right">
    <h2>Mode solo</h2>
    <article>Dans le mode solo, le but est de de récuperer les cartes du centre le plus rapidement possible. Le jeu s'arrête
    quand vous avez récuperé toutes les cartes. Votre temps sera chronometré, et vous pourrez ensuite vous comparer avec les
    meilleurs joueurs du site !</article>
    </div>

    <div style="height: 50px"></div>
    `;





    return (rules.innerHTML = rules1);
}

new ScrollMagic.Scene({
    triggerElement: '#rules',
    triggerHook: 0.3,
    //duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
}).setClassToggle("#rules", "visible") // add class to reveal
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '#rules',
    triggerHook: 0.3, 
}).setClassToggle("#toMakeInvisible", "yes")
.addTo(controller);


export default Rules;