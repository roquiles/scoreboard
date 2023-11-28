import Scoreboard from "./components/Scoreboard";
import ScoreboardProvider from "./context/ScoreboardProvider";

export default function App() {
  return (
    <div className="flex h-screen w-screen">
      <ScoreboardProvider>
        <Scoreboard />
      </ScoreboardProvider>
    </div>
  );
}
