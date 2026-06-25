import { useState } from "react";
import "./AddMachine.css";
import { ArrowIcon } from "../../components/SVGIcons";
import { useNavigate } from "react-router";
import { createMachine, createMachineSpecs, createMachineImages } from "../../services/machines";
import { supabase } from "../../services/supabase";
import { uploadMachineImage } from "../../services/storage";

export function AddMachine() {
  const [machine, setMachine] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    status: "available",
  });

  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
  event.preventDefault();

  setSaving(true);
  setErrorMessage("");

  try {
    const {
  data: { session },
} = await supabase.auth.getSession();

console.log("Current session:", session);
    const newMachine = await createMachine({
      title: machine.title,
      description: machine.description,
      price: machine.price ? Number(machine.price) : null,
      category: machine.category,
      status: machine.status,
    });

    console.log("Created machine:", newMachine);

await createMachineSpecs(newMachine.id, specs);

const uploadedImageUrls = [];

for (const image of images) {
  const imageUrl = await uploadMachineImage(image, newMachine.id);
  uploadedImageUrls.push(imageUrl);
}

await createMachineImages(newMachine.id, uploadedImageUrls);
console.log("Saved image URLs:", uploadedImageUrls);

navigate("/admin");
  } catch (error) {
  console.error("Save machine error:", error);
  setErrorMessage(error.message || "Failed to save machine.");
  } finally {
    setSaving(false);
  }
}

  function handleChange(event) {
    const { name, value } = event.target;
    

    setMachine((prevMachine) => ({
      ...prevMachine,
      [name]: value,
    }));
  }

  const [specs, setSpecs] = useState([
  { label: "", value: "" }
]);

const [images, setImages] = useState([]);

function handleSpecChange(index, field, value) {
  const updatedSpecs = [...specs];
  updatedSpecs[index][field] = value;
  setSpecs(updatedSpecs);
}

function addSpec() {
  setSpecs([...specs, { label: "", value: "" }]);
}

function removeSpec(index) {
  setSpecs(specs.filter((_, specIndex) => specIndex !== index));
}

function handleImageChange(event) {
  const selectedFiles = Array.from(event.target.files);

  setImages((prevImages) => [
    ...prevImages,
    ...selectedFiles,
  ]);
}

function removeImage(indexToRemove) {
  setImages((prevImages) =>
    prevImages.filter((_, index) => index !== indexToRemove)
  );
}

  return (
    <section className="add-machine-page">
      <div className="add-machine-container">
        <div className="add-machine-header">
          <p>ADMIN PORTAL</p>
          <h1>Add Machine</h1>
        </div>

        <form className="add-machine-form" onSubmit={handleSubmit}>
          <button className="back-button"><p>Back</p><ArrowIcon/> </button>
          {errorMessage && <div className="form-error">{errorMessage}</div>}
          <label>Machine Title</label>
          <input
            name="title"
            value={machine.title}
            onChange={handleChange}
            placeholder="e.g. Leadwell LTC 25i"
          />

          <label>Description</label>
          <textarea
            name="description"
            value={machine.description}
            onChange={handleChange}
            placeholder="Short description of the machine"
          />

          <label>Price</label>
          <input
            name="price"
            type="number"
            value={machine.price}
            onChange={handleChange}
            placeholder="550000"
          />

          <label>Category</label>
          <select
            name="category"
            value={machine.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            <option value="CNC Machines">CNC Machines</option>
            <option value="Fabrication">Fabrication</option>
            <option value="Conventional Machines">Conventional Machines</option>
            <option value="Specialized Machines">Specialized Machines</option>
          </select>

          <label>Status</label>
          <select name="status" value={machine.status} onChange={handleChange}>
            <option value="available">Available</option>
            <option value="sold">Sold</option>
            <option value="hidden">Hidden</option>
          </select>

          <div className="specs-section">
  <h2>Machine Specifications</h2>

  {specs.map((spec, index) => (
    <div className="spec-row" key={index}>
      <input
        value={spec.label}
        onChange={(event) =>
          handleSpecChange(index, "label", event.target.value)
        }
        placeholder="Spec name e.g. Max Swing"
      />

      <input
        value={spec.value}
        onChange={(event) =>
          handleSpecChange(index, "value", event.target.value)
        }
        placeholder="Value e.g. 670mm"
      />

      <button type="button" onClick={() => removeSpec(index)}>
        Remove
      </button>
    </div>
  ))}

  <button type="button" className="secondary-button" onClick={addSpec}>
    + Add Specification
  </button>
</div>

<div className="images-section">
  <h2>Machine Images</h2>

  <input
    type="file"
    accept="image/*"
    multiple
    onChange={handleImageChange}
  />

  <div className="image-preview-grid">
  {images.map((image, index) => (
    <div className="image-preview" key={index}>
      <button
        type="button"
        className="remove-image-button"
        onClick={() => removeImage(index)}
      >
        ×
      </button>

      <img
        src={URL.createObjectURL(image)}
        alt={`Preview ${index + 1}`}
      />
    </div>
  ))}
</div>
</div>
          <button type="submit" className="save-machine-button" disabled={saving}>
  {saving ? "Saving..." : "Save Machine"}
</button>
        </form>
      </div>
    </section>
  );
}
