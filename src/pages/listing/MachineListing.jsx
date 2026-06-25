import { useEffect, useState } from "react";
import { getMachines } from "../../services/machines";
import "./MachineListing.css";

export function MachineListing() {
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    async function loadMachines() {
      try {
        const data = await getMachines();
        console.log("Machines:", data);
        setMachines(data);
      } catch (error) {
        console.error("Error loading machines:", error);
      }
    }

    loadMachines();
  }, []);

  return (
  <section className="machine-listing-section">
    <div className="machine-listing-header">
      <h1>Available Machines ({machines.length})</h1>
      <p>
        Browse our current inventory of CNC lathes. Contact us for detailed
        specifications and viewing arrangements.
      </p>
    </div>

    <div className="machine-listing-grid">
      {machines.map((machine) => (
        <article className="machine-card" key={machine.id}>
          <div className="machine-card-image">
            {machine.machine_images?.[0] ? (
              <img
                src={machine.machine_images[0].image_url}
                alt={machine.machine_images[0].alt_text || machine.title}
              />
            ) : (
              <div className="machine-card-placeholder">No Image</div>
            )}
          </div>

          <div className="machine-card-content">
            <h2>{machine.title}</h2>
            <p>{machine.description}</p>

            <h4>Measurements & Specifications</h4>

            <div className="machine-spec-grid">
              {machine.machine_specs?.map((spec) => (
                <div className="machine-spec-card" key={spec.id}>
                  <span>{spec.label}</span>
                  <strong>{spec.value}</strong>
                </div>
              ))}
            </div>

            <div className="machine-card-footer">
              <div>
                <span>Price:</span>
                <h3>
                  R{" "}
                  {Number(machine.price).toLocaleString("en-ZA", {
                    maximumFractionDigits: 0,
                  })}
                </h3>
              </div>

              <button>Enquire Now</button>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);
}