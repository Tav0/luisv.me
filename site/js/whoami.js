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
images[0] = "img/whoami_dancer.png";
images[1] = "img/whoami_designer.png";
images[2] = "img/whoami_dev.png";
images[3] = "img/whoami_maker.png";
images[4] = "img/whoami_traveler.png";

