const getVideo = (async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const video = document.createElement("video");
    video.srcObject = stream;

    video.onloadedmetadata = () => {
      const canvas = document.getElementById("canvas");
      const context = canvas.getContext("2d");

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      let drawing = true;

      const draw = () => {
        if (drawing) {
          context.drawImage(video, 0, 0);
          requestAnimationFrame(draw);
        }
      };

      draw();
      video.play();

      let selfie = false;

      const btn = document.getElementById("takeSelfie");

      btn.addEventListener("click", () => {
        if (!selfie) {
          video.pause();
          btn.textContent = "Go back!";
          selfie = true;
          drawing = false;
          btn.className =
            "bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded";
        } else {
          drawing = true;
          draw();
          video.play();
          selfie = false;
          btn.textContent = "Take a selfie!";
          btn.className =
            "bg-gray-950 hover:bg-gray-800 p-3 rounded-md text-white border-2 border-white";
        }
        const textBtn = document.getElementById("textBtn");

        textBtn.classList.toggle("hidden");
      });
    };
  } catch (error) {
    alert(
      "You need to give access to your camera or you wont be able to build your meme."
    );
  }
})();
