import { PropTypes } from "prop-types";
import { useCallback, useEffect, useState } from "react";

const ErrorModal = ({ onClose }) => {
  const [hideModal, setHideModal] = useState(false);

  const closeModal = useCallback(() => {
    setHideModal(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    let id;
    if (hideModal) {
      id = setInterval(closeModal, 1000);
    }

    return () => clearInterval(id);
  }, [hideModal, closeModal]);

  return (
    <div
      className={`${
        hideModal ? "animate-hideModal" : "animate-showModal"
      } fixed self-center justify-self-center rounded bg-slate-50 shadow-md`}
    >
      <div className="flex flex-col items-center p-4">
        <img
          src="https://100dayscss.com/codepen/alert.png"
          width="44"
          height="38"
        />
        <h1 className="font-bold">Oh, no!</h1>
        <p>This player name currently exists</p>
        <p>Try another one</p>
      </div>
      <div>
        <button
          className="w-full rounded-b bg-red-500 py-2 uppercase text-slate-50 transition hover:opacity-90"
          onClick={() => setHideModal(true)}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

ErrorModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ErrorModal;
