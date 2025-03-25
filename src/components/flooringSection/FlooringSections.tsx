import { useState } from "react";
import "./FlooringSections.css";
import { FlooringGrid } from "./FlooringGrid";
import { FlooringModal } from "./FlooringModal";

export function FlooringSections() {
  const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
  const [bgImage, setBgImage] = useState<string | null>(null);
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const [fixedBgImage, setFixedBgImage] = useState<string | null>(null);

  return (
    <section id="flooring">
      <div className="flooring-sections">
        <div
          className={`flooring-bg-overlay ${fadeOut && !fixedBgImage ? "fade-out" : ""}`}
          style={{
            backgroundImage: fixedBgImage
              ? `url(${fixedBgImage})`
              : bgImage
              ? `url(${bgImage})`
              : "none",
          }}
        />
        <h2 className="section-title">Explora Nuestras Opciones de Pisos</h2>
        <FlooringGrid
          setSelectedFloor={(floorKey, floorBgImage) => {
            setSelectedFloor(floorKey);
            setFixedBgImage(floorBgImage); // Fondo fijo al click
          }}
          setBgImage={setBgImage}
          setFadeOut={setFadeOut}
        />
        {selectedFloor && (
          <FlooringModal
            floor={selectedFloor}
            onClose={() => {
              setSelectedFloor(null);
              setFixedBgImage(null); // Se limpia cuando se cierra el modal
            }}
          />
        )}
      </div>
    </section>
  );
}
