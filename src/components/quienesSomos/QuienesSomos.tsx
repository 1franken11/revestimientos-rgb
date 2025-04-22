import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./QuienesSomos.module.css";
import LogoOnly from "../logoOnly/LogoOnly";

const QuienesSomos: React.FC = () => {
  const { translations } = useContext(LanguageContext)!;

  return (
    <section id="quienes-somos" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <LogoOnly showPng={true} />
        </div>
        <div className={styles.textContainer}>
          <h2>{translations.QuienesSomos.services.title}</h2>
          <ul>
            {translations.QuienesSomos.services.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2>{translations.QuienesSomos.specialty.title}</h2>
          <p>{translations.QuienesSomos.specialty.description}</p>

          <h2>{translations.QuienesSomos.whyChooseUs.title}</h2>
          <div className={styles.listColumns}>
            <ul>
              {translations.QuienesSomos.commitment.description.slice(0, 4).map((item, index) => (
                <li key={index}><span>{item}</span></li>
              ))}
            </ul>
            <ul>
              {translations.QuienesSomos.commitment.description.slice(4).map((item, index) => (
                <li key={index}><span>{item}</span></li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
