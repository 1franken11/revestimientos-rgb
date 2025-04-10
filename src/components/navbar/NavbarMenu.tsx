import React from "react";
import { Link } from "react-scroll";
import LanguageSelector from "../languageSelector/LanguageSelector";
import { Translations } from "../../types/Translations";
import styles from "./Navbar.module.css"; // ✅ Import del módulo

interface NavbarMenuProps {
  menuOpen: boolean;
  translations: Translations;
}

const menuItems = [
  { id: "sp-page-title", key: "home" },
  { id: "quienes-somos", key: "QuienesSomos" },
  { id: "flooring", key: "floors" },
  { id: "projects-section", key: "improveSpace" },
  { id: "reviews-section", key: "Reviews" },
  { id: "contact-container", key: "contact" },
];

const NavbarMenu: React.FC<NavbarMenuProps> = ({ menuOpen, translations }) => {
  return (
    <ul
      className={`${styles.navbarMenu} ${menuOpen ? styles.active : ""}`}
    >
      {menuItems.map((item) => (
        <li key={item.id}>
          <Link
            activeClass="active"
            to={item.id}
            spy
            smooth
            offset={-70}
            duration={500}
          >
            {translations.Menu[item.key as keyof typeof translations.Menu]}
          </Link>
        </li>
      ))}
      <li className={styles.languageMenu}>
        <LanguageSelector />
      </li>
    </ul>
  );
};

export default NavbarMenu;
