import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createMachine,
  createMachineSpecs,
  createMachineImages,
  deleteMachineImage,
  updateMachine,
  replaceMachineSpecs,
} from "../services/machines";
import { uploadMachineImage } from "../services/storage";
import "./MachineForm.css";

export function MachineForm({ mode = "add", machine: initialMachine = null }) {
  const navigate = useNavigate();

  const [machine, setMachine] = useState(
    initialMachine || {
      title: "",
      description: "",
      price: "",
      category: "",
      status: "available",
    },
  );

  const [specs, setSpecs] = useState(
    initialMachine?.machine_specs || [{ label: "", value: "" }],
  );
  const [existingImages, setExistingImages] = useState(
    initialMachine?.machine_images || [],
  );

  const [images, setImages] = useState([]);
  const [saving, setSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setMachine((prevMachine) => ({
      ...prevMachine,
      [name]: value,
    }));
  }

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

    setImages((prevImages) => [...prevImages, ...selectedFiles]);
  }

  function removeImage(indexToRemove) {
    setImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove),
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setSaving(true);
    setErrorMessage("");

    try {
      let savedMachine;

      if (mode === "add") {
        savedMachine = await createMachine({
          title: machine.title,
          description: machine.description,
          price: machine.price ? Number(machine.price) : null,
          category: machine.category,
          status: machine.status,
        });

        await createMachineSpecs(savedMachine.id, specs);
      }

      if (mode === "edit") {
        savedMachine = await updateMachine(initialMachine.id, {
          title: machine.title,
          description: machine.description,
          price: machine.price ? Number(machine.price) : null,
          category: machine.category,
          status: machine.status,
        });
        await replaceMachineSpecs(savedMachine.id, specs);
      }

      const uploadedImageUrls = [];

      for (const image of images) {
        const imageUrl = await uploadMachineImage(image, savedMachine.id);
        uploadedImageUrls.push(imageUrl);
      }

      await createMachineImages(savedMachine.id, uploadedImageUrls);

      navigate("/admin");
    } catch (error) {
      console.error("Save machine error:", error);
      setErrorMessage(error.message || "Failed to save machine.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDeleteExistingImage(imageId) {
    const confirmed = window.confirm("Remove this image?");
    if (!confirmed) return;

    try {
      await deleteMachineImage(imageId);

      setExistingImages((prevImages) =>
        prevImages.filter((image) => image.id !== imageId),
      );
    } catch (error) {
      console.error(error);
      alert("Failed to remove image.");
    }
  }

  return (
    <form className="machine-form" onSubmit={handleSubmit}>
      {errorMessage && <div className="form-error">{errorMessage}</div>}

      <label>Machine Title</label>
      <input
        name="title"
        value={machine.title}
        onChange={handleChange}
        placeholder="e.g. Leadwell LTC 25i"
        required
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
          {existingImages.map((image) => (
            <div className="image-preview" key={image.id}>
              <button
                type="button"
                className="remove-image-button"
                onClick={() => handleDeleteExistingImage(image.id)}
              >
                ×
              </button>

              <img
                src={image.image_url}
                alt={image.alt_text || machine.title}
              />
            </div>
          ))}
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

      <button type="submit" disabled={saving}>
        {saving
          ? "Saving..."
          : mode === "edit"
            ? "Update Machine"
            : "Save Machine"}
      </button>
    </form>
  );
}
