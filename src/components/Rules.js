let rules = document.querySelector("#rules");
import ScrollMagic from 'scrollmagic';
var controller = new ScrollMagic.Controller();

const Rules = () => {
    let rules1;
    rules1 =
        `<div style="height: 50px;"></div> <h1 class="rules" style="text-align: center">Règles</h1><div style="height: 50px;"></div>

    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <h2>Les bases</h2>
            <article>Chaque joueur reçoit une carte. Le but est de détecter un symbole en commun entre la carte du millieu et celle
            de votre deck. Une fois trouvé, cliquez sur les deux symboles correspondants. Vous récuperez alors la carte du millieu.
            Le jeu s'arrête quand il n'y a plus de cartes au centre. Vous pouvez choisir le nombre de cartes à jouer en cliquant
            dessus dans le menu du jeu.</article>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            
        </div>
    </div>

    <div style="height: 50px"></div>

    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" style="text-align: right;">
            <img src="./assets/variantGameImage/variant1.png" alt="Tour infernale" style="width: 100px;">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <h2>Mode Classique</h2>
            <article>Dans le mode classique, le but est de de récuperer les cartes du centre le plus rapidement possible. Le jeu s'arrête
            quand vous avez récuperé toutes les cartes. Votre temps sera chronometré, et vous pourrez ensuite vous comparer avec les
            meilleurs joueurs du site !</article>
        </div>
    </div>

    <div style="height: 50px"></div>

    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 ml-auto" style="text-align: right">
            <h2>Mode Tornade</h2>
            <article>Similaire au mode classique, le mode tornade vous promet de vous décoiffer ! Dans ce mode, les symboles
            bougent ! Il faudra être doublement attentif pour réussir !</article>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <img src="./assets/variantGameImage/variant2.png" alt="Tornade" style="width: 100px;">
        </div>
    </div>

    <div style="height: 50px"></div>

    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" style="text-align: right;">
            <img src="./assets/variantGameImage/variant3.png" alt="Tour infernale" style="width: 100px;">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <h2>Mode Noël</h2>
            <article>Similaire au mode classique, mais avec des symboles de Noël. Plongez-vous au coeur de la féérie !</article>
        </div>
    </div>

    <div style="height: 50px"></div>
    `;





    return (rules.innerHTML = rules1);
}

new ScrollMagic.Scene({
    triggerElement: '#rules',
    triggerHook: 0.7,
}).setClassToggle("#rules", "visible") 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '#rules',
    triggerHook: 0.8, 
}).setClassToggle("#toMakeInvisible", "yes")
.addTo(controller);


export default Rules;