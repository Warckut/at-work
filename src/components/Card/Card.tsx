import "./card.scss";
import photo from "../../assets/photo.png";
import Dropdown from "../Dropdown/Dropdown";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { remove, update } from "../../app/features/users/usersSlice";

interface CardProps {
  id: number;
  username: string;
  city: string;
  company: string;
  archived?: boolean;
}

const Card = ({ id, username, city, company, archived }: CardProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const actions = archived
    ? [
        {
          label: "Активировать",
          action: () => {
            dispatch(update({ id, updated: { archived: false } }));
          },
        },
      ]
    : [
        {
          label: "Редактировать",
          action: () => {
            navigate(`/${id}`);
          },
        },
        {
          label: "Архивировать",
          action: () => {
            dispatch(update({ id, updated: { archived: true } }));
          },
        },
        {
          label: "Скрыть",
          action: () => {
            dispatch(remove(id));
          },
        },
      ];

  return (
    <div className="card">
      <img className={archived ? "archived" : ""} src={photo} alt="photo" />
      <div className="card-content">
        <div className="card-header">
          <div className="card-user-info">
            <h4 className="card-user-name">{username}</h4>
            <p className="card-company-name">{company}</p>
          </div>
          <Dropdown actions={actions} />
        </div>
        <p>{city}</p>
      </div>
    </div>
  );
};

export default Card;
