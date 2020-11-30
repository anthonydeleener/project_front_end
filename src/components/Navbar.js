let navBar = document.querySelector("#navBar");
import {getUserSessionData} from "../utils/session.js";
// destructuring assignment
const Navbar = () => {
  let navbar;
  let user = getUserSessionData();    
  if (user) {
    navbar = `<nav class="navbar navbar-expand-lg bg-dark mb-2" id="navBar">
  <a class="navbar-brand" href="/" data-uri="/">Dobble Game</a
  ><button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavAltMarkup"
    aria-controls="navbarNavAltMarkup"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav ml-auto">
      <a class="nav-item nav-link" href="#" data-uri="/">Home</a>    
      <a class="nav-item nav-link" href="#" data-uri="/users">List users</a>
      <a class="nav-item nav-link" href="#" data-uri="/films">List films</a>
      <a class="nav-item nav-link" href="#" data-uri="/films/add">Add film</a>
      <a class="nav-item nav-link" href="#" data-uri="/logout">Logout</a>
      <a class="nav-item nav-link disabled" href="#">${user.username}</a>
    </div>
  </div>
  </nav>`;
  } else {
    navbar = `<nav class="navbar navbar-expand-lg bg-dark mb-2" id="navBar">
    <a class="navbar-brand" href="/" data-uri="/">Dobble Game</a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavAltMarkup"
    aria-controls="navbarNavAltMarkup"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav ml-auto">
      <a class="nav-item nav-link" href="#" data-uri="/register">Register</a>
      <a class="nav-item nav-link" href="#" data-uri="/login">Login</a> 
    </div>
  </div>
  </nav>`;
  }

  return (navBar.innerHTML = navbar);
};

export default Navbar;