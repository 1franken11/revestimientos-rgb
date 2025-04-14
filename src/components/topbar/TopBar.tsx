import React from "react";
import styles from "./TopBar.module.css";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const TopBar: React.FC = () => {
  const encodedMessage = encodeURIComponent(
    "Hello, I would like more information about your services"
  );

  return (
    <div className={`${styles.topbar} ${styles.centered}`}>
      <a
        className={styles.link}
        href={`https://api.whatsapp.com/send?phone=19044225380&text=${encodedMessage}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className={styles.icon} /> +1 904-422-5380
      </a>

      <a
        className={styles.link}
        href={`https://wa.me/19047289872?text=${encodedMessage}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className={styles.icon} /> +1 904-728-9872
      </a>
      <a className={styles.link} href="mailto:rgbcorporation@gmail.com">
        <FaEnvelope className={styles.icon} /> rgbcorporation@gmail.com
      </a>
    </div>
  );
};

export default TopBar;
