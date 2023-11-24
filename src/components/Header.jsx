const Header = () => {
  return (
    <div className="col-span-3 flex items-center rounded-tl-lg bg-slate-900 p-4">
      <div className="pr-10">
        <span className="block text-sm text-slate-500">
          Players: <span className="text-lg text-slate-50">10</span>
        </span>
        <span className="block text-sm text-slate-500">
          Total points: <span className="text-lg text-slate-50">200</span>
        </span>
      </div>
      <h1 className="font-display grow px-8 text-center text-2xl text-slate-300">
        Scoreboard
      </h1>
    </div>
  );
};

export default Header;