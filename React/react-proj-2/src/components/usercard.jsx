import React from 'react'
import gj from '../assets/gj.jpeg'
import './usercard.css';
const Usercard = (props) => {
  return (
    <div className='usercontainer'>
      <p id='username'>
       {props.username}
      </p>
      <img id='userimage' src={gj} alt="myphoto" />
      <p id='userdes'>{props.desc}</p>
    </div>
  )
}

export default Usercard
