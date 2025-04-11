import React, { useState } from "react";
import styles from "./OpinionesCarousel.module.css";
import { EmbeddedReview } from "./types";
import { FacebookIframeCard } from "./FacebookIframeCard";

interface Props {
  reviews: EmbeddedReview[];
  itemsPerSlide?: number;
  title?: string;
}

const chunkArray = (array: EmbeddedReview[], size: number): EmbeddedReview[][] =>
  array.reduce<EmbeddedReview[][]>((acc, _, index) =>
    index % size === 0 ? [...acc, array.slice(index, index + size)] : acc, []);

const OpinionesCarousel: React.FC<Props> = ({
  reviews,
  itemsPerSlide = 3,
  title = "¡Clientes felices!"
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const opinionGroups = chunkArray(reviews, itemsPerSlide);

  const handlePrev = () =>
    setCurrentSlide((prev) => (prev - 1 + opinionGroups.length) % opinionGroups.length);

  const handleNext = () =>
    setCurrentSlide((prev) => (prev + 1) % opinionGroups.length);

  return (
    <section className={styles.opinionesSection}>
      <h2>{title}</h2>
      {opinionGroups.length > 0 ? (
        <div className={styles.carouselContainer}>
          <div className={`${styles.opinionesGrid}`}>
            {opinionGroups[currentSlide].map((rev) => (
              <div key={rev.id} className={styles.fadeIn}>
                <FacebookIframeCard iframeSrc={rev.iframeSrc} onClick={() => { }} />
              </div>
            ))}
          </div>

          {opinionGroups.length > 1 && (
            <>
              <button className={styles.carouselControlPrev} onClick={handlePrev}>❮</button>
              <button className={styles.carouselControlNext} onClick={handleNext}>❯</button>
            </>
          )}
        </div>
      ) : (
        <p className="text-center">Aún no hay comentarios.</p>
      )}
    </section>
  );
};

export default OpinionesCarousel;
