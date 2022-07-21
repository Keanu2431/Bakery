`use strict`;
//Slideshow
window.addEventListener(
  "DOMContentLoaded",
  function (e) {
    const imageHolder = document.querySelector(`.image-holder`);
    var fadeComplete = function (e) {
      imageHolder.appendChild(arr[0]);
    };
    var arr = imageHolder.getElementsByTagName("img");
    for (var i = 0; i < arr.length; i++) {
      arr[i].addEventListener("animationend", fadeComplete, false);
    }
  },
  false
);
//bs5 carousel
const carousel = new bootstrap.Carousel("#myCarousel");
