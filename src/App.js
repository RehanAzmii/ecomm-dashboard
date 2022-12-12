import "./App.css";

import { Route, Routes, useNavigate } from "react-router-dom";

import Login from "./Component/form/Login";
import Register from "./Component/form/Register";
import { useEffect, useState } from "react";
import { getCookie } from "./Component/Library/Cookies";
import { DATACONSTANT } from "./Component/constant/data.constant";
import Main from "./Component/pages/Main";
import India from "./Component/pages/India";
import WorldNews from "./Component/pages/WorldNews";
import WeatherApp from "./Component/pages/WeatherApp";

function App() {
  const navigate = useNavigate();
  const [page, setPage] = useState(true);
  const x = getCookie(DATACONSTANT.SETCOOKIE);
  useEffect(() => {
    if (!x) {
      setPage(false);
      return navigate("/");
    } else {
      setPage(true);
      return navigate("/");
    }
  }, [page, x]);
  return (
    <div>
      {page ? (
        <>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/india" element={<India />} />
            <Route path="/world" element={<WorldNews />} />
            <Route path="/weather" element={<WeatherApp />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/" element={<Register />} />
          </Routes>
        </>
      )}
    </div>
  );
}
export default App;
