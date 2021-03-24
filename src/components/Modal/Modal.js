import "./modal.css";
import IconCloseButton from "./icons/IconCloseButton";

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="z-100 relative p-8">
          <button
            className="absolute top-3 right-3 border-none bg-transparent cursor-pointer hover:opacity-70 focus:outline-none"
            onClick={() => setActive(false)}
          >
            <IconCloseButton />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
