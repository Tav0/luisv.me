function displayNextImage() {
  x = (x === images.length - 1) ? 0 : x + 1;
  document.getElementById("img").src =
    images[x];
}

function displayPreviousImage() {
  x = (x <= 0) ? images.length - 1 : x - 1;
  document.getElementById("img").src =
    images[x];
}

function startTimer() {
  setInterval(displayNextImage, 300);
}

var images = [], x = -1;
images[0] = "img/whoami_dancer.svg";
images[1] = "img/whoami_designer.svg";
images[2] = "img/whoami_dev.svg";
images[3] = "img/whoami_maker.svg";
images[4] = "img/whoami_human.svg";

