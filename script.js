// Mobile menu button
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {
  nav.classList.toggle("show");
});

// Close menu after clicking a link
nav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
});

// Order Now button
const orderBtn = document.getElementById("order-btn");
const orderMsg = document.getElementById("order-msg");

orderBtn.addEventListener("click", function () {
  orderMsg.textContent = "Thank you! Your order has been placed ☕";
});

// Specials carousel
const specials = [
  "☕ Caramel Latte - ₹170",
  "🍰 Cheesecake Slice - ₹160",
  "🥐 Butter Croissant - ₹100",
  "🧋 Iced Mocha - ₹190"
];

let index = 0;
const slide = document.getElementById("slide");

function showSlide() {
  slide.textContent = specials[index];
}

document.getElementById("next").addEventListener("click", function () {
  index = (index + 1) % specials.length;
  showSlide();
});

document.getElementById("prev").addEventListener("click", function () {
  index = (index - 1 + specials.length) % specials.length;
  showSlide();
});

showSlide();
