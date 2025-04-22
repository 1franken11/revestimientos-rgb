import React from "react";
import styles from "./LogoOnly.module.css";

interface LogoOnlyProps {
  showPng: boolean;
}

const LogoOnly: React.FC<LogoOnlyProps> = ({ showPng }) => {
  return (
    <img
      src="https://res.cloudinary.com/drwacbtjf/image/upload/v1745328531/logo_LE_c63hwt.jpg"
      alt="Logo estático"
      className={`${styles.logoPngWrapper} ${
        showPng ? styles.fadeIn : styles.fadeOut
      }`}
    />
  );
};

export default LogoOnly;