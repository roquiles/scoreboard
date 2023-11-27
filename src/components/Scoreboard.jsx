import Header from "./Header";
import StopWatch from "./StopWatch";
import Player from "./Player";
import PlayerInput from "./PlayerInput";
import { useCallback, useState } from "react";

const Scoreboard = () => {
  const [players, setPlayers] = useState([]);

  const addPlayers = useCallback((newPlayer) => {
    setPlayers((oldPlayers) => [...oldPlayers, newPlayer]);
  }, []);

  return (
    <div className="m-auto grid w-fit grid-cols-4 uppercase tracking-wider">
      <Header />
      <StopWatch />
      {players.map(({ name, score }) => (
        <Player key={name} name={name} score={score} />
      ))}
      <PlayerInput onAddPlayer={addPlayers} />
    </div>
  );
};

export default Scoreboard;
