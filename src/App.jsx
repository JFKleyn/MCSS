import { HomePage } from "./pages/home/HomePage";
import { AboutPage } from "./pages/about/AboutPage";
import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";
import { MachinePage } from "./pages/machines/MachinePage";

function App() {
  return (
    <>
      <ScrollToTop />
      
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="machines" element={<MachinePage />} />
      </Routes>
    </>
  );
}

export default App;