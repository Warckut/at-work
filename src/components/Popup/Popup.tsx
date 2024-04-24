import access from "../../assets/access.png";
import "./popup.scss";

interface PopupProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

const Popup = ({ isOpen, message, onClose }: PopupProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup">
      <div className="popup__content">
        <img src={access} alt="access" />
        <span className="popup__message">{message}</span>
        <button className="popup__close-button" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Popup;
