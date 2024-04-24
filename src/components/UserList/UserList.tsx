import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { selectLoading } from "../../app/features/users/usersSlice";
import { User } from "../../app/features/users/types";
import Card from "../Card/Card";
import "./user-list.scss";

interface UserListProps {
  users: User[];
  type: "Active" | "Archive";
}

export const UserList = ({ users, type }: UserListProps) => {
  const loading = useSelector(selectLoading);

  if (loading) return <div>loading...</div>;
  if (users.length === 0) return;

  return (
    <div className="list">
      <h2>{type === "Active" ? "Активные" : "В архиве"}</h2>
      <div>
        {users.map(({ id, address, username, company }) => (
          <Card
            key={id}
            id={id}
            username={username}
            city={address.city}
            company={company.name}
          />
        ))}
      </div>
    </div>
  );
};
