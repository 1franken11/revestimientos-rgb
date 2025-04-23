import React from "react";
import styles from "./OpinionesCarousel.module.css";
import { Opinion } from "./types";

interface Props {
  opinion: Opinion;
  onClick: () => void;
}
export const OpinionCard: React.FC<Props> = ({ opinion, onClick }) => (
  <div className={styles.opinionCard} onClick={onClick} style={{ cursor: "pointer" }}>
    <p>"{opinion.comment}"</p>
    <div className={styles.opinionName}>{opinion.name}</div>
    <div className={styles.opinionDate}>{opinion.date}</div>
  </div>
);
