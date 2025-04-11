import { useState, useContext } from "react";
import "./FlooringSections.css";
import { FlooringGrid } from "./FlooringGrid";
import { FlooringModal } from "./FlooringModal";
import { LanguageContext } from "../../context/LanguageContext";

export function FlooringSections() {
  const { translations } = useContext(LanguageContext)!;
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
          <h2 className="flooring-title">{translations.FlooringSections.title}</h2>
          <FlooringGrid
          setSelectedFloor={(floorKey, floorBgImage) => {
            setSelectedFloor(floorKey);
            setFixedBgImage(floorBgImage); 
          }}
          setBgImage={setBgImage}
          setFadeOut={setFadeOut}
        />
        {selectedFloor && (
          <FlooringModal
            floor={selectedFloor}
            onClose={() => {
              setSelectedFloor(null);
              setFixedBgImage(null);
            }}
          />
        )}
      </div>
    </section>
  );
}
