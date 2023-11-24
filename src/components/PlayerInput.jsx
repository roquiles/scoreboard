const PlayerInput = () => {
  return (
    <div className="col-span-4 flex gap-4 rounded-b-lg border-t-2 bg-slate-900 p-4">
      <input
        type="text"
        name="player"
        id="player"
        placeholder="PLAYER NAME"
        className="h-8 grow rounded bg-slate-700 px-2 text-slate-50"
      />
      <button
        type="submit"
        className="rounded bg-slate-700 px-4 font-bold uppercase text-slate-400  ring-slate-600 transition hover:ring-2"
      >
        Add player
      </button>
    </div>
  );
};

export default PlayerInput;
