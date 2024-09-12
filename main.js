let img = document.getElementById("img1");
let channel1 = document.getElementById("one");
let channel2 = document.getElementById("two");
let channel3 = document.getElementById("three");
let channel4 = document.getElementById("four");
let channel5 = document.getElementById("five");
let channel6 = document.getElementById("six");
let channel7 = document.getElementById("seven");
let channel8 = document.getElementById("eight");
let channel9 = document.getElementById("nine");

function choosedChannel(num) {
  if (num == 1) {
    img.src =
      "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg";
  } else if (num == 2) {
    img.src =
      "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg";
  } else if (num == 3) {
    img.src =
      "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg";
  } else if (num == 4) {
    img.src =
      "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg";
  } else if (num == 5) {
    img.src =
      "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg";
  } else if (num == 6) {
    img.src =
      "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg";
  } else if (num == 7) {
    img.src =
      "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg";
  } else if (num == 8) {
    img.src =
      "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg";
  } else if (num == 9) {
    img.src =
      "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg";
  }
}
