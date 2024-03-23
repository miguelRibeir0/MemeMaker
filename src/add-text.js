const drawTextTop = (inputText) => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  context.font = "70px Impact";
  context.fillStyle = "white";
  context.textAlign = "center";
  context.textBaseline = "top";

  const centerX = canvas.width / 2;

  context.fillText(inputText, centerX, 20);
};

const drawTextBottom = (inputText) => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  context.font = "70px Impact";
  context.fillStyle = "white";
  context.textAlign = "center";
  context.textBaseline = "bottom";

  const centerX = canvas.width / 2;

  context.fillText(inputText, centerX, 460);
};

//MODAL

const modal = document.getElementById("textModal");

const textBtn = document.getElementById("textBtn");
const closeModal = document.getElementById("closeTextModal");

textBtn.addEventListener("click", () => {
  modal.classList.toggle("invisible");
});

closeModal.addEventListener("click", () => {
  modal.classList.toggle("invisible");
});

const btnTop = document.getElementById("topAdd");

btnTop.addEventListener("click", () => {
  const topTextInput = document.getElementById("topText");
  const topValue = topTextInput.value;
  let topValueNoSpaces = topValue.replace(/\s/g, "");
  const uppercase = topValue.toUpperCase();

  if (topValueNoSpaces.length > 15) {
    alert("The text is too long, please use less than 15 characters");
  } else {
    drawTextTop(uppercase);
  }
});

const btnBottom = document.getElementById("bottomAdd");

btnBottom.addEventListener("click", () => {
  const bottomTextInput = document.getElementById("bottomText");
  const bottomValue = bottomTextInput.value;
  let bottomValueNoSpaces = bottomValue.replace(/\s/g, "");
  const uppercase = bottomValue.toUpperCase();

  if (bottomValueNoSpaces.length > 15) {
    alert("The text is too long, please use less than 15 characters");
  } else {
    drawTextBottom(uppercase);
  }
});
