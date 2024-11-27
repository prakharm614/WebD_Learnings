import React from 'react'

const Cards = (props) => {
  return (
    <div>
      <input type='text' onChange={(e)=>props.setName(e.target.value)}/>
      <p>Entered value is : {props.name}</p>
    </div>
  )
}

export default Cards
