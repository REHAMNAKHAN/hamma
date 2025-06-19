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
function initHeaderMenu() {
    const nav = document.getElementById("navMenu");
    const burger = document.querySelector(".hamburger");

    function toggleMenu() {
      nav.classList.toggle("active");
    }

    function closeMenu() {
      nav.classList.remove("active");
    }

    // Make toggle function globally available if needed
    window.toggleMenu = toggleMenu;

    document.querySelectorAll(".nav a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) && !burger.contains(e.target)) {
        closeMenu();
      }
    });
}


    fetch('https://docs.google.com/spreadsheets/d/1km3SdNZgy-4X2gc-xaPwzLLwebsN643U--tq4tx8BOw/gviz/tq?tqx=out:json')
      .then(res => res.text())
      .then(text => {
        const json = JSON.parse(text.substr(47).slice(0, -2));
        const offerText = json.table.rows[0].c[0].v;  // Cell A1
        document.getElementById('offer-banner').textContent = offerText;
      })
      .catch(err => {
        document.getElementById('offer-banner').textContent = "Unable to load offer.";
        console.error("Fetch error:", err);
      });
    