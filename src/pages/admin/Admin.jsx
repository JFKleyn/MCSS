import "./Admin.css";
import { useNavigate } from "react-router";
import { logoutAdmin } from "../../services/auth";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";

export function Admin() {
  const navigate = useNavigate();

  async function handleLogout() {
    await logoutAdmin();
    navigate("/login");
  }

  return (
    <>
      <Header />
      <section className="admin-page">
        <div className="admin-container">
          <div className="admin-header">
            <div>
              <p>ADMIN PORTAL</p>
              <h1>Machine Listings</h1>
            </div>

            <Link to="/admin/add-machine" className="admin-add-button">
  + Add Machine
</Link>
          </div>

          <div className="admin-card">
            <p>No machines loaded yet.</p>
          </div>
          <button className="admin-logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </section>
    </>
  );
}
