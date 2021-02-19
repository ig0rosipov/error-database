import React from "react";

function Background() {
  const background = React.createRef();

  // const friction = 1 / 20;
  // const [newX, setNewX] = React.useState(0);
  // const [newY, setNewY] = React.useState(0);
  // const [bufferX, setBufferX] = React.useState(0);
  // const [bufferY, setBufferY] = React.useState(0);

  // const moveBackground = () => {
  //   setNewX(newX + (bufferX - newX) * friction);
  //   setNewY(newY + (bufferY - newY) * friction);
  // };
  // React.useEffect(moveBackground, [bufferX, bufferY])
  // React.useEffect(() => {
  //   background.current.style.backgroundPositionX = newX + "px";
  //   background.current.style.backgroundPositionY = newY + "px";
  //   window.requestAnimationFrame(moveBackground);
  // }, [newX, newY]);

  // const mouseMoveHandler = (e) => {
  //   console.log(typeof bufferX)
  //   setBufferX((-e.nativeEvent.x * 0.15));
  //   setBufferY((-e.nativeEvent.y * 0.15));
  // };

  return (
    <div
      className="app__background"
      ref={background}
    ></div>
  );
}

export default Background;
