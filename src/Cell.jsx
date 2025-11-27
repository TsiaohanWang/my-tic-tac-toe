import "./App.css";

export function Cell({ value, onCellClick }) {
  return (
    <button className="cell" onClick={onCellClick}>
      {value}
    </button>
  );
}

export function CellWithLBorder({ value, onCellClick }) {
  return (
    <button className="cell cell-l-border" onClick={onCellClick}>
      {value}
    </button>
  );
}

export function CellWithRBorder({ value, onCellClick }) {
  return (
    <button className="cell cell-r-border" onClick={onCellClick}>
      {value}
    </button>
  );
}

export function CellWithTBorder({ value, onCellClick }) {
  return (
    <button className="cell cell-t-border" onClick={onCellClick}>
      {value}
    </button>
  );
}

export function CellWithBBorder({ value, onCellClick }) {
  return (
    <button className="cell cell-b-border" onClick={onCellClick}>
      {value}
    </button>
  );
}

export function CellWithLTBorder({ value, onCellClick }) {
  return (
    <button className="cell cell-l-border cell-t-border" onClick={onCellClick}>
      {value}
    </button>
  );
}

export function CellWithRBBorder({ value, onCellClick }) {
  return (
    <button className="cell cell-r-border cell-b-border" onClick={onCellClick}>
      {value}
    </button>
  );
}

export function CellWithRTBorder({ value, onCellClick }) {
  return (
    <button className="cell cell-r-border cell-t-border" onClick={onCellClick}>
      {value}
    </button>
  );
}

export function CellWithLBBorder({ value, onCellClick }) {
  return (
    <button className="cell cell-l-border cell-b-border" onClick={onCellClick}>
      {value}
    </button>
  );
}