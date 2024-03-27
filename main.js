import "./style.css";
import "./src/camera.js";
import "./src/add-text.js";
import "./src/settings.js";
import "./src/save.js";

const queryW = window.matchMedia("(max-width: 768px)");
const body = document.querySelector("body");

if (queryW.matches) {
  body.className = "flex items-center justify-center h-screen bg-gray-100";
  body.innerHTML = `
    <h2 class="w-3/4 text-xl text-center">Sorry but this is not optimized for screens smaller than 768px!</h2>
    `;
}
