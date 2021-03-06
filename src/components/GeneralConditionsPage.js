import { setLayout } from "../utils/render.js";

let generalConditions = `
  
  <div>
    <br>
    <article>
      Les présentes conditions d'utilisation contribuent à déterminer la nature de votre relation avec Symble. D'une manière
      générale, nous vous autorisons à utiliser nos services si vous acceptez de respecter ces conditions, qui reflètent le
      fonctionnement des activités de Symble. Par les termes "Symble", "nous", "nos" et "notre", nous désignons le site internet
      Symble sur lequel vous êtes.
    </article>
  </div>

  <div style="height: 100px;"></div>

  <div>
    <h4>Données personnelles</h4>
    <br>
    <article>
      Vos données fournies lors de l'inscription sont stockées sur nos serveurs. Votre nom d'utilisateur
      et votre adresse e-mail ne sont pas cryptées et peuvent être accédées par une simple demande en contactant un des développeurs
      de notre site. Votre mot de passe est crypté. Nous nous engageons à ne pas utiliser vos données à des fins commerciales, ni à
      vous envoyer des e-mails de promotion. La suppression de toutes vos données de nos serveurs peut être demandée en envoyant une
      demande à un des développeurs de notre site. Il sera alors de notre devoir de les supprimer dans les 30 jours suivant votre
      demande, conformément à la loi européenne sur la vie privée et les données personnelles.
    </article>
  </div>

  <div style="height: 100px;"></div>

  <div>
    <h4>Droits d'auteur</h4>
    <br>
    <article>
      L'utilisation de notre site internet, de notre logo, ou de notre jeu Symble est libre et gratuite, que ce soit à des fins
      commerciales ou non. Elle doit cependant être mentionnée en indiquant l'URL de notre site, ou en mentionnant son nom et ses
      développeurs.
    </article>
  </div>
  `;

const GeneralConditionsPage = () => {
  setLayout("Conditions générales d'utilisation");
  let page = document.querySelector("#page");
  page.innerHTML = generalConditions;

  document.querySelector("#rules").innerHTML = "";
  document.querySelector("#scrollArrow").innerHTML = "";
  document.querySelector("#blank-space-for-general-conditions").innerHTML = `<div style="height: 100vh"></div>`;
};

export default GeneralConditionsPage;
