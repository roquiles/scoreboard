import { PropTypes } from "prop-types";

const Player = ({ name, score }) => {
  return (
    <div className="col-span-4 grid grid-cols-4 border-t-2">
      <span className="col-span-3 bg-slate-800 py-5 pl-8 text-xl font-semibold text-slate-50">
        {name}
      </span>
      <div className="flex items-center justify-center bg-slate-800 text-slate-50">
        <button className="py-5text-lg h-full bg-red-500 px-6 font-bold transition hover:opacity-90">
          -
        </button>
        <span className="grow text-center text-2xl">{score}</span>
        <button className="h-full bg-green-500 px-5 text-lg font-bold transition hover:opacity-90">
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
