import React from 'react'
import { useState } from 'react'
import Cardd from '../public/compo/Cardd'
import Button from '../public/compo/Button'

const App = () => {
 const [count,setCount] = useState(0);
 function handleclick(){
  setCount(count+1);
 }
  return (
    <div>
      {/* // passing props children function */}
      <Button handleclick={handleclick} text="Hit ME !!"  />
      <h1> {count} </h1>
      <Button />
      



      <Cardd name="myname">  
      <h1>this is children</h1>
      <p>this is also children</p>
      </Cardd>
    </div>
  )
}

export default App
