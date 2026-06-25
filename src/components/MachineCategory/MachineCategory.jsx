import "./MachineCategory.css";
import { MachineImageSlider } from "../MachineImageSlider/MachineImageSlider";

export function MachineCategory({ title, machines }) {
  if (machines.length === 0) return null;

  return (
    <section className="machine-category-section">
      <div className="machine-section-header">
        <h2>
          {title} ({machines.length})
        </h2>
        <p>
          Browse our current inventory of {title.toLowerCase()}. Contact us for
          detailed specifications and viewing arrangements.
        </p>
      </div>

      <div className="machine-listing-grid">
        {machines.map((machine) => (
          <article className="machine-card" key={machine.id}>
            <div className="machine-card-image">
              <MachineImageSlider
                images={machine.machine_images}
                title={machine.title}
              />
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
