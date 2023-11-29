import React from 'react'
import { useRef } from 'react';

function App() {
  const buttonRef = useRef(null);

  const changeColor = () => {
    // console.log('chang color button clicked')
    // console.log(buttonRef.current);
    const colors = ['red','blue', 'green', 'yellow','purple','pink','black','orange','brown','white'];
    const randomColor = colors[Math.floor(Math.random()*10)];
    console.log(randomColor);
    buttonRef.current.style.backgroundColor = randomColor;
  }
  return (
    <div>
      <h3>Background Color Switcher</h3>
      <button onClick={changeColor} ref={buttonRef}>Change Color</button>
    </div>
  )
}

export default App;
