import Players from "./Players";
import GameBoard from "./GameBoard";

import { useState } from "react";

function Game() {
  const [currentPlayer, setCurrentPlayer] = useState("X");

  function handlePlayerChange() {
    setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol className="highlight-player" id="players">
          <Players
            initialName="Player 1"
            PlayerSymbol="X"
            isActive={currentPlayer === "X"}
          />
          <Players
            initialName="Player 2"
            PlayerSymbol="O"
            isActive={currentPlayer === "O"}
          />
        </ol>

        <GameBoard onSelected={handlePlayerChange} symbol={currentPlayer} />
      </div>
    </main>
  );
}

export default Game;
