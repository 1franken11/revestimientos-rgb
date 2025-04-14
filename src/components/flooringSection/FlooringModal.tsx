import * as React from "react";
import "./FlooringSections.css";
import { Laminate } from "./Laminate";
import { LuxuryVinyl } from "./LuxuryVinyl";
import { Tile } from "./Tile";
import { Wood } from "./Wood";

type FlooringModalProps = {
  floor: string;
  onClose: () => void;
};

const floorImages: Record<string, string> = {
  tile: "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643216/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.00_44592a86_jeumna.jpg",
  laminate: "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643166/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.14_faf1dc6f_l12fpq.jpg",
  luxuryVinyl: "https://res.cloudinary.com/drwacbtjf/image/upload/v1744662421/vinyll_samvcc.jpg",
  wood: "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643154/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.00_737de658_ioa8xa.jpg",
};

export const FlooringModal: React.FC<FlooringModalProps> = ({ floor, onClose }) => {
  const components: { [key: string]: React.ReactNode } = {
    tile: <Tile />,
    laminate: <Laminate />,
    luxuryVinyl: <LuxuryVinyl />,
    wood: <Wood />,
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card-two-columns" onClick={(e) => e.stopPropagation()}>
        <div className="modal-image-column">
          <img src={floorImages[floor]} alt={floor} />
        </div>
        <div className="modal-text-column">
          <h2 className="modal-title">{floor}</h2>
          <div className="modal-content-scroll">{components[floor]}</div>
          <button onClick={onClose} className="close-btn">Cerrar</button>
        </div>
      </div>
    </div>
  );
};
