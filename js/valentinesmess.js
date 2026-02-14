// ===============================
// Floating Hearts + Music (TOGGLE)
// ===============================

function createHeart() {
  const heart = document.createElement("div");
  heart.textContent = "💖";
  heart.style.position = "fixed";
  heart.style.bottom = "0";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  heart.style.opacity = "1";
  heart.style.pointerEvents = "none";
  heart.style.zIndex = "9999";

  const drift = Math.random() > 0.5 ? 1 : -1;
  heart.style.transition = "transform 5s linear, opacity 5s linear";

  document.body.appendChild(heart);

  requestAnimationFrame(() => {
    heart.style.transform = `translate(${drift * 60}px, -100vh)`;
    heart.style.opacity = "0";
  });

  setTimeout(() => heart.remove(), 5000);
}

document.addEventListener("DOMContentLoaded", () => {
  // 💖 Initial heart burst
  for (let i = 0; i < 12; i++) {
    setTimeout(createHeart, i * 150);
  }

  // 💕 Continuous hearts
  setInterval(createHeart, 600);

  const envelope = document.querySelector(".envelope");
  const music = document.getElementById("hoverMusic");

  let isOpen = false; // envelope state

  envelope.addEventListener("click", () => {
    if (!isOpen) {
      // ▶ OPEN → play music
      music.volume = 0.6;
      music.play().catch(() => {});
      isOpen = true;
    } else {
      // ⏸ CLOSE → stop music
      music.pause();
      music.currentTime = 0;
      isOpen = false;
    }
  });
});
