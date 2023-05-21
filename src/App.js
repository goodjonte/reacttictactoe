import './App.css';
import { useState, useEffect } from 'react';

function App() {

  

  const [turn, setTurn] = useState('X')
  const [board, setBoard] = useState(Array(9).fill(''))

  //Check if there is a winner after every turn
  useEffect(() => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
      [0, 4, 8], [2, 4, 6] // diagonal
    ]

    if (turn === "X") {
      //Check O for winner after their turn
      winningCombos.forEach((combo) => {
        if (board[combo[0]] === 'O' && board[combo[1]] === 'O' && board[combo[2]] === 'O') {
          alert('O wins!')
        }
      })
    }else {
      //Check X for winner after their turm
      winningCombos.forEach((combo) => {
        if (board[combo[0]] === 'X' && board[combo[1]] === 'X' && board[combo[2]] === 'X') {
          alert('X wins!')
        }
      })
    }

  }, [board, turn])
  
  function setPlay(boardSquare, playersTurn) {
    if (board[boardSquare] === '') {
      board[boardSquare] = playersTurn
      setBoard(board)
      setTurn(playersTurn === 'X' ? 'O' : 'X')
    }
  }


  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <h2>It is {turn}'s turn</h2>
      <div className="game">

        <div className="board-row">
          <div onClick={() => setPlay(0, turn) } id="0" className="board-square">
            <h1 className="XO" >{board[0]}</h1>
          </div>
          <div onClick={() => setPlay(1, turn) } id="1" className="board-square">
            <h1 className="XO">{board[1]}</h1>
          </div>
          <div onClick={() => setPlay(2, turn) } id="2" className="board-square">
            <h1 className="XO">{board[2]}</h1> 
          </div>
        </div>

        <div className="board-row">
          <div onClick={() => setPlay(3, turn) } id="3" className="board-square">
            <h1 className="XO">{board[3]}</h1>
          </div>
          <div onClick={() => setPlay(4, turn) } id="4" className="board-square">
            <h1 className="XO">{board[4]}</h1>
          </div>
          <div onClick={() => setPlay(5, turn) } id="5" className="board-square">
            <h1 className="XO">{board[5]}</h1>
          </div>
        </div>

        <div className="board-row">
          <div onClick={() => setPlay(6, turn) } id="6" className="board-square">
            <h1 className="XO">{board[6]}</h1>
          </div>
          <div onClick={() => setPlay(7, turn) } id="7" className="board-square">
            <h1 className="XO">{board[7]}</h1>
          </div>
          <div onClick={() => setPlay(8, turn) } id="8" className="board-square">
            <h1 className="XO">{board[8]}</h1>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
