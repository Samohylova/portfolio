const follower = document.getElementById("follower");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

// Sledování pohybu myši
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Animace pomocí lerp interpolace
function animate() {
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;

  follower.style.transform = `translate(${currentX - 15}px, ${
    currentY - 15
  }px)`;

  requestAnimationFrame(animate);
}

animate();
// Zajištění, že follower bude vždy na vrchu
follower.style.zIndex = "1000";
