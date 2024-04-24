import { useNavigate } from "react-router-dom";
import logo from "../../assets/frame.png";
import favorite from "../../assets/favorite.svg";
import notification from "../../assets/notification.svg";
import photo from "../../assets/photo.png";

import "./header.scss";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="container">
        <a onClick={() => navigate("/")} className="left">
          <img src={logo} alt="logo" />
        </a>
        <div className="right">
          <a onClick={() => {}}>
            <img src={favorite} />
          </a>
          <a onClick={() => {}}>
            <img src={notification} />
          </a>
          <img className="user-photo" src={photo} />
          <span>Kfjdfe</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
