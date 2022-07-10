const lightBtn = document.getElementById("lightBtn");
const changeImage = () => {
  var image = document.getElementById("myImage");
  if (image.src.match("./images/bulbOff.png")) {
    image.src = "./images/bulbOn.png";
  } else {
    image.src = "./images/bulbOff.png";
  }
};

lightBtn.addEventListener("click", changeImage);
