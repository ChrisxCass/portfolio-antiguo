import hamburgerMenu from "./menu_hamburguesa.js";
import navActive from "./nav_active.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".panel__a");
  navActive()
});
