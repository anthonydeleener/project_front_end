import { setLayout } from "./utils/render.js";
import {Router} from "./Components/Router.js";
import Navbar from "./Components/Navbar.js";
import Rules from "./Components/Rules.js";
/* use webpack style & css loader*/
import "./stylesheets/style.css";
/* load bootstrap css (web pack asset management) */
import 'bootstrap/dist/css/bootstrap.css';
/* load bootstrap module (JS) */
import 'bootstrap';
import ScrollArrow from "./components/ScrollArrow.js";
import Footer from "./components/Footer.js";

Navbar();
ScrollArrow();
Rules();
Footer();
Router();



//setLayout(undefined, HEADER_TITLE, FOOTER_TEXT);
