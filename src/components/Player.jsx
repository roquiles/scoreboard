import { PropTypes } from "prop-types";
import { useContext, useState, useEffect } from "react";
import ScoreboardContext from "../context/ScoreboardContext";

const Player = ({ name, score }) => {
  const { deletePlayers, updateScore } = useContext(ScoreboardContext);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let id;
    if (isDeleting) {
      id = setInterval(() => deletePlayers(name), 600);
    }

    return () => clearInterval(id);
  }, [isDeleting, deletePlayers, name]);

  return (
    <div
      className={`${
        isDeleting ? "animate-delete" : "animate-insert"
      } col-span-4 grid grid-cols-4 border-t-2`}
    >
      <span className="col-span-3 bg-slate-800 py-5 pl-8 text-xl font-semibold text-slate-50">
        <button
          title="Delete player"
          className="mr-4 rounded-full border-2 px-2 text-lg transition hover:border-red-500 hover:text-red-500"
          onClick={() => setIsDeleting(true)}
        >
          X
        </button>
        {name}
      </span>
      <div className="flex items-center justify-center bg-slate-800 text-slate-50">
        <button
          className="h-full bg-red-500 px-6 py-5 text-lg font-bold transition hover:opacity-90"
          onClick={(e) => updateScore(e, name)}
          name="decrease"
        >
          -
        </button>
        <span className="grow text-center text-2xl">{score}</span>
        <button
          className="h-full bg-green-500 px-5 text-lg font-bold transition hover:opacity-90"
          onClick={(e) => {
            updateScore(e, name);
          }}
          name="increase"
        >
          +
        </button>
      </div>
    </div>
  );
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default Player;
