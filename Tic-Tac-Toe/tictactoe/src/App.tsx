import './App.css';
import Block from './compo/block';
import { useState } from 'react';
function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [current, setcurrent] = useState("X");

  const [gameOver, setGameOver] = useState(false); // Track if the game is over


  const check = ( state : any[])=>{
    const win=
    [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for(let i=0;i<win.length;i++){
      const [a,b,c]=win[i];
      if( state[a] != null && state[a]===state[b] && state[a]===state[c]) return true;
    }
    return false;
  }

  const handle = (index:number) =>{

    if (gameOver) return; // Prevent further moves if the game is over

    const copy = Array.from(state);
    if(copy[index] != null ) return;
    copy[index]=current;
    
    setState(copy);
    
    //checking for wining

    const winner = check(copy);
  setState(copy); // Update the state first to render the winning move
  if (winner) {
    setTimeout(() => {
      alert(`${current} won the game`);
    }, 0); // Delay the alert slightly to ensure rendering happens first

    setGameOver(true); 
    return;
  }
    setcurrent(current === "X" ? "O" : "X")
   
  };
  return (

    <div className="board">
      
    <h1 className="title">Tic-Tac-Toe Game</h1>
      <div className="row">
        <Block onClick={()=>handle(0)} value={state[0]} />
        <Block onClick={()=>handle(1)} value={state[1]}/>
        <Block onClick={()=>handle(2)} value={state[2]} />
      </div>
      <div className="row">
        <Block onClick={()=>handle(3)} value={state[3]} />
        <Block onClick={()=>handle(4)} value={state[4]} />
        <Block onClick={()=>handle(5)}  value={state[5]} />
      </div>
      <div className="row">
        <Block onClick={()=>handle(6)} value={state[6]} />
        <Block onClick={()=>handle(7)}  value={state[7]}/>
        <Block onClick={()=>handle(8)}  value={state[8]}/>
        
      </div>
    </div>
  );
}

export default App;
