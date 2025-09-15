// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Navigation active link on scroll (optional enhancement)
window.addEventListener("scroll", () => {
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Contact page feedback (optional)
const emailLink = document.querySelector("a[href^='mailto:']");
if (emailLink) {
  emailLink.addEventListener("click", () => {
    alert("Redirecting to your email client...");
  });
}
