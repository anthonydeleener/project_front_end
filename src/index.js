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

const HEADER_TITLE = "JavaScript & Node.js full course";
const FOOTER_TEXT = "Happy learning : )";

Navbar();

ScrollArrow();
Rules();


Router();



//setLayout(undefined, HEADER_TITLE, FOOTER_TEXT);
