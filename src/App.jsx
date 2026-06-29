import { HomePage } from "./pages/home/HomePage";
import { AboutPage } from "./pages/about/AboutPage";
import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { MachineListing } from "./pages/listing/MachineListing";
import { ToolsPage } from "./pages/tools/ToolsPage";
import "./App.css";
import { ContactPage } from "./pages/contact/ContactPage";
import { ServicesPage } from "./pages/services/ServicesPage";
import { Login } from "./pages/login/Login";
import { Admin } from "./pages/admin/Admin";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AddMachine } from "./pages/addMachine/AddMachine";
import { EditMachine } from "./pages/editMachine/EditMachine";
import { BevContact } from "./pages/contact/BevContact";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="machine-listing" element={<MachineListing />} />
        <Route path="tools" element={<ToolsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="bev-contact" element={<BevContact />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/add-machine"
          element={
            <ProtectedRoute>
              <AddMachine />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/edit/:machineId"
          element={
            <ProtectedRoute>
              <EditMachine />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
