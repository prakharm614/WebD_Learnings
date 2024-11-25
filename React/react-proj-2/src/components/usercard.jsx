import React from 'react'
import gj from '../assets/gj.jpeg'
const usercard = () => {
  return (
    <div className='usercontainer'>
      <p id='username'>
        Prakhar Mishra
      </p>
      <img id='userimage' src={gj} alt="myphoto" />
      <p id='userdes'>Description about me</p>
    </div>
  )
}

export default usercard
