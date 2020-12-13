import { setLayout } from "../utils/render.js";

let generalConditions = `
  <div>
    <h1>Conditions generales d'utilisation</h1>
    <article>
      On vole vos donnees pour les donner aux pauvres.
    </article>
  </div>`;

const GeneralConditionsPage = () => {
  setLayout("");
  let page = document.querySelector("#page");
  page.innerHTML = generalConditions;
};

export default GeneralConditionsPage;
