import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./LanguageSelector.css";

const LanguageSelector: React.FC = () => {
  const { setLanguage, languageFlags } = useContext(LanguageContext)!;

  return (
    <div className="language-selector-flags">
      <div onClick={() => setLanguage("EN")} className="flag-option">
        <img src={languageFlags.EN} alt="English" />
        <span>English</span>
      </div>
      <div onClick={() => setLanguage("ES")} className="flag-option">
        <img src={languageFlags.ES} alt="Español" />
        <span>Español</span>
      </div>
      <div onClick={() => setLanguage("POR")} className="flag-option">
        <img src={languageFlags.POR} alt="Português" />
        <span>Português</span>
      </div>
    </div>
  );
};

export default LanguageSelector;
