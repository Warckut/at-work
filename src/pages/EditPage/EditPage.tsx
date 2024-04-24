import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import photo from "../../assets/photo.png";
import {
  selectLoading,
  selectUsers,
  update,
} from "../../app/features/users/usersSlice";
import { AppDispatch, RootState } from "../../app/store";
import TextInput from "../../components/TextInput/TextInput";
import CategoryList from "../../components/Category/Category";
import Button from "../../components/Button/Button";
import "./edit-page.scss";
import { useEffect, useState } from "react";
import Popup from "../../components/Popup/Popup";

interface Inputs {
  name: string;
  username: string;
  email: string;
  city: string;
  phone: string;
  companyName: string;
}

export const EditPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { userId } = useParams();
  const { handleSubmit, control, setValue } = useForm<Inputs>();
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const user = useSelector((state: RootState) =>
    selectUsers.selectById(state, Number(userId))
  );

  const loading = useSelector(selectLoading);

  const onSubmit = (data: Inputs) => {
    console.log('asds')
    dispatch(
      update({
        id: user.id,
        updated: {
          name: data.name,
          username: data.username,
          email: data.email,
          address: { ...user.address, city: data.city },
          phone: data.phone,
          company: { ...user.company, name: data.companyName },
        },
      })
    );
    openPopup();
  };

  useEffect(() => {
    if (!user) return;
    setValue("name", user.name);
    setValue("username", user.username);
    setValue("email", user.email);
    setValue("city", user.address.city);
    setValue("phone", user.phone);
    setValue("companyName", user.company.name);
  }, [setValue, user]);

  if (loading) return <h2>loading...</h2>;
  if (!user) return <h1>404</h1>;

  return (
    <>
      <Popup
        isOpen={isPopupOpen}
        message="Изминения сохранены!"
        onClose={closePopup}
      />
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              name="name"
              control={control}
              rules={{ required: true }}
              label="Имя"
              defaultValue=""
            />
            <TextInput
              name="username"
              control={control}
              rules={{ required: true }}
              label="Никнейм"
              defaultValue=""
            />
            <TextInput
              name="email"
              control={control}
              rules={{ required: true }}
              label="Email"
              defaultValue=""
            />
            <TextInput
              name="city"
              control={control}
              rules={{ required: true }}
              label="Город"
              defaultValue=""
            />
            <TextInput
              name="phone"
              control={control}
              rules={{ required: true }}
              label="Телефон"
              defaultValue=""
            />
            <TextInput
              name="companyName"
              control={control}
              rules={{ required: true }}
              label="Название компании"
              defaultValue=""
            />
            <Button name="Сохранить" onSubmit={() => {}} />
          </form>
        </div>
      </div>
    </>
  );
};
