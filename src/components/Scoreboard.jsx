import Header from "./Header";
import StopWatch from "./StopWatch";
import Player from "./Player";
import PlayerInput from "./PlayerInput";
import { useCallback, useState } from "react";
import ErrorModal from "./ErrorModal";

const Scoreboard = () => {
  const [players, setPlayers] = useState([]);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const isPlayerNameRepeated = useCallback(
    (playerName) => !!players.filter((p) => playerName === p.name).length,
    [players],
  );

  const addPlayers = useCallback(
    (newPlayer) => {
      if (isPlayerNameRepeated(newPlayer.name)) {
        setShowErrorModal(true);
        return;
      }

      setPlayers((oldPlayers) => [...oldPlayers, newPlayer]);
    },
    [isPlayerNameRepeated],
  );

  const deletePlayers = useCallback(
    (playerName) => {
      const updatedPlayers = players.filter((p) => p.name !== playerName);

      setPlayers(updatedPlayers);
    },
    [players],
  );

  return (
    <div className="m-auto grid w-fit grid-cols-4 uppercase tracking-wider">
      <Header />
      <StopWatch />
      {players.map(({ name, score }) => (
        <Player
          key={name}
          name={name}
          score={score}
          onDeletePlayer={deletePlayers}
        />
      ))}
      <PlayerInput onAddPlayer={addPlayers} />

      {showErrorModal && (
        <ErrorModal onClose={() => setShowErrorModal(false)} />
      )}
    </div>
  );
};

export default Scoreboard;
