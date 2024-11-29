var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 2.5,
    slideShadows: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

/*Animações*/

const sr = ScrollReveal({
  distance: "65px",
  duration: 2600,
  delay: 450,
  reset: true,
});

sr.reveal(".image, .residence-text, .icons", { delay: 100, origin: "top" });
let vh = window.innerWidth;
if (vh > 1024) {
  sr.reveal(".contact", { delay: 450, origin: "right" });
}
let vh1 = window.innerWidth;
if (vh1 > 1024) {
  sr.reveal(".structure-video", { delay: 150, origin: "right" });
}
sr.reveal(".image1", { delay: 300, origin: "right" });
sr.reveal(".scroll-down", { delay: 500, origin: "right" });

if (vh > 1024) {
  var htmlVideoPc1 =
    '<swiper-container class="mySwiper" pagination="true" pagination-clickable="true" space-between="30" slides-per-view="3">' +
    "<swiper-slide>" +
    "<video  class='video' src='src/video1.mp4'controlslist muted controls onfocus='true'>" +
    "</video>" +
    "</swiper-slide>" +
    "<swiper-slide>" +
    "<video  class='video' src='src/video-alex.mp4' controlslist muted controls onfocus='true'>" +
    "</video>" +
    "</swiper-slide>" +
    "<swiper-slide>" +
    "<video  class='video' src='src/video3.mp4' controlslist muted controls onfocus='true'>" +
    "</video>" +
    "</swiper-slide>" +
    "</swiper-container>";
  $("#video-reels").html(htmlVideoPc1);
} else if (vh < 900) {
  var htmlVideoPc1 =
    '<swiper-container class="mySwiper" pagination="true" pagination-clickable="true" space-between="30" slides-per-view="1">' +
    "<swiper-slide>" +
    "<video class='video' src='src/video-alex.mp4' controlslist controls muted onfocus='true'>" +
    "</video>" +
    "</swiper-slide>" +
    "<swiper-slide>" +
    "<video class='video' src='src/video2.mp4' controlslist controls muted onfocus='true'>" +
    "</video>" +
    "</swiper-slide>" +
    "<swiper-slide>" +
    "<video class='video' src='src/video3.mp4' controlslist controls muted onfocus='true'>" +
    "</video>" +
    "</swiper-slide>" +
    "</swiper-container>";
  $("#video-reels").html(htmlVideoPc1);
}

/*icones*/

sr.reveal(".icon-1", { delay: 50, origin: "left" });
sr.reveal(".icon-2", { delay: 100, origin: "top" });
sr.reveal(".icon-3", { delay: 50, origin: "right" });
sr.reveal(".icon-4", { delay: 50, origin: "bottom" });
sr.reveal(".icon-5", { delay: 50, origin: "left" });
sr.reveal(".icon-6", { delay: 50, origin: "top" });
sr.reveal(".icon-7", { delay: 50, origin: "right" });
sr.reveal(".icon-8", { delay: 50, origin: "bottom" });
sr.reveal(".icon-9", { delay: 50, origin: "left" });

/*Script Cards*/

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerslides: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: "true",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakPoints: {
    400: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

sr.reveal(".swiper-slide", { delay: 200, origin: "top" });

/*script slider*/

let slider = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let dots = document.querySelectorAll(".slider .dots li");

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
};
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
};
let refreshInterval = setInterval(() => {
  next.click();
}, 3000);
function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + "px";
  //
  let last_active_dot = document.querySelector(".slider .dots li.active");
  last_active_dot.classList.remove("active");
  dots[active].classList.add("active");

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 3000);
}

dots.forEach((li, key) => {
  li.addEventListener("click", () => {
    active = key;
    reloadSlider();
  });
});
window.onresize = function (event) {
  reloadSlider();
};
