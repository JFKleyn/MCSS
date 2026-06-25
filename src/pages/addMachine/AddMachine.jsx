import { Link } from "react-router-dom";
import { MachineForm } from "../../components/MachineForm";
import "./AddMachine.css"

export function AddMachine() {
  return (
    <section className="add-machine-page">
      <div className="add-machine-container">
        <Link to="/admin" className="back-button">
          ← Back
        </Link>

        <div className="add-machine-header">
          <p>ADMIN PORTAL</p>
          <h1>Add Machine</h1>
        </div>

        <MachineForm />
      </div>
    </section>
  );
}