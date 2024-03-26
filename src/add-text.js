const drawTextTop = (inputText) => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  const barsState = localStorage.getItem("bars");
  const textState = localStorage.getItem("text");

  if (textState === "true") {
    context.font = "70px Impact";
    context.fillStyle = "black";
    context.textAlign = "center";
    context.textBaseline = "top";

    const centerX = canvas.width / 2;

    context.fillText(inputText, centerX, 20);
  } else {
    context.font = "70px Impact";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.textBaseline = "top";

    const centerX = canvas.width / 2;

    context.fillText(inputText, centerX, 20);
  }

  if (barsState === "true") {
    context.font = "45px Impact";
    context.fillStyle = "black";
    context.textAlign = "center";
    context.textBaseline = "top";

    const centerX = canvas.width / 2;

    context.fillText(inputText, centerX, 15);
  }
};

const drawTextBottom = (inputText) => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  const barsState = localStorage.getItem("bars");
  const textState = localStorage.getItem("text");

  if (textState === "true") {
    context.font = "70px Impact";
    context.fillStyle = "black";
    context.textAlign = "center";
    context.textBaseline = "bottom";

    const centerX = canvas.width / 2;

    context.fillText(inputText, centerX, 460);
  } else {
    context.font = "70px Impact";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.textBaseline = "bottom";

    const centerX = canvas.width / 2;

    context.fillText(inputText, centerX, 460);
  }

  if (barsState === "true") {
    context.font = "45px Impact";
    context.fillStyle = "black";
    context.textAlign = "center";
    context.textBaseline = "bottom";

    const centerX = canvas.width / 2;

    context.fillText(inputText, centerX, 470);
  }
};

//MODAL

const modal = document.getElementById("modal");

const textBtn = document.getElementById("textBtn");

textBtn.addEventListener("click", () => {
  modal.classList.toggle("invisible");
  modal.innerHTML = `
    <div class="absolute w-2/6 h-2/6 bg-slate-200 flex items-center justify-center rounded-sm">
      <button
        class="absolute bg-red-400 hover:bg-red-500 py-2 px-3 rounded-md top-4 right-4 text-white"
        id="closeTextModal"
      >
        X
      </button>
      <div class="flex flex-col w-3/4 items-center justify-center gap-y-3">
        <label
          for="topText"
          class="self-start uppercase text-lg font-semibold"
          >Top Text</label
        >
        <div class="flex w-full mb-5 justify-between">
          <input
            type="text"
            id="topText"
            class="w-5/6 p-2"
            placeholder="(Max 15 letters)"
          />
          <button
            class="bg-black border-2 border-white text-white px-4 py-2 rounded-md text-sm"
            id="topAdd"
          >
            ADD
          </button>
        </div>
        <label
          for="bottomText"
          class="self-start uppercase text-lg font-semibold"
          >Bottom Text</label
        >
        <div class="flex w-full mb-5 justify-between">
          <input
            type="text"
            id="bottomText"
            class="w-5/6 p-2"
            placeholder="(Max 15 letters)"
          />
          <button
            class="bg-black border-2 border-white text-white px-4 py-2 rounded-md text-sm"
            id="bottomAdd"
          >
            ADD
          </button>
        </div>
        <p class="text-red-400">
          // Warning: Adding text twice to the same image will overlay it //
        </p>
      </div>
    </div>
  `;

  const closeModal = document.getElementById("closeTextModal");

  closeModal.addEventListener("click", () => {
    modal.classList.toggle("invisible");
    modal.innerHTML = "";
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
});
