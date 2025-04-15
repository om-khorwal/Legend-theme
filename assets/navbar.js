let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling Down
    gsap.to(navbar, { y: -100, duration: 0.5, ease: "power2.out" });
  } else {
    // Scrolling Up
    gsap.to(navbar, { y: 0, duration: 0.5, ease: "power2.out" });
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
