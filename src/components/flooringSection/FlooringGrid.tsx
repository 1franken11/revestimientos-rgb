import React from "react";
import "./FlooringSections.css";

type FlooringGridProps = {
  setSelectedFloor: (floor: string, bgImage: string) => void;
  setBgImage: (url: string | null) => void;
  setFadeOut: (fade: boolean) => void;
};

export const FlooringGrid: React.FC<FlooringGridProps> = ({ setSelectedFloor, setBgImage, setFadeOut }) => {

  const floors = [
    { key: "Vinyl", label: "Vinyl", image: "https://res.cloudinary.com/drwacbtjf/image/upload/v1743508300/WhatsApp_Image_2025-03-31_at_23.10.44_ff4b6490_phzxzy.jpg", bgImage: "https://res.cloudinary.com/drwacbtjf/image/upload/v1744642268/vynil_sie1yd.jpg" },
    { key: "Laminate", label: "Laminate", image: "https://res.cloudinary.com/drwacbtjf/image/upload/v1743508301/WhatsApp_Image_2025-03-31_at_23.10.44_86077beb_mnfxib.jpg", bgImage: "https://res.cloudinary.com/drwacbtjf/image/upload/v1744642091/laminate_1_ewkfrn.jpg" },
    { key: "Tile", label: "Tile", image: "https://res.cloudinary.com/drwacbtjf/image/upload/v1743508301/WhatsApp_Image_2025-03-31_at_23.10.45_7e4276ce_gettwe.jpg", bgImage: "https://res.cloudinary.com/drwacbtjf/image/upload/v1744642267/Tile_tbbln5.jpg" },
    { key: "Wood", label: "Wood", image: "https://res.cloudinary.com/drwacbtjf/image/upload/v1743508300/WhatsApp_Image_2025-03-31_at_23.10.44_3f250b6b_g2xic4.jpg", bgImage: "https://res.cloudinary.com/drwacbtjf/image/upload/v1744642270/wood_kctkbz.jpg" }
  ];

  return (
    <div className="flooring-grid">
      {floors.map((floor) => (
        <div
          key={floor.key}
          className="flooring-card"
          onClick={() => setSelectedFloor(floor.key, floor.bgImage)}
          onMouseEnter={() => {
            setBgImage(floor.bgImage);
            setFadeOut(false);
          }}
          onMouseLeave={() => setFadeOut(true)}
        >
          <img src={floor.image} alt={floor.label} />
          <div className="floor-label">{floor.label}</div>
        </div>
      ))}
    </div>
  );
};