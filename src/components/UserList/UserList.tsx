import { User } from "../../app/features/users/types";
import Card from "../Card/Card";
import "./user-list.scss";

interface UserListProps {
  users: User[];
  type: "Active" | "Archive";
}

export const UserList = ({ users, type }: UserListProps) => {
  if (users.length === 0) return;

  return (
    <div className="list">
      <h2 className="border-bottom">
        {type === "Active" ? "Активные" : "В архиве"}
      </h2>
      <div>
        {users.map(({ id, address, username, company, archived }) => (
          <Card
            key={id}
            id={id}
            username={username}
            city={address.city}
            company={company.name}
            archived={archived}
          />
        ))}
      </div>
    </div>
  );
};
