const saveBtn = document.getElementById("saveBtn");
const canvas = document.getElementById("canvas");

const imgSave = () => {
  let imageUrl = canvas.toDataURL("image/jpg");
  let tempLink = document.createElement("a");
  tempLink.href = imageUrl;
  tempLink.download = "your_meme.jpg";
  tempLink.click();
};

saveBtn.addEventListener("click", imgSave);
