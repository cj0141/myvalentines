function YES() {
  document.getElementById("message").innerHTML =
    "💘 Yey hmph mwuah";

  changeGif("gifImage/rose.webp");
  createHearts();

  // show bottom YES (only once)
  const yesbottom = document.getElementById("yesbottom");
  yesbottom.style.display = "inline-block";
}

let noGifIndex = 0; // counter for cycling GIFs

function NO() {
  document.getElementById("message").innerHTML =
    "Hmph you Dont Love Me!";

  // Array of GIFs for NO
  const noGifs = [
    "gifimage/angry.webp",
    "gifimage/crying.gif",
    "gifimage/lol.webp",
    "gifimage/duh.gif"
  ];

  // Show GIF in sequence
  changeGif(noGifs[noGifIndex]);

  // Move to next GIF, loop back if at end
  noGifIndex = (noGifIndex + 1) % noGifs.length;

  createHearts();
}

// Smooth GIF swap with fade
function changeGif(newSrc) {
  const gif = document.getElementById("gifImage");
  gif.classList.add("fade-out");

  setTimeout(() => {
    gif.src = newSrc;
    gif.classList.remove("fade-out");
  }, 500);
}

// Create floating hearts
function createHearts() {
  for (let i = 0; i < 10; i++) {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
}

/* =========================
   NO BUTTON DODGE 😈
   ========================= */

const noBtn = document.getElementById("noBtn");
let hoverCount = 0; // counter for hover events

noBtn.addEventListener("mouseover", () => {
  hoverCount++;

  // Move button randomly
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  // After 1 hover, trigger NO() automatically
  if (hoverCount >= 1) {
    NO(); // call your NO function
    hoverCount = 0; // reset counter if you want it to repeat
  }
});
