// Scroll Reveal Animation
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

fadeElements.forEach(element => {
  observer.observe(element);
});


// Hero Parallax Animation
const parallaxHero = document.querySelector(".parallax-bg");

window.addEventListener("scroll", () => {
  if (!parallaxHero) return;

  const scrollValue = window.scrollY;
  parallaxHero.style.backgroundPositionY = `${scrollValue * 0.25}px`;
});


// Navbar Shadow on Scroll
const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});