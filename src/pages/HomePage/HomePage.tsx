import { useSelector } from "react-redux";
import { UserList } from "../../components/UserList/UserList";
import { selectUsers } from "../../app/features/users/usersSlice";

export const HomePage = () => {
  const users = useSelector(selectUsers.selectAll);

  return (
    <>
      <UserList type="Active" users={users.filter((user) => !user.archived)} />
      <UserList type="Archive" users={users.filter((user) => user.archived)} />
    </>
  );
};
