import WatchButton from "./WatchButton";

const StopWatch = () => {
  return (
    <div className="col-span-1 rounded-tr-lg bg-slate-800 p-4 text-center">
      <span className="block text-xs text-slate-500">Stopwatch</span>
      <span className="mb-2 block text-2xl text-slate-50">0</span>
      <WatchButton title="Start" />
      <WatchButton title="Reset" />
    </div>
  );
};

export default StopWatch;
