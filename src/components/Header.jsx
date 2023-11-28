import { useContext } from "react";
import ScoreboardContext from "../context/ScoreboardContext";

const Header = () => {
  const { players } = useContext(ScoreboardContext);
  const totalPoints = players
    .map((player) => player.score)
    .reduce((sum, score) => {
      return sum + score;
    }, 0);

  return (
    <div className="col-span-3 flex items-center rounded-tl-lg bg-slate-900 p-4">
      <div className="pr-10">
        <span className="block text-sm text-slate-500">
          Players:{" "}
          <span className="text-lg text-slate-50">{players.length}</span>
        </span>
        <span className="block text-sm text-slate-500">
          Total points:{" "}
          <span className="text-lg text-slate-50">{totalPoints}</span>
        </span>
      </div>
      <h1 className="font-display grow px-8 text-center text-2xl text-slate-300">
        Scoreboard
      </h1>
    </div>
  );
};

export default Header;
