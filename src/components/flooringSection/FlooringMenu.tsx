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
      <button className={`btn ${menu === "Tile" ? "active" : ""}`} onClick={() => setMenu("Tile")}>
        {translations.FlooringSections.options.Tile}
      </button>
      <button className={`btn ${menu === "Laminate" ? "active" : ""}`} onClick={() => setMenu("Laminate")}>
        {translations.FlooringSections.options.Laminate}
      </button>
      <button className={`btn ${menu === "Wood" ? "active" : ""}`} onClick={() => setMenu("Wood")}>
        {translations.FlooringSections.options.Wood}
      </button>
    </div>
  );
}
