import React, { useState, useEffect, useContext } from "react";
import styles from "./Navbar.module.css";
import logo from "../../../public/img/logo_optimized.png";
import { LanguageContext } from "../../context/LanguageContext";
import NavbarMenu from "./NavbarMenu";
import MenuToggle from "./MenuToggle";
import { TopBar } from "../topbar";

const Navbar: React.FC = () => {
  const { translations } = useContext(LanguageContext)!;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !event.target ||
        !(event.target as HTMLElement).closest(".navbar-container")
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className={styles.navbar}>
      <TopBar />
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>
          <img src={logo} alt="Logo RGB" />
        </div>
        <MenuToggle menuOpen={menuOpen} toggleMenu={toggleMenu} />
        <NavbarMenu menuOpen={menuOpen} translations={translations} />
      </div>
      <div className={styles.bannerTitle}>
        <h3>{translations.Menu.corp}</h3>
      </div>
    </nav>
  );
};

export default Navbar;
