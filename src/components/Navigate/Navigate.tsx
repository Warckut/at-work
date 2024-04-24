import { useLocation, useNavigate } from "react-router-dom";
import goBack from "../../assets/backarrow.svg";
import "./navigate.scss";

const Navigate = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === '/') return;

  return (
    <div className="navigate container">
      <a onClick={() => navigate(-1)}>
        <img src={goBack} alt="back" />
        <span>Назад </span>
      </a>
    </div>
  );
};

export default Navigate;
