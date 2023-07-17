const darkModeButton = document.querySelector(".slider");
const body = document.querySelector("body");
var r = document.querySelector(":root");
let dark = false;

darkModeButton.addEventListener("click", () => {
  if (!dark) {
    dark = true;
    r.style.setProperty("--background-color", "#0e3f3a");
    r.style.setProperty("--text-color", "#ececec");
  } else {
    dark = false;
    r.style.setProperty("--background-color", "#1c8177");
    r.style.setProperty("--text-color", "#000000");
  }
});
