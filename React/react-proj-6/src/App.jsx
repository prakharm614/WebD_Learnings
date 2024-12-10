import React from 'react'

const App = () => {
  function handleclick(){
      alert("I am Clicked");
  }
  function mouse{
    alert("Doont come over the para");
  }
  return (
    <div onMouseOver={mouse} style={{border:"2px solid blue"}}>
      <p>
        I am a Para
      </p>
      <button onClick={handleclick}>
        Click Me
      </button>
    </div>
  )
}

export default App
