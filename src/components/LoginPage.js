/* In a template literal, the ` (backtick), \ (backslash), and $ (dollar sign) characters should be 
escaped using the escape character \ if they are to be included in their template value. 
By default, all escape sequences in a template literal are ignored.*/
import {getUserSessionData, setUserSessionData} from "../utils/session.js";
import { RedirectUrl } from "./Router.js";
import Navbar from "./Navbar.js";
import { setLayout } from "../utils/render.js";
import {loginRegisterAnime} from "./anime.js";


let loginPage = `
<p class = animation style=font-size:30px> Bienvenu sur la page de login </p>
<form>
<div class="form-group">
  <label for="username">Nom d'utilisateur</label>
  <input class="form-control" id="username" type="text" name="username" placeholder="Entrez votre nom d'utilisateur" required="" pattern="^[a-zA-Z0-9_]{4,16}$" />
</div>
<div class="form-group">
  <label for="password">Mot de passe</label>
  <input class="form-control" id="password" type="password" name="password" placeholder="Entrez votre mot de passe" required="" pattern=".*[A-Z]+.*" />
</div>
<button class="btn btn-primary" id="btn" type="submit">Jouer</button>
<!-- Create an alert component with bootstrap that is not displayed by default-->
<div class="alert alert-danger mt-2 d-none" id="messageBoard"></div>
</form>`;

const LoginPage = () => {
  setLayout("");
  let page = document.querySelector("#page");
  page.innerHTML = loginPage;
  let loginForm = document.querySelector("form");
  const user = getUserSessionData();
  if (user) {
    // re-render the navbar for the authenticated user
    Navbar();
    RedirectUrl("/game");
  } else loginForm.addEventListener("submit", onLogin);
  loginRegisterAnime();
};

const onLogin = (e) => {
  e.preventDefault();
  let username = document.getElementById("username");
  let password = document.getElementById("password");

  let user = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };
 

  fetch("/api/users/login", {
    method: "POST", 
    body: JSON.stringify(user), 
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok)
        throw new Error(
          "Error code : " + response.status + " : " + response.statusText
        );
      return response.json();
    })
    .then((data) => onUserLogin(data))
    .catch((err) => onError(err));
};

const onUserLogin = (userData) => {
  console.log("onUserLogin:", userData);
  const user = { ...userData, isAutenticated: true };  
  setUserSessionData(user);
  Navbar();
  RedirectUrl("/");
};

const onError = (err) => {
  let messageBoard = document.querySelector("#messageBoard");
  let errorMessage = "";
  if (err.message.includes("401")) errorMessage = "Wrong username or password.";
  else errorMessage = err.message;
  messageBoard.innerText = errorMessage;
  messageBoard.classList.add("d-block");
};

function loginAnime(){
  var button = document.querySelector("button");
  button.addEventListener("mouseover",function(){
     button.style.width='40px';
  })
}

export default LoginPage;
