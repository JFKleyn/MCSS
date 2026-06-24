import { HomePage } from "./pages/home/HomePage";
import { AboutPage } from "./pages/about/AboutPage";
import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { MachinePage } from "./pages/machines/MachinePage";
import { ToolsPage } from "./pages/tools/ToolsPage";
import "./App.css";
import { ContactPage } from "./pages/contact/ContactPage";
import { ServicesPage } from "./pages/services/ServicesPage";

function App() {
  return (
    <>
      <ScrollToTop />
      
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="machines" element={<MachinePage />} />
        <Route path="tools" element={<ToolsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="services" element={<ServicesPage />} />
      </Routes>
    </>
  );
}

export default App;