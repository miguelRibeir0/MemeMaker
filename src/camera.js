export const getVideo = (async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const video = document.createElement("video");
    video.srcObject = stream;

    video.onloadedmetadata = () => {
      const canvas = document.getElementById("canvas");
      const context = canvas.getContext("2d");

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const draw = () => {
        context.drawImage(video, 0, 0);
        requestAnimationFrame(draw);
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
        } else {
          video.play();
          selfie = false;
          btn.textContent = "Take a selfie!";
        }
      });
    };
  } catch (error) {
    alert(
      "You need to give access to your camera or you wont be able to build your meme."
    );
  }
})();
