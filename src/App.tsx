import { Route, Routes  } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { EditPage } from "./pages/EditPage/EditPage";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./app/store";
import { useEffect } from "react";
import { fetchUsers } from "./app/features/thunks/fetchUsers";
import Header from "./components/Header/Header";
import Navigate from "./components/Navigate/Navigate";


function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Navigate />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:userId" element={<EditPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
