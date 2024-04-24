import "./card.scss";
import photo from "../../assets/photo.png";
import Dropdown from "../Dropdown/Dropdown";
import { useNavigate } from "react-router-dom";

interface CardProps {
  id: number;
  username: string;
  city: string;
  company: string;
}

const Card = ({ id, username, city, company }: CardProps) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <a onClick={() => navigate(`/${id}`)}>
        <img src={photo} alt="photo" />
      </a>
      <div className="card-content">
        <div className="card-header">
          <a onClick={() => navigate(`/${id}`)} className="card-user-info">
            <h4 className="card-user-name">{username}</h4>
            <p className="card-company-name">{company}</p>
          </a>
          <Dropdown />
        </div>
        <p>{city}</p>
      </div>
    </div>
  );
};

export default Card;
