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
images[0] = "img/dancer_whoami.png";
images[1] = "img/designer_whoami.png";
images[2] = "img/dev_whoami.png";
images[3] = "img/maker_whoami.png";
images[4] = "img/human_whoami.png";

