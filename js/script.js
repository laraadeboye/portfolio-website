// script.js

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
      navLinks.classList.remove("active");
    });
  });

  document.querySelector(".scroll-to-top").addEventListener("click", e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.getElementById("contact-form").addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Mock sending logic (no backend)
    alert("Message sent successfully!");
    e.target.reset();
  });
});
