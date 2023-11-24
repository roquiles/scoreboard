import Header from "./components/Header";
import Player from "./components/Player";
import PlayerInput from "./components/PlayerInput";
import StopWatch from "./components/StopWatch";

export default function App() {
  return (
    <div className="flex h-screen w-screen">
      <div className="m-auto grid w-fit grid-cols-4 uppercase tracking-wider">
        <Header />
        <StopWatch />
        <Player name="Roberta Quiles" score={0} />
        <Player name="César Costa" score={0} />
        <PlayerInput />
      </div>
    </div>
  );
}
