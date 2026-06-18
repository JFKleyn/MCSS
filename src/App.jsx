import { HomePage } from "./pages/home/HomePage";
import { AboutPage } from "./pages/about/AboutPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;