import { PropTypes } from "prop-types";
import { useCallback, useState } from "react";

const PlayerInput = ({ onAddPlayer }) => {
  const [newPlayer, setNewPlayer] = useState({ name: "", score: 0 });

  const addNewPlayer = useCallback(() => {
    onAddPlayer(newPlayer);
    setNewPlayer({ ...newPlayer, name: "" });
  }, [newPlayer, onAddPlayer]);

  return (
    <div className="col-span-4 flex gap-4 rounded-b-lg border-t-2 bg-slate-900 p-4">
      <input
        type="text"
        name="player"
        id="player"
        placeholder="PLAYER NAME"
        className="h-8 grow rounded bg-slate-700 px-2 text-slate-50"
        onChange={(e) => setNewPlayer({ ...newPlayer, name: e.target.value })}
        value={newPlayer.name}
      />
      <button
        type="submit"
        className="rounded bg-slate-700 px-4 font-bold uppercase text-slate-400  ring-slate-600 transition hover:ring-2"
        disabled={newPlayer.name.length <= 0}
        onClick={addNewPlayer}
      >
        Add player
      </button>
    </div>
  );
};

PlayerInput.propTypes = {
  onAddPlayer: PropTypes.func.isRequired,
};

export default PlayerInput;
