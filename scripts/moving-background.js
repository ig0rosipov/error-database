const background = document.querySelector('.root__background');

document.addEventListener("mousemove", (e) => {
  background.style.backgroundPositionX = -e.x*0.2 + "px";
  background.style.backgroundPositionY = -e.y*0.2 + "px";
});
