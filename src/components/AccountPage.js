import {getUserSessionData, setUserSessionData} from "../utils/session.js";
import { RedirectUrl } from "./Router.js";
import Navbar from "./Navbar.js";
import { setLayout } from "../utils/render.js";


let accountPage = `
<form>
<div class="form-group">
  <label for="password">Changer son mot de passe</label>
  <input class="form-control" id="password" type="password" name="password" placeholder="Entrez votre nouveau mot de passe" required="" pattern=".*[A-Z]+.*" />
</div>
</form>`;

const AccountPage = () => {
  setLayout("");
  let page = document.querySelector("#page");
  page.innerHTML = accountPage;
  let accountForm = document.querySelector("form");
  const user = getUserSessionData();
  if (user) {
    // re-render the navbar for the authenticated user
    accountForm.addEventListener("submit", onLogin);
  } else {
    Navbar();
    RedirectUrl("/login");
  }
};

const onLogin = (e) => {
  e.preventDefault();
  let password = document.getElementById("password");

  let user = {
    password: document.getElementById("password").value,
  }; 
}

export default AccountPage;
