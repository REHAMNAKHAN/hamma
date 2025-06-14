// Animate heading
const text = "Welcome To";
const heading = document.getElementById("heading");
text.split("").forEach(char => {
  const span = document.createElement("span");
  span.textContent = char === " " ? "\u00A0" : char;
  span.classList.add("letter");
  heading.appendChild(span);
});

gsap.to(".letter", {
  opacity: 1,
  y: 0,
  duration: 0.6,
  ease: "back.out(1.7)",
  stagger: 0.1
});

gsap.to("#hintSnap", {
  opacity: 1,
  scale: 1.1,
  delay: 1.5,
  duration: 0.8,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});

gsap.to("#caption", {
  opacity: 1,
  delay: 2.5,
  duration: 1
});

// Responsive scroll animation
function initSliderAnimation() {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  gsap.set("#slider", { clearProps: "all" });

  if (window.innerWidth > 768) {
    gsap.to("#slider", {
      x: "-100vw",
      scrollTrigger: {
        trigger: ".slider-section",
        start: "top center",
        end: "bottom top",
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true
      }
    });
  }
}

window.addEventListener("load", () => {
  initSliderAnimation();

  // Load external files
  fetch("offerbanner.html")
    .then(res => res.text())
    .then(data => document.getElementById("offer-placeholder").innerHTML = data);

  fetch("header.html")
    .then(res => res.text())
    .then(data => document.getElementById("header-placeholder").innerHTML = data);

  fetch("footer.html")
    .then(res => res.text())
    .then(data => document.getElementById("footer-placeholder").innerHTML = data);
});

window.addEventListener("resize", initSliderAnimation);

function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}

document.addEventListener("click", (e) => {
  const nav = document.getElementById("navMenu");
  const burger = document.querySelector(".hamburger");
  if (!nav.contains(e.target) && !burger.contains(e.target)) {
    nav.classList.remove("active");
  }
});
