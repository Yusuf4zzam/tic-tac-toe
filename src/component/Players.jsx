import { useState } from "react";

function Players({ initialName, PlayerSymbol, isActive }) {
  let [PlayerName, setPlayerName] = useState(initialName);
  let [editing, setEditing] = useState(false);

  function handleUserInput(e) {
    const trimValue = e.target.value.trim();
    if (trimValue.length === 0) {
      setPlayerName(PlayerName);
    } else {
      setPlayerName(e.target.value);
    }
  }

  return (
    <li className={isActive ? "active" : null}>
      <span className="player">
        {!editing ? (
          <span className="player-name">{PlayerName}</span>
        ) : (
          <input
            onChange={handleUserInput}
            type="text"
            defaultValue={PlayerName}
          />
        )}

        <span className="player-symbol">{PlayerSymbol}</span>
      </span>
      <button onClick={() => setEditing((edit) => !edit)} className="edit">
        {editing ? "Save" : "Edit"}
      </button>
    </li>
  );
}

export default Players;
