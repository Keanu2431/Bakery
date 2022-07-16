`use strict`;

// console.log(image.src);
// image.src = imageArray[0];

// const slideShow = function () {
//   image.src = imageArray[i];
//   if (i < imageArray.length - 1) i++;
//   else i = 0;
//   setTimeout(`slideShow()`, timeInterval);
//   image.classList.remove(`fade-in`);
//   image.classList.add(`fade-in`);
// };

// // slideShow();
// window.onload = slideShow;

window.addEventListener(
  "DOMContentLoaded",
  function (e) {
    // Original JavaScript code by Chirp Internet: chirpinternet.eu
    // Please acknowledge use of this code by including this header.

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
