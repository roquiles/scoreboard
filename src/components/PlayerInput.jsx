import { useCallback, useContext, useState } from "react";
import ScoreboardContext from "../context/ScoreboardContext";

const PlayerInput = () => {
  const [newPlayer, setNewPlayer] = useState({ name: "", score: 0 });
  const { addPlayers } = useContext(ScoreboardContext);

  const addNewPlayer = useCallback(() => {
    addPlayers(newPlayer);
    setNewPlayer({ ...newPlayer, name: "" });
  }, [newPlayer, addPlayers]);

  return (
    <div className="col-span-4 gap-4 rounded-b-lg border-t-2 bg-slate-900 p-4 sm:flex">
      <input
        type="text"
        name="player"
        id="player"
        placeholder="PLAYER NAME"
        className="h-10 w-full grow rounded bg-slate-700 px-2 text-slate-50 sm:h-8 sm:w-auto"
        onChange={(e) => setNewPlayer({ ...newPlayer, name: e.target.value })}
        value={newPlayer.name}
      />
      <button
        type="submit"
        className="mt-4 h-10 w-full rounded bg-slate-800 px-4 font-bold uppercase  text-slate-400 ring-slate-600 transition hover:ring-2 sm:mt-auto sm:h-8 sm:w-auto"
        disabled={newPlayer.name.length <= 0}
        onClick={addNewPlayer}
      >
        Add player
      </button>
    </div>
  );
};

export default PlayerInput;
