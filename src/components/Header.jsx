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
    <div className="col-span-2 flex flex-col rounded-tl-lg bg-slate-900 p-4 sm:col-span-3 sm:flex-row-reverse sm:items-center">
      <h1 className="font-display grow px-8 text-center text-xl text-slate-300 sm:text-2xl">
        Scoreboard
      </h1>
      <div className="text-center sm:pr-10 sm:text-start">
        <span className="block text-sm text-slate-500">
          Players:{" "}
          <span className="text-lg text-slate-50">{players.length}</span>
        </span>
        <span className="block text-sm text-slate-500">
          Total points:{" "}
          <span className="text-lg text-slate-50">{totalPoints}</span>
        </span>
      </div>
    </div>
  );
};

export default Header;
