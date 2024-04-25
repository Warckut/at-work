import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { EditPage } from "./pages/EditPage/EditPage";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./app/store";
import { useEffect } from "react";
import { fetchUsers } from "./app/features/thunks/fetchUsers";
import Header from "./components/Header/Header";
import Navigate from "./components/Navigate/Navigate";
import { selectLoading } from "./app/features/users/usersSlice";
import Loading from "./components/Loading/Loading";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="container">
        <Navigate />
        {loading ? (
          <Loading />
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:userId" element={<EditPage />} />
          </Routes>
        )}
      </div>
    </>
  );
}

export default App;
