import "./Admin.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutAdmin } from "../../services/auth";
import { getAllMachines, deleteMachine } from "../../services/machines";

export function Admin() {
  const navigate = useNavigate();

  const [machines, setMachines] = useState([]);

  useEffect(() => {
    async function loadMachines() {
      const data = await getAllMachines();
console.log("Admin machines:", data);
setMachines(data);
    }

    loadMachines();
  }, []);

  async function handleLogout() {
    await logoutAdmin();
    navigate("/login");
  }

  async function handleDelete(machineId) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this machine?",
    );

    if (!confirmed) return;

    try {
      await deleteMachine(machineId);

      setMachines((prevMachines) =>
        prevMachines.filter((machine) => machine.id !== machineId),
      );
    } catch (error) {
      console.error(error);
      alert("Failed to delete machine.");
    }
  }

  return (
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
          {machines.length === 0 ? (
            <p>No machines loaded yet.</p>
          ) : (
            <div className="admin-machine-list">
              {machines.map((machine) => (
                <div className="admin-machine-row" key={machine.id}>
  <div className="admin-machine-thumb">
    {machine.machine_images?.[0] ? (
      <img
        src={machine.machine_images[0].image_url}
        alt={machine.machine_images[0].alt_text || machine.title}
      />
    ) : (
      <span>No Image</span>
    )}
  </div>

  <div>
    <h3>{machine.title}</h3>
    <div className="admin-machine-meta">
      <span>{machine.category}</span>
      <span>{machine.status}</span>
    </div>
  </div>

  <div className="admin-machine-counts">
    <span>{machine.machine_images?.length || 0} Images</span>
    <span>{machine.machine_specs?.length || 0} Specs</span>
  </div>

  <div className="admin-actions">
    <button>Edit</button>
    <button
      className="delete-button"
      onClick={() => handleDelete(machine.id)}
    >
      Delete
    </button>
  </div>
</div>
              ))}
            </div>
          )}
        </div>

        <button className="admin-logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </section>
  );
}
