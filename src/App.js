import "./App.css";

import Usa from "./Component/Usa";
import London from "./Component/London.js";
import Dubai from "./Component/Dubai.js";
import India from "./Component/India.js";
import { Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import WorldNews from "./Component/WorldNews";
import WeatherApp from "./Component/WeatherApp";
import SearchImage from "./Component/SearchImage";

function App() {
  return (
    <>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/usa" element={<Usa />} />
          <Route path="/london" element={<London />} />
          <Route path="/dubai" element={<Dubai />} />
          <Route path="/india" element={<India />} />
          <Route path="/world" element={<WorldNews />} />
          <Route path="/weather" element={<WeatherApp />} />
          <Route path="search" element={<SearchImage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
