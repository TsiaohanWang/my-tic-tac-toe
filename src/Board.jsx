import { Cell } from "./Cell.jsx";
import "./App.css";

export function Board({ CellStatus, handleCellClick }) {
  return (
    <div className="board">
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
    </div>
  );
}
