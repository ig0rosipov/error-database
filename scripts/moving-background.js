const background = document.querySelector('.root__background');

document.addEventListener("mousemove", (e) => {
  background.style.backgroundPositionX = 20 * (Math.max(-100, Math.min(100, window.innerWidth) / 2 - e.x)) / 100 + "px";
  background.style.backgroundPositionY = 20 * (Math.max(-100, Math.min(100, window.innerHeight) / 2 - e.y)) / 100 + "px";
  console.log(background.style.backgroundPositionX);
});
