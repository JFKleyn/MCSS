import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMachine } from "../../services/machines";
import { MachineForm } from "../../components/MachineForm";

export function EditMachine() {
  const { machineId } = useParams();

  const [machine, setMachine] = useState(null);

  useEffect(() => {
    async function loadMachine() {
      const data = await getMachine(machineId);
      setMachine(data);
    }

    loadMachine();
  }, [machineId]);

  if (!machine) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="add-machine-page">
      <div className="add-machine-container">
        <Link to="/admin" className="back-button">
          ← Back
        </Link>

        <div className="add-machine-header">
          <p>ADMIN PORTAL</p>
          <h1>Edit Machine</h1>
        </div>

        <MachineForm
          mode="edit"
          machine={machine}
        />
      </div>
    </section>
  );
}