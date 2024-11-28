import { useState } from 'react';
import React from 'react'
import Cards from './compo/Cards'
import Logout from './compo/Logout'

const App = () => {
  // Here we'll Create state
  // Manage state
  //Change state
  // sync state to all children
  //const [name,setName]=useState('');

  const[isLoggedIn,setLoggedIn]=useState(true);
   if(isLoggedIn){
    return(<Logout/>)
   }
   else return(
    <Cards/>
   )

//   return (
    
// //     <div>
// // {
// // /*       
// //       <Cards title="card1" name={name} setName={setName} ></Cards>
      
// //       <Cards title="card2" name={name} setName={setName} ></Cards> */}
// //     </div>
//   )
}

export default App
