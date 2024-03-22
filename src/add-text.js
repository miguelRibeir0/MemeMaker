export const drawTextTop = (inputText) => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  context.font = "70px Impact";
  context.fillStyle = "white";
  context.textAlign = "center";
  context.textBaseline = "top";

  const centerX = canvas.width / 2;

  context.fillText(inputText, centerX, 20);
};

export const drawTextBottom = (inputText) => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  context.font = "70px Impact";
  context.fillStyle = "white";
  context.textAlign = "center";
  context.textBaseline = "bottom";

  const centerX = canvas.width / 2;

  context.fillText(inputText, centerX, 460);
};
