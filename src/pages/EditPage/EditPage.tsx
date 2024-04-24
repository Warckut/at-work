import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import photo from "../../assets/photo.png";
import {
  selectLoading,
  selectUsers,
} from "../../app/features/users/usersSlice";
import { RootState } from "../../app/store";
import TextInput from "../../components/TextInput/TextInput";
import CategoryList from "../../components/Category/Category";
import Button from "../../components/Button/Button";
import "./edit-page.scss";

export const EditPage = () => {
  const { userId } = useParams();
  const user = useSelector((state: RootState) =>
    selectUsers.selectById(state, Number(userId))
  );
  const loading = useSelector(selectLoading);

  if (loading) return <h2>loading...</h2>;
  if (!user) return <h1>404</h1>;

  return (
    <div className="edit-page">
      <div className="preview">
        <img src={photo} alt="photo" />
        <div className="content">
          <h3>Данные профиля</h3>
          <CategoryList
            values={["Рабочее пространство", "Приватность", "Безопасность"]}
          />
        </div>
      </div>
      <div className="data">
        <h2>Данные профиля</h2>
        <form>
          <TextInput value={user.name} label="Имя" />
          <TextInput value={user.username} label="Никнейм" />
          <TextInput value={user.email} label="Email" />
          <TextInput value={user?.address?.city} label="Город" />
          <TextInput value={user.phone} label="Телефон" />
          <TextInput value={user?.company?.name} label="Название компании" />
          <Button name="Сохранить" onSubmit={() => {}} />
        </form>
      </div>
    </div>
  );
};
