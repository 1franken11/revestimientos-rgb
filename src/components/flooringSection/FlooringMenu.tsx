import { useContext } from "react";
import "./FlooringSections.css";
import { LanguageContext } from "../../context/LanguageContext";

interface FlooringMenuProps {
  menu: string;
  setMenu: (menu: string) => void;
}

export function FlooringMenu({ menu, setMenu }: FlooringMenuProps) {
  const { translations } = useContext(LanguageContext)!;

  return (
    <div className="menu-flooring">
      <button className={`btn ${menu === "Vinyl" ? "active" : ""}`} onClick={() => setMenu("Vinyl")}>
        {translations.FlooringSections.options.Vinyl}
      </button>
      <button className={`btn ${menu === "tile" ? "active" : ""}`} onClick={() => setMenu("tile")}>
        {translations.FlooringSections.options.tile}
      </button>
      <button className={`btn ${menu === "laminate" ? "active" : ""}`} onClick={() => setMenu("laminate")}>
        {translations.FlooringSections.options.laminate}
      </button>
      <button className={`btn ${menu === "wood" ? "active" : ""}`} onClick={() => setMenu("wood")}>
        {translations.FlooringSections.options.wood}
      </button>
    </div>
  );
}
