import React from 'react';//importing react module so that we can use jsx
import Home from './Home';
import {createRoot} from 'react-dom/client';
const container=document.getElementById('root');
const root=createRoot(container);
const App = () => {
  return (
    <>
    
<h1 className='heading_style'>
  🎰 Welcome to {" "}
  <span style={{fontweight: "bold"}}>Slot machine game </span>
</h1>
<SlotM /> 
</>
)
}
export default App;
