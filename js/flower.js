document.addEventListener("click", function (e) {
  const flower = document.createElement("div");
  flower.classList.add("line-flower");

  // Simple line-style flower shapes
  const shapes = ["✿", "❀", "❁", "✾", "✽"];
  flower.textContent = shapes[Math.floor(Math.random() * shapes.length)];

  // Position at click
  flower.style.left = e.pageX + "px";
  flower.style.top = e.pageY + "px";

  document.body.appendChild(flower);

  // Remove after animation
  setTimeout(() => {
    flower.remove();
  }, 2000);
});