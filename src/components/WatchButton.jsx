import PropTypes from "prop-types";

const WatchButton = ({ title, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded bg-slate-900 px-3 py-1 font-semibold uppercase text-slate-500 ring-slate-600 transition hover:ring-2 sm:mx-2 sm:w-auto"
    >
      {title}
    </button>
  );
};

WatchButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default WatchButton;
