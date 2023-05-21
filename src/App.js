import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [turn, setTurn] = useState('X')
  const [board, setBoard] = useState(Array(9).fill(''))
  const [winner, setWinner] = useState('')

  //Check if there is a winner after 3 turns
  useEffect(() => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
      [0, 4, 8], [2, 4, 6] // diagonal
    ]

    let turnsPlayed = 0;
    board.forEach((square) => {
      if (square !== ''){
        turnsPlayed += 1;
      }
    })

    if(turnsPlayed >= 3) {
      if (turn === "X") {
        //Check O for winner after their turn
        winningCombos.forEach((combo) => {
          if (board[combo[0]] === 'O' && board[combo[1]] === 'O' && board[combo[2]] === 'O') {
            setWinner('O wins!')
          }
        })
      }else {
        //Check X for winner after their turm
        winningCombos.forEach((combo) => {
          if (board[combo[0]] === 'X' && board[combo[1]] === 'X' && board[combo[2]] === 'X') {
            setWinner('X wins!')
          }else if(turnsPlayed === 9) {
            setWinner('Tie game!')
          }
        })
      }
    }

  }, [board, turn])
  
  function setPlay(boardSquare, playersTurn) {
    if (board[boardSquare] === '') {
      board[boardSquare] = playersTurn
      setBoard(board)
      setTurn(playersTurn === 'X' ? 'O' : 'X')
    }
  }

  function restartGame() {
    setBoard(Array(9).fill(''))
    setWinner('')
    setTurn('X')
  }

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <h2>It is {turn}'s turn</h2>
      <div className="WinnerWinnerChickenDinner">
        <button className={winner !== '' ? '' : 'hidden'} onClick={() => restartGame()}>Restart</button>
        <h1>{winner}</h1>
      </div>
      <div className="game-board">

        <div className="board-row">
          <div onClick={() => winner === '' ? setPlay(0, turn) : null } id="0" className="board-square">
            <h1 className="XO" >{board[0]}</h1>
          </div>
          <div onClick={() => winner === '' ? setPlay(1, turn) : null } id="1" className="board-square">
            <h1 className="XO">{board[1]}</h1>
          </div>
          <div onClick={() => winner === '' ? setPlay(2, turn) : null } id="2" className="board-square">
            <h1 className="XO">{board[2]}</h1> 
          </div>
        </div>

        <div className="board-row">
          <div onClick={() => winner === '' ? setPlay(3, turn) : null } id="3" className="board-square">
            <h1 className="XO">{board[3]}</h1>
          </div>
          <div onClick={() => winner === '' ? setPlay(4, turn) : null } id="4" className="board-square">
            <h1 className="XO">{board[4]}</h1>
          </div>
          <div onClick={() => winner === '' ? setPlay(5, turn) : null } id="5" className="board-square">
            <h1 className="XO">{board[5]}</h1>
          </div>
        </div>

        <div className="board-row">
          <div onClick={() => winner === '' ? setPlay(6, turn) : null } id="6" className="board-square">
            <h1 className="XO">{board[6]}</h1>
          </div>
          <div onClick={() => winner === '' ? setPlay(7, turn) : null } id="7" className="board-square">
            <h1 className="XO">{board[7]}</h1>
          </div>
          <div onClick={() => winner === '' ? setPlay(8, turn) : null } id="8" className="board-square">
            <h1 className="XO">{board[8]}</h1>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
