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

//lightbox//

type = "text/javascript";
var lightbox = new PhotoSwipeLightbox({
  gallery: ".portfolio-section",
  children: "a",
  // dynamic import is not supported in UMD version
  pswpModule: PhotoSwipe,
});
lightbox.init();
