import { useCallback, useMemo, useState } from "react";
import ScoreboardContext from "./ScoreboardContext";
import { PropTypes } from "prop-types";

const ScoreboardProvider = ({ children }) => {
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

  const updateScore = useCallback(
    (e, playerName) => {
      const playersToUpdate = [...players];
      const operation = e.target.name;

      const updatedPlayers = playersToUpdate.reduce((_, currentPlayer) => {
        if (currentPlayer.name === playerName) {
          if (operation === "increase") {
            currentPlayer.score++;
          } else {
            currentPlayer.score--;
          }
        }
        return playersToUpdate;
      }, playersToUpdate);

      setPlayers(updatedPlayers);
    },
    [players],
  );

  const contextValues = useMemo(
    () => ({
      addPlayers,
      deletePlayers,
      updateScore,
      players,
      showErrorModal,
      setShowErrorModal,
    }),
    [
      addPlayers,
      deletePlayers,
      updateScore,
      players,
      setShowErrorModal,
      showErrorModal,
    ],
  );

  return (
    <ScoreboardContext.Provider value={contextValues}>
      {children}
    </ScoreboardContext.Provider>
  );
};

ScoreboardProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScoreboardProvider;
