import Header from "./Header";
import StopWatch from "./StopWatch";
import PlayerInput from "./PlayerInput";
import { useContext } from "react";
import ErrorModal from "./ErrorModal";
import ScoreboardContext from "../context/ScoreboardContext";
import Player from "./Player";

const Scoreboard = () => {
  const { showErrorModal, setShowErrorModal, players } =
    useContext(ScoreboardContext);

  return (
    <div className="m-auto grid w-fit grid-cols-4 uppercase tracking-wider">
      <Header />
      <StopWatch />

      {players.map(({ name, score }) => (
        <Player key={name} name={name} score={score} />
      ))}
      <PlayerInput />

      {showErrorModal && (
        <ErrorModal onClose={() => setShowErrorModal(false)} />
      )}
    </div>
  );
};

export default Scoreboard;
