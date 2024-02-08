import React, { useState } from 'react';
import './App.css'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('');

  const changeColor = (color) => {
    setBackgroundColor(color);
  };
  return (
    <div style={{width:'100%',height:'100vh', backgroundColor }} className='d-flex justify-content-center align-items-center flex-column'>
     <h1>Background Color Change</h1>
     <div className='' >
    <button className='button' style={{  marginRight: '10px' }} onClick={() => changeColor('red')}>Red</button>
    <button  className='button'  style={{  marginRight: '10px' }} onClick={() => changeColor('blue')}>Blue</button>
    <button  className='button'  style={{  marginRight: '10px' }} onClick={() => changeColor('green')}>Green</button>
    <button  className='button' style={{  marginRight: '10px' }} onClick={() => changeColor('purple')}>Purple</button>
     </div>
    </div>
    
  )
}

export default App
