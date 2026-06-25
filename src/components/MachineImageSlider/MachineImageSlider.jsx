import { useState } from "react";
import "./MachineImageSlider.css";

export function MachineImageSlider({ images = [], title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  if (images.length === 0) {
    return <div className="machine-card-placeholder">No Image</div>;
  }

  function previousImage(event) {
    event.preventDefault();
    event.stopPropagation();

    setDirection("prev");

    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  function nextImage(event) {
    event.preventDefault();
    event.stopPropagation();

    setDirection("next");

    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <div className="machine-image-slider">
      <img
        key={images[currentIndex].id}
        className={`slider-image ${direction === "next" ? "slide-next" : "slide-prev"}`}
        src={images[currentIndex].image_url}
        alt={images[currentIndex].alt_text || title}
      />

      {images.length > 1 && (
        <>
          <button className="slider-arrow slider-arrow-left" onClick={previousImage}>
            ‹
          </button>

          <button className="slider-arrow slider-arrow-right" onClick={nextImage}>
            ›
          </button>

          <div className="slider-count">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}