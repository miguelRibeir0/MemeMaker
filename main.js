import "./style.css";
import { getVideo } from "./src/camera.js";
import { drawTextTop, drawTextBottom } from "./src/add-text.js";

//TESTING

const input = document.getElementById("test");
const bla = document.getElementById("test2");
const input2 = document.getElementById("test3");
const bleh = document.getElementById("test4");

bla.addEventListener("click", () => {
  const value = input.value;
  const valueFinal = value.toUpperCase();
  drawTextTop(valueFinal);
});

bleh.addEventListener("click", () => {
  const value = input2.value;
  const valueFinal = value.toUpperCase();
  drawTextBottom(valueFinal);
});
