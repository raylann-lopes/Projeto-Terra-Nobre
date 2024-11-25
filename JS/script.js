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
sr.reveal(".contact", { delay: 450, origin: "right" });
sr.reveal(".structure-video", { delay: 150, origin: "right" });
sr.reveal(".image1", { delay: 300, origin: "right" });
sr.reveal(".scroll-down", { delay: 500, origin: "right" });

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

/*Animação de reels*/

sr.reveal(".video-1", { delay: 300, origin: "right" });
sr.reveal(".video-2", { delay: 1000, origin: "right" });
sr.reveal(".video-3", { delay: 1700, origin: "right" });

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
    320: {
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

/*Script DB*/

if ("WebSocket" in window) {
  (function () {
    function refreshCSS() {
      var sheets = [].slice.call(document.getElementsByTagName("link"));
      var head = document.getElementsByTagName("head")[0];
      for (var i = 0; i < sheets.length; ++i) {
        var elem = sheets[i];
        var parent = elem.parentElement || head;
        parent.removeChild(elem);
        var rel = elem.rel;
        if (
          (elem.href && typeof rel != "string") ||
          rel.length == 0 ||
          rel.toLowerCase() == "stylesheet"
        ) {
          var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, "");
          elem.href =
            url +
            (url.indexOf("?") >= 0 ? "&" : "?") +
            "_cacheOverride=" +
            new Date().valueOf();
        }
        parent.appendChild(elem);
      }
    }
    var protocol = window.location.protocol === "http:" ? "ws://" : "wss://";
    var address =
      protocol + window.location.host + window.location.pathname + "/ws";
    var socket = new WebSocket(address);
    socket.onmessage = function (msg) {
      if (msg.data == "reload") window.location.reload();
      else if (msg.data == "refreshcss") refreshCSS();
    };
    if (
      sessionStorage &&
      !sessionStorage.getItem("IsThisFirstTime_Log_From_LiveServer")
    ) {
      console.log("Live reload enabled.");
      sessionStorage.setItem("IsThisFirstTime_Log_From_LiveServer", true);
    }
  })();
} else {
  console.error(
    "Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading."
  );
}
