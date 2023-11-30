import WatchButton from "./WatchButton";
import useTimer from "../hooks/useTimer";

const StopWatch = () => {
  const { resetTimer, startTimer, timer } = useTimer();

  return (
    <div className="col-span-1 rounded-tr-lg bg-slate-800 p-4 text-center">
      <span className="block text-xs text-slate-500">Stopwatch</span>
      <span className="mb-2 block text-2xl text-slate-50">{timer}</span>
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-0">
        <WatchButton title="Start" onClick={startTimer} />
        <WatchButton title="Reset" onClick={resetTimer} />
      </div>
    </div>
  );
};

export default StopWatch;
