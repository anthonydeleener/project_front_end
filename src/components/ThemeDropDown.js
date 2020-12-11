let themeSelection = document.querySelector("#themeSelection");
import { setTheme, getTheme } from "../utils/session.js";

const ThemeDropDown = () => {
  const dropDown = `
    <div id="themes" value = "white">
    `;

  const theme = getTheme();
  if(theme)
    setColor(theme);
  themeSelection.innerHTML = dropDown;
  const themeDropDown = document.querySelector("#themes");
  themeDropDown.addEventListener("change", onChange);
};

const onChange = (e) => {
  const themeDropDown = document.querySelector("#themes");
  setColor(themeDropDown.value);
  setTheme(themeDropDown.value);
};

const setColor = (color) => {
  const coloredAreas = document.querySelectorAll(
    ".header,.footer,.left,.right"
  );
  coloredAreas.forEach((element) => {
    element.classList.add("bg-dark");
})};

export default ThemeDropDown;
