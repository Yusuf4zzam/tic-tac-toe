import { useState } from "react";

let initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ symbol, onSelected }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectedBox(rowIndex, colIndex) {
    setGameBoard((prev) => {
      const newGameBoard = [...prev.map((e) => [...e])];
      newGameBoard[rowIndex][colIndex] = symbol;
      return newGameBoard;
    });

    onSelected();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbolIndex, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectedBox(rowIndex, colIndex)}>
                  {symbolIndex}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
