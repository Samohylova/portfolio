// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Form submission
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Děkuji za vaši zprávu! Brzy se vám ozvu.");
  this.reset();
});

// CTA button click
document.querySelector(".cta-button").addEventListener("click", function () {
  document.querySelector("#kontakt").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
