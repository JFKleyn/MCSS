import { HomePage } from "./pages/home/HomePage";
import { AboutPage } from "./pages/about/AboutPage";
import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { MachinePage } from "./pages/machines/MachinePage";
import { ToolsPage } from "./pages/tools/ToolsPage";
import "./App.css";

function App() {
  return (
    <>
      <ScrollToTop />
      
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="machines" element={<MachinePage />} />
        <Route path="tools" element={<ToolsPage />} />
      </Routes>
    </>
  );
}

export default App;