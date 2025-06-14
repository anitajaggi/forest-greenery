let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let thumbnails = document.querySelectorAll(".thumbnail .item");

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function () {
  itemActive = itemActive + 1;
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  showSlider();
};
//event prev click
prev.onclick = function () {
  itemActive = itemActive - 1;
  if (itemActive < 0) {
    itemActive = countItem - 1;
  }
  showSlider();
};
// auto run slider
let refreshInterval = setInterval(() => {
  next.click();
}, 5000);
function showSlider() {
  // remove item active old
  let itemActiveOld = document.querySelector(".slider .list .item.active");
  let thumbnailActiveOld = document.querySelector(".thumbnail .item.active");
  itemActiveOld.classList.remove("active");
  thumbnailActiveOld.classList.remove("active");

  // active new item
  items[itemActive].classList.add("active");
  thumbnails[itemActive].classList.add("active");
  setPositionThumbnail();

  // clear auto time run slider
  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 5000);
}
function setPositionThumbnail() {
  let thumbnailActive = document.querySelector(".thumbnail .item.active");
  let rect = thumbnailActive.getBoundingClientRect();
  if (rect.left < 0 || rect.right > window.innerWidth) {
    thumbnailActive.scrollIntoView({ behavior: "smooth", inline: "nearest" });
  }
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    itemActive = index;
    showSlider();
  });
});

const tl = gsap.timeline();

// nav
gsap.fromTo(
  ".navigation-bar",
  { opacity: 0, y: -100 },
  { opacity: 1, y: 0, duration: 1, delay: 1, ease: "power2.inOut" }
);

// hero section
tl.fromTo(
  ".hero-section h1",
  { opacity: 0, x: -400 },
  { opacity: 1, x: 0, duration: 1, ease: "power2.inOut" },
  "1"
);

tl.fromTo(
  ".hero-section h2",
  { opacity: 0, x: -400 },
  { opacity: 1, x: 0, duration: 1, ease: "power2.inOut" },
  "1"
);

tl.fromTo(
  ".hero-section p",
  { opacity: 0, x: 400 },
  { opacity: 1, x: 0, duration: 1, ease: "power2.inOut" },
  "1"
);

tl.fromTo(
  ".hero-section .btn-primary",
  { opacity: 0, y: 400 },
  { opacity: 1, y: 0, duration: 1, ease: "power2.inOut" },
  "1"
);

tl.fromTo(
  ".hero-section video",
  { opacity: 0, x: 1000 },
  { opacity: 1, x: 0, duration: 3, ease: "power2.inOut" },
  "1"
);

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-section",
    start: "0% 100%",
    end: "50% 80%",
    scrub: true,
  },
});
tl2.from(
  ".about-section",
  { y: 200 },
  { y: 0, duration: 5, ease: "power2.inOut" }
);
tl2.from(
  ".about-content",
  { opacity: 0, x: -500 },
  { opacity: 1, x: 0, delay: 5, duration: 1, ease: "power2.inOut" }
);

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".ExploretheForest",
    start: "top 50%",
    end: "55% 50%",
    scrub: true,
  },
});

tl3.fromTo(
  ".ExploretheForest .c1",
  { opacity: 0, y: 200 },
  { opacity: 1, y: 0, delay: 1, duration: 3, ease: "power2.inOut" }
);
tl3.fromTo(
  ".ExploretheForest .c2",
  { opacity: 0, y: 200 },
  { opacity: 1, y: 0, delay: 1.5, duration: 3, ease: "power2.inOut" }
);
tl3.fromTo(
  ".ExploretheForest .c3",
  { opacity: 0, y: 200 },
  { opacity: 1, y: 0, delay: 2, duration: 3, ease: "power2.inOut" }
);
tl3.fromTo(
  ".ExploretheForest .c4",
  { opacity: 0, y: 200 },
  { opacity: 1, y: 0, delay: 2.5, duration: 3, ease: "power2.inOut" }
);

const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".gallery-section",
    start: "40% 90%",
    end: "50% 70%",
    scrub: true,
  },
});
tl4.fromTo(
  ".gallery-section .slider",
  { x: -1000 },
  { x: 0, duration: 5, ease: "power2.inOut" }
);
tl4.fromTo(
  ".gallery-section .slider .item",
  { opacity: 0, x: -1000 },
  { opacity: 1, x: 0, duration: 10, ease: "power2.inOut" }
);

const slider = document.querySelector(".testimonial-slider");
const item = gsap.utils.toArray(".testimonial-item");

// Duplicate the testimonials for a seamless loop
item.forEach((item) => {
  let clone = item.cloneNode(true);
  slider.appendChild(clone);
});

// GSAP infinite vertical scrolling
gsap.to(".testimonial-item", {
  y: "-100%", // Moves testimonials upward
  duration: 10, // Adjust speed
  ease: "linear",
  repeat: -1,
  modifiers: {
    y: (y) => `${parseFloat(y) % 100}%`, // Ensures smooth looping
  },
});
