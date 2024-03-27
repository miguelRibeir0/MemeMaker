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
        const bwState = localStorage.getItem("bw");
        const barsState = localStorage.getItem("bars");

        if (drawing) {
          //no setting are enabled
          context.drawImage(video, 0, 0);

          if (bwState === "true") {
            //BW setting is enabled
            const imageData = context.getImageData(
              0,
              0,
              canvas.width,
              canvas.height
            );
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
              const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
              data[i] = avg;
              data[i + 1] = avg;
              data[i + 2] = avg;
            }

            context.putImageData(imageData, 0, 0);
          }

          if (barsState === "true") {
            //White bars setting is enabled
            context.fillStyle = "white";
            context.fillRect(0, 0, canvas.width, 70);
            context.fillRect(0, canvas.height - 70, canvas.width, 70);
          }

          requestAnimationFrame(draw);
        }
      };

      draw();
      video.play();

      let selfie = false;

      const btn = document.getElementById("takeSelfie");

      function countDown(duration) {
        let countdown = duration;
        btn.textContent = `${countdown}s`;

        const countdownInterval = setInterval(() => {
          countdown--;
          if (countdown >= 0) {
            btn.textContent = `${countdown}s`;
          } else {
            clearInterval(countdownInterval);
          }
        }, 1000);
      }

      btn.addEventListener("click", () => {
        const timerState = localStorage.getItem("timer");
        const textBtn = document.getElementById("textBtn");
        const saveBtn = document.getElementById("saveBtn");

        if (!selfie) {
          if (timerState === "true") {
            countDown(5);
            btn.className =
              "bg-transparent border-black p-3 rounded-md text-black border-2 cursor-default";
            setTimeout(() => {
              video.pause();
              btn.textContent = "Go back!";
              selfie = true;
              drawing = false;
              btn.className =
                "bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded";
              textBtn.classList.toggle("hidden");
              saveBtn.classList.toggle("hidden");
            }, 5000);
          } else {
            video.pause();
            btn.textContent = "Go back!";
            selfie = true;
            drawing = false;
            btn.className =
              "bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded";
            textBtn.classList.toggle("hidden");
            saveBtn.classList.toggle("hidden");
          }
        } else {
          drawing = true;
          draw();
          video.play();
          selfie = false;
          btn.textContent = "Take a selfie!";
          btn.className =
            "bg-gray-950 hover:bg-gray-800 p-3 rounded-md text-white border-2 border-white";
          textBtn.classList.toggle("hidden");
          saveBtn.classList.toggle("hidden");
        }
      });
    };
  } catch (error) {
    alert(
      "You need to give access to your camera or you wont be able to build your meme."
    );
  }
})();
