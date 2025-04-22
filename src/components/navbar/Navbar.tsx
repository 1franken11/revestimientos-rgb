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
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  useEffect(() => {
    const threshold = 50;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) < threshold) return;

      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`${styles.navbar} ${showNavbar ? styles.show : styles.hide}`}>
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
