const background = document.querySelector('.root__background');

let newX = 0,
    newY = 0,
    bufferX = 0,
    bufferY = 0,
    friction = 1/20

  function moveBackground() {
    newX += (bufferX - newX) * friction;
    newY += (bufferY - newY) * friction;

    background.style.backgroundPositionX = newX + 'px';
    background.style.backgroundPositionY = newY + 'px';
    window.requestAnimationFrame(moveBackground);
  }

document.addEventListener("mousemove", (e) => {
  bufferX = (-e.x*0.15).toFixed(1);
  bufferY = (-e.y*0.15).toFixed(1);
});

moveBackground();
