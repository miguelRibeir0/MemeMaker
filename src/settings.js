const modal = document.getElementById("modal");
const settings = document.getElementById("settingsBtn");

settings.addEventListener("click", () => {
  modal.classList.toggle("invisible");
  modal.innerHTML = `
    <div class="absolute w-1/4 pt-32 pb-14 bg-slate-200 flex items-end justify-center rounded-sm">
        <div class="flex flex-col w-3/4 gap-y-7">
        <button
            class="absolute bg-red-400 hover:bg-red-500 py-2 px-3 rounded-md top-4 right-4 text-white"
            id="closeTextModal"
        >
            X
        </button>

        <label
            class="inline-flex items-center cursor-pointer gap-x-4 text-lg font-semibold justify-between"
        >
            Black Text (White by default)
            <input type="checkbox" value="" class="sr-only peer self-end" id="textCheck" />
            <div
            class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
            ></div>
        </label>

        <label
            class="inline-flex items-center cursor-pointer gap-x-4 text-lg font-semibold justify-between"
        >
            B/W filter
            <input type="checkbox" value="" class="sr-only peer self-end" id="bwCheck" />
            <div
            class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
            ></div>
        </label>

        <label
            class="inline-flex items-center cursor-pointer gap-x-4 text-lg font-semibold justify-between"
        >
            White Bars
            <input type="checkbox" value="" class="sr-only peer" id="barsCheck" />
            <div
            class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
            ></div>
        </label>

        <label
            class="inline-flex items-center cursor-pointer gap-x-4 text-lg font-semibold justify-between"
        >
            Timer (5s)
            <input type="checkbox" value="" class="sr-only peer" id="timerCheck" />
            <div
            class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
            ></div>
        </label>
        </div>
    </div>
  `;

  const closeModal = document.getElementById("closeTextModal");

  closeModal.addEventListener("click", () => {
    modal.classList.toggle("invisible");
    modal.innerHTML = "";
  });

  let textCheck = document.getElementById("textCheck");
  let textState = localStorage.getItem("text");
  textCheck.checked = textState === "true";

  textCheck.addEventListener("change", function () {
    localStorage.setItem("text", this.checked);
  });

  let bwCheck = document.getElementById("bwCheck");
  let bwState = localStorage.getItem("bw");
  bwCheck.checked = bwState === "true";

  bwCheck.addEventListener("change", function () {
    localStorage.setItem("bw", this.checked);
  });

  let barsCheck = document.getElementById("barsCheck");
  let barsState = localStorage.getItem("bars");
  barsCheck.checked = barsState === "true";

  barsCheck.addEventListener("change", function () {
    localStorage.setItem("bars", this.checked);
  });

  let timerCheck = document.getElementById("timerCheck");
  let timerState = localStorage.getItem("timer");
  timerCheck.checked = timerState === "true";

  timerCheck.addEventListener("change", function () {
    localStorage.setItem("timer", this.checked);
  });
});
