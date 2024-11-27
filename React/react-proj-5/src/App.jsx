import { useState } from 'react';
import React from 'react'
import Cards from './compo/Cards'
const App = () => {
  // Here we'll Create state
  // Manage state
  //Change state
  // sync state to all children
  const [name,setName]=useState('');
  return (
    <div>
      <Cards title="card1" name={name} setName={setName} ></Cards>
      
      <Cards title="card2" name={name} setName={setName} ></Cards>
    </div>
  )
}

export default App
