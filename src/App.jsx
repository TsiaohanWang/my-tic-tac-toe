import { useState } from "react";
import "./App.css";
import { Board } from "./Board.jsx";

const PLAYER_1 = "❌";
const PLAYER_2 = "⭕";

export function DefaultGame() {
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
    const isBoardFull = newCellStatus.every((cell) => cell != null);
    if (isBoardFull) {
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
        <div className="game">
          <Board CellStatus={cellStatus} handleCellClick={handleClick} />
          <div className="game-info">
            <div>Game Over! Winner: {calcWinner(cellStatus)}</div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="game">
        <Board CellStatus={cellStatus} handleCellClick={handleClick} />
        <div className="game-info">
          <div>Next player: {isXNext ? PLAYER_1 : PLAYER_2}</div>
        </div>
      </div>
    </>
  );
}

export function InfinityGame() {
  const [cellStatus, setCellStatus] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [XMoveQueue, setXMoveQueue] = useState([]);
  const [OMoveQueue, setOMoveQueue] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [history, setHistory] = useState([Array(9).fill(null)]);

  function handleClick(i) {
    if (cellStatus[i] || calcWinner(cellStatus)) {
      return;
    }
    console.log("Cell clicked: ", i);

    const newCellStatus = cellStatus.slice();
    const currentMoveQueue = isXNext ? XMoveQueue.slice() : OMoveQueue.slice();
    currentMoveQueue.push(i);
    if (currentMoveQueue.length > 3) {
      const removedCell = currentMoveQueue.shift();
      newCellStatus[removedCell] = null;
    }
    newCellStatus[i] = isXNext ? PLAYER_1 : PLAYER_2;

    if (isXNext) {
      setXMoveQueue(currentMoveQueue);
    } else {
      setOMoveQueue(currentMoveQueue);
    }
    setCellStatus(newCellStatus);
    setIsXNext(!isXNext);
    setHistory(history.concat([newCellStatus]));

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
        <div className="game">
          <Board CellStatus={cellStatus} handleCellClick={handleClick} />
          <div className="game-info">
            <div>Game Over! Winner: {calcWinner(cellStatus)}</div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="game">
        <Board CellStatus={cellStatus} handleCellClick={handleClick} />
        <div className="game-info">
          <div>Next player: {isXNext ? PLAYER_1 : PLAYER_2}</div>
        </div>
      </div>
    </>
  );
}
