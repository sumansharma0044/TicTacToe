import logo from './logo.svg';
import './App.css';
import Square from "./components/Square.jsx";
import { useEffect, useState } from 'react';

const initialState = ["","","","","","","","",""]

function App() {
  const [gameState, setGameState] = useState(initialState);
  const [steps, setSteps] = useState(0);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    checkForWinner(gameState)
  },[gameState])

  const onClickHandler = (event) =>{
    console.log('event>>',event.target.id);
    if(!event.target.innerText){
      const copyOfGameState = [...gameState]
      copyOfGameState[event.target.id] = steps % 2 === 0 ? "X" : "0" ;
      setSteps(steps + 1)
      setGameState(copyOfGameState);
    }
  };

  const restartGame = () => {
    setGameState(initialState);
    setSteps(0)
    setWinner(null);
  };

  const checkForWinner = (gameState) => {
    const winningCondition = [
      [0,1,2], [3,4,5], [6,7,8], [0,3,6],[1,4,7],[0,4,8],[2,4,6],[2,5,8]
    ]

    winningCondition.forEach(condition => {
      const [a,b,c] = condition;

      if(gameState[a] && gameState[a] === gameState[b] && gameState[b] === gameState[c]){
        setWinner(gameState[a]);
        console.log("Winner>>", gameState[a]);
      }
    })
  }

  return (
    <>
      <div className='container'>
            <div className='left-wrapper'>
                <div className='left-text'>Let's Play the Tic-Tac-Toe Game!</div>
                <div className='button' onClick={restartGame}>Start a new Game</div>
            </div>

            {!winner && steps < 9 && (<div className="right-wrapper">
                <div className="players">
                    <div className={`player ${steps % 2 === 0 && "player-X"}`}>player-X</div>
                    <div className={`player ${steps % 2 === 1 && "player-O"}`}>Player-O</div>
                </div>

                <div className="game-wrapper" onClick={onClickHandler}>
                  <Square id={0} state={gameState[0]} className = 'border-right-bottom' />
                  <Square id={1} state={gameState[1]} className = 'border-right-bottom'/>
                  <Square id={2} state={gameState[2]} className = 'border-bottom'/>
                  <Square id={3} state={gameState[3]} className = 'border-right-bottom'/>
                  <Square id={4} state={gameState[4]} className = 'border-right-bottom'/>
                  <Square id={5} state={gameState[5]} className = 'border-bottom'/>
                  <Square id={6} state={gameState[6]} className = 'border-right'/>
                  <Square id={7} state={gameState[7]} className = 'border-right'/>
                  <Square id={8} state={gameState[8]}/>
                </div>
            </div>)}

            {(winner || steps === 9) && (
            <div className='winner-wrapper'>
              <div className='winner-text'>{steps=== 9 && !winner ?"Its Draw":`${winner} Win!`}</div>
            </div>)}
        </div>  
    </>
  );
}

export default App;
