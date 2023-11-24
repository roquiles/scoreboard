import PropTypes from "prop-types";

const WatchButton = ({ title, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mx-2 rounded bg-slate-900 px-3 py-1 font-semibold uppercase text-slate-500 ring-slate-600 transition hover:ring-2"
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
