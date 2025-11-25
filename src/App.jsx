import { useState } from "react";
import "./App.css";

const PLAYER_1 = "⚪";
const PLAYER_2 = "⚫";

export default function Game() {
  const [cellStatus, setCellStatus] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [history, setHistory] = useState([Array(9).fill(null)]);

  function handleClick(i) {
    if (cellStatus[i] || calcWinner(cellStatus)) {
      return;
    }
    console.log("Cell clicked: ", i);
    const newCellStatus = cellStatus.slice();
    if (isXNext) {
      newCellStatus[i] = PLAYER_1;
    } else {
      newCellStatus[i] = PLAYER_2;
    }
    setIsXNext(!isXNext);
    setHistory(history.concat([newCellStatus]));
    setCellStatus(newCellStatus);
    if (calcWinner(newCellStatus)) {
      setIsGameOver(true);
    }
  }

  function calcWinner(cellStatus) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        cellStatus[a] &&
        cellStatus[a] == cellStatus[b] &&
        cellStatus[a] == cellStatus[c]
      ) {
        return cellStatus[a];
      }
    }
    return null;
  }

  if (isGameOver) {
    return (
      <>
        <Board CellStatus={cellStatus} handleCellClick={handleClick} />
        <div className="game-info">
          <div>Game Over! Winner: {calcWinner(cellStatus)}</div>
        </div>
      </>
    );
  }

  return (
    <>
      <Board CellStatus={cellStatus} handleCellClick={handleClick} />
      <div className="game-info">
        <div>Next player: {isXNext ? PLAYER_1 : PLAYER_2}</div>
      </div>
    </>
  );
}

function Board({ CellStatus, handleCellClick }) {
  return (
    <>
      <div className="board-row">
        <Cell value={CellStatus[0]} onCellClick={() => handleCellClick(0)} />
        <Cell value={CellStatus[1]} onCellClick={() => handleCellClick(1)} />
        <Cell value={CellStatus[2]} onCellClick={() => handleCellClick(2)} />
      </div>
      <div className="board-row">
        <Cell value={CellStatus[3]} onCellClick={() => handleCellClick(3)} />
        <Cell value={CellStatus[4]} onCellClick={() => handleCellClick(4)} />
        <Cell value={CellStatus[5]} onCellClick={() => handleCellClick(5)} />
      </div>
      <div className="board-row">
        <Cell value={CellStatus[6]} onCellClick={() => handleCellClick(6)} />
        <Cell value={CellStatus[7]} onCellClick={() => handleCellClick(7)} />
        <Cell value={CellStatus[8]} onCellClick={() => handleCellClick(8)} />
      </div>
    </>
  );
}

function Cell({ value, onCellClick }) {
  return (
    <button className="cell" onClick={onCellClick}>
      {value}
    </button>
  );
}
