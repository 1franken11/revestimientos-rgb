import React, { useState, useEffect } from "react";
import { LanguageContext } from "./LanguageContext";
import ES from "../components/languages/ES.json";
import EN from "../components/languages/EN.json";
import POR from "../components/languages/POR.json";
import { Translations } from "../types/Translations";

type Language = "ES" | "EN" | "POR";

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ES_Translations = ES as Translations;
  const EN_Translations = EN as Translations;
  const POR_Translations = POR as Translations;

  const [language, setLanguage] = useState<Language>("ES");
  const [translations, setTranslations] = useState<Translations>(ES_Translations);
  
  useEffect(() => {
    switch (language) {
      case "EN":
        setTranslations(EN_Translations);
        break;
      case "POR":
        setTranslations(POR_Translations);
        break;
      default:
        setTranslations(ES_Translations);
    }
  }, [language]);
  const languageFlags: Record<Language, string> = {
    ES: "https://res.cloudinary.com/drwacbtjf/image/upload/v1742957445/ES_bamghy.png",
    EN: "https://res.cloudinary.com/drwacbtjf/image/upload/v1742957444/EN_uzdyjl.png",
    POR: "https://res.cloudinary.com/drwacbtjf/image/upload/v1742957445/POR_bopyod.png",
  };
  return (
<LanguageContext.Provider value={{ language, translations, setLanguage, languageFlags }}>
  {children}
</LanguageContext.Provider>
  );
};
