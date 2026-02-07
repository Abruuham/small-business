
const cardsEl = document.getElementById("cards");
cardsEl.addEventListener("mousemove", (e) => {
  for (const card of document.querySelectorAll(".card")) {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }
});


const nav = document.querySelector(".navContainer");
const btn = document.querySelector(".navToggle");

btn.addEventListener("click", () => {
  nav.dataset.open = nav.dataset.open === "true";
  const open = nav.dataset.open === "true";
  nav.dataset.open = open ? "false" : "true";
  btn.setAttribute("aria-expanded", String(!open));
});

nav.querySelectorAll(".navMenu a").forEach(a => {
  a.addEventListener("click", () => nav.dataset.open = "false");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) nav.dataset.open = "false";
});