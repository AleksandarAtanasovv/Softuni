function attachGradientEvents() {
  const gradient = document.getElementById("gradient");
  gradient.addEventListener("mousemove", (e) => {
    const percentage = (e.offsetX / 300) * 100;
    document.getElementById("result").textContent = Math.floor(percentage) + "%";
  });
}
