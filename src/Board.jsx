import { Cell, CellWithLBorder, CellWithRBorder, CellWithTBorder, CellWithBBorder, CellWithLBBorder, CellWithLTBorder, CellWithRBBorder, CellWithRTBorder } from "./Cell.jsx";
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

export function UltimateBoard({ CellStatus, handleCellClick }) {
  return (
    <div className="board">
      <div className="board-row">
        <Cell value={CellStatus[0][0]} onCellClick={() => handleCellClick(0, 0)} />
        <Cell value={CellStatus[0][1]} onCellClick={() => handleCellClick(0, 1)} />
        <CellWithRBorder value={CellStatus[0][2]} onCellClick={() => handleCellClick(0, 2)} />
        <CellWithLBorder value={CellStatus[1][0]} onCellClick={() => handleCellClick(1, 0)} />
        <Cell value={CellStatus[1][1]} onCellClick={() => handleCellClick(1, 1)} />
        <CellWithRBorder value={CellStatus[1][2]} onCellClick={() => handleCellClick(1, 2)} />
        <CellWithLBorder value={CellStatus[2][0]} onCellClick={() => handleCellClick(2, 0)} />
        <Cell value={CellStatus[2][1]} onCellClick={() => handleCellClick(2, 1)} />
        <Cell value={CellStatus[2][2]} onCellClick={() => handleCellClick(2, 2)} />
      </div>
      <div className="board-row">
        <Cell value={CellStatus[0][3]} onCellClick={() => handleCellClick(0, 3)} />
        <Cell value={CellStatus[0][4]} onCellClick={() => handleCellClick(0, 4)} />
        <CellWithRBorder value={CellStatus[0][5]} onCellClick={() => handleCellClick(0, 5)} />
        <CellWithLBorder value={CellStatus[1][3]} onCellClick={() => handleCellClick(1, 3)} />
        <Cell value={CellStatus[1][4]} onCellClick={() => handleCellClick(1, 4)} />
        <CellWithRBorder value={CellStatus[1][5]} onCellClick={() => handleCellClick(1, 5)} />
        <CellWithLBorder value={CellStatus[2][3]} onCellClick={() => handleCellClick(2, 3)} />
        <Cell value={CellStatus[2][4]} onCellClick={() => handleCellClick(2, 4)} />
        <Cell value={CellStatus[2][5]} onCellClick={() => handleCellClick(2, 5)} />
      </div>
      <div className="board-row">
        <CellWithBBorder value={CellStatus[0][6]} onCellClick={() => handleCellClick(0, 6)} />
        <CellWithBBorder value={CellStatus[0][7]} onCellClick={() => handleCellClick(0, 7)} />
        <CellWithRBBorder value={CellStatus[0][8]} onCellClick={() => handleCellClick(0, 8)} />
        <CellWithLBBorder value={CellStatus[1][6]} onCellClick={() => handleCellClick(1, 6)} />
        <CellWithBBorder value={CellStatus[1][7]} onCellClick={() => handleCellClick(1, 7)} />
        <CellWithRBBorder value={CellStatus[1][8]} onCellClick={() => handleCellClick(1, 8)} />
        <CellWithLBBorder value={CellStatus[2][6]} onCellClick={() => handleCellClick(2, 6)} />
        <CellWithBBorder value={CellStatus[2][7]} onCellClick={() => handleCellClick(2, 7)} />
        <CellWithBBorder value={CellStatus[2][8]} onCellClick={() => handleCellClick(2, 8)} />
      </div>
      <div className="board-row">
        <CellWithTBorder value={CellStatus[3][0]} onCellClick={() => handleCellClick(3, 0)} />
        <CellWithTBorder value={CellStatus[3][1]} onCellClick={() => handleCellClick(3, 1)} />
        <CellWithRTBorder value={CellStatus[3][2]} onCellClick={() => handleCellClick(3, 2)} />
        <CellWithLTBorder value={CellStatus[4][0]} onCellClick={() => handleCellClick(4, 0)} />
        <CellWithTBorder value={CellStatus[4][1]} onCellClick={() => handleCellClick(4, 1)} />
        <CellWithRTBorder value={CellStatus[4][2]} onCellClick={() => handleCellClick(4, 2)} />
        <CellWithLTBorder value={CellStatus[5][0]} onCellClick={() => handleCellClick(5, 0)} />
        <CellWithTBorder value={CellStatus[5][1]} onCellClick={() => handleCellClick(5, 1)} />
        <CellWithTBorder value={CellStatus[5][2]} onCellClick={() => handleCellClick(5, 2)} />
      </div>
      <div className="board-row">
        <Cell value={CellStatus[3][3]} onCellClick={() => handleCellClick(3, 3)} />
        <Cell value={CellStatus[3][4]} onCellClick={() => handleCellClick(3, 4)} />
        <CellWithRBorder value={CellStatus[3][5]} onCellClick={() => handleCellClick(3, 5)} />
        <CellWithLBorder value={CellStatus[4][3]} onCellClick={() => handleCellClick(4, 3)} />
        <Cell value={CellStatus[4][4]} onCellClick={() => handleCellClick(4, 4)} />
        <CellWithRBorder value={CellStatus[4][5]} onCellClick={() => handleCellClick(4, 5)} />
        <CellWithLBorder value={CellStatus[5][3]} onCellClick={() => handleCellClick(5, 3)} />
        <Cell value={CellStatus[5][4]} onCellClick={() => handleCellClick(5, 4)} />
        <Cell value={CellStatus[5][5]} onCellClick={() => handleCellClick(5, 5)} />
      </div>
      <div className="board-row">
        <CellWithBBorder value={CellStatus[3][6]} onCellClick={() => handleCellClick(3, 6)} />
        <CellWithBBorder value={CellStatus[3][7]} onCellClick={() => handleCellClick(3, 7)} />
        <CellWithRBBorder value={CellStatus[3][8]} onCellClick={() => handleCellClick(3, 8)} />
        <CellWithLBBorder value={CellStatus[4][6]} onCellClick={() => handleCellClick(4, 6)} />
        <CellWithBBorder value={CellStatus[4][7]} onCellClick={() => handleCellClick(4, 7)} />
        <CellWithRBBorder value={CellStatus[4][8]} onCellClick={() => handleCellClick(4, 8)} />
        <CellWithLBBorder value={CellStatus[5][6]} onCellClick={() => handleCellClick(5, 6)} />
        <CellWithBBorder value={CellStatus[5][7]} onCellClick={() => handleCellClick(5, 7)} />
        <CellWithBBorder value={CellStatus[5][8]} onCellClick={() => handleCellClick(5, 8)} />
      </div>
      <div className="board-row">
        <CellWithTBorder value={CellStatus[6][0]} onCellClick={() => handleCellClick(6, 0)} />
        <CellWithTBorder value={CellStatus[6][1]} onCellClick={() => handleCellClick(6, 1)} />
        <CellWithRTBorder value={CellStatus[6][2]} onCellClick={() => handleCellClick(6, 2)} />
        <CellWithLTBorder value={CellStatus[7][0]} onCellClick={() => handleCellClick(7, 0)} />
        <CellWithTBorder value={CellStatus[7][1]} onCellClick={() => handleCellClick(7, 1)} />
        <CellWithRTBorder value={CellStatus[7][2]} onCellClick={() => handleCellClick(7, 2)} />
        <CellWithLTBorder value={CellStatus[8][0]} onCellClick={() => handleCellClick(8, 0)} />
        <CellWithTBorder value={CellStatus[8][1]} onCellClick={() => handleCellClick(8, 1)} />
        <CellWithTBorder value={CellStatus[8][2]} onCellClick={() => handleCellClick(8, 2)} />
      </div>
      <div className="board-row">
        <Cell value={CellStatus[6][3]} onCellClick={() => handleCellClick(6, 3)} />
        <Cell value={CellStatus[6][4]} onCellClick={() => handleCellClick(6, 4)} />
        <CellWithRBorder value={CellStatus[6][5]} onCellClick={() => handleCellClick(6, 5)} />
        <CellWithLBorder value={CellStatus[7][3]} onCellClick={() => handleCellClick(7, 3)} />
        <Cell value={CellStatus[7][4]} onCellClick={() => handleCellClick(7, 4)} />
        <CellWithRBorder value={CellStatus[7][5]} onCellClick={() => handleCellClick(7, 5)} />
        <CellWithLBorder value={CellStatus[8][3]} onCellClick={() => handleCellClick(8, 3)} />
        <Cell value={CellStatus[8][4]} onCellClick={() => handleCellClick(8, 4)} />
        <Cell value={CellStatus[8][5]} onCellClick={() => handleCellClick(8, 5)} />
      </div>
      <div className="board-row">
        <Cell value={CellStatus[6][6]} onCellClick={() => handleCellClick(6, 6)} />
        <Cell value={CellStatus[6][7]} onCellClick={() => handleCellClick(6, 7)} />
        <CellWithRBorder value={CellStatus[6][8]} onCellClick={() => handleCellClick(6, 8)} />
        <CellWithLBorder value={CellStatus[7][6]} onCellClick={() => handleCellClick(7, 6)} />
        <Cell value={CellStatus[7][7]} onCellClick={() => handleCellClick(7, 7)} />
        <CellWithRBorder value={CellStatus[7][8]} onCellClick={() => handleCellClick(7, 8)} />
        <CellWithLBorder value={CellStatus[8][6]} onCellClick={() => handleCellClick(8, 6)} />
        <Cell value={CellStatus[8][7]} onCellClick={() => handleCellClick(8, 7)} />
        <Cell value={CellStatus[8][8]} onCellClick={() => handleCellClick(8, 8)} />
      </div>
    </div>
  );
}