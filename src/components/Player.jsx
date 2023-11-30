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
      } col-span-4 grid grid-cols-3 border-t-2 sm:grid-cols-4`}
    >
      <span className="col-span-2 overflow-hidden text-ellipsis whitespace-nowrap bg-slate-800 px-3 py-3 font-semibold text-slate-50 sm:col-span-3 sm:px-8 sm:py-5 sm:text-xl">
        <button
          title="Delete player"
          className="mr-2 rounded-full border-2 px-2 transition hover:border-red-500 hover:text-red-500 sm:mr-4 sm:text-lg"
          onClick={() => setIsDeleting(true)}
        >
          X
        </button>
        <span>{name}</span>
      </span>
      <div className="flex items-center justify-center bg-slate-800 text-slate-50">
        <button
          className="h-full bg-red-500 px-3 text-lg font-bold transition hover:opacity-90 sm:px-6 sm:py-5"
          onClick={(e) => updateScore(e, name)}
          name="decrease"
        >
          -
        </button>
        <span className="grow text-center text-lg sm:text-2xl">{score}</span>
        <button
          className="h-full bg-green-500 px-2 text-lg font-bold transition hover:opacity-90 sm:px-5"
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
