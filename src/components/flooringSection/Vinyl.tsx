import { useContext } from "react";
import "./FlooringSections.css";
import { LanguageContext } from "../../context/LanguageContext";
export function Vinyl() {
  const { translations } = useContext(LanguageContext)!;

  return (
    <div className="flooring-item">
      <div className="flooring-description">
        {(translations.FlooringSections.descriptions.Vinyl as { title: string; description: string }[]).map(
          (item, index) => (
            <div key={index}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}