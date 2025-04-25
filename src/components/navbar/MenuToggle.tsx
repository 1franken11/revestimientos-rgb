import React from "react";
import styles from "./Navbar.module.css";
import { TfiMenu } from "react-icons/tfi";

interface MenuToggleProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ menuOpen, toggleMenu }) => {
  return (
    <button
      className={styles.menuToggle}
      aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
      onClick={(e) => {
        e.stopPropagation();
        toggleMenu();
      }}
      type="button"
      tabIndex={0}
    >
      <TfiMenu size={36} />
    </button>
  );
};

export default MenuToggle;
