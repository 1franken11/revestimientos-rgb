import React, { useState,useContext } from "react";
import styles from "./OpinionesCarousel.module.css";
import { EmbeddedReview } from "./types";
import { FacebookIframeCard } from "./FacebookIframeCard";
import { LanguageContext } from "../../context/LanguageContext";
import { PiArrowSquareRightFill, PiArrowSquareLeftFill  } from "react-icons/pi";

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
}) => {
  
  const { translations } = useContext(LanguageContext)!;
  const [currentSlide, setCurrentSlide] = useState(0);

  const opinionGroups = chunkArray(reviews, itemsPerSlide);

  const handlePrev = () =>
    setCurrentSlide((prev) => (prev - 1 + opinionGroups.length) % opinionGroups.length);

  const handleNext = () =>
    setCurrentSlide((prev) => (prev + 1) % opinionGroups.length);

  return (
    <>
    <section id="reviews-section" className={styles.opinionesSection}>
    <h2>{translations.Reviews.title}</h2>
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
              <button className={styles.carouselControlPrev} onClick={handlePrev}>
                <PiArrowSquareLeftFill size={40} />
              </button>
              <button className={styles.carouselControlNext} onClick={handleNext}>
                <PiArrowSquareRightFill size={40} />
              </button>
            </>
          )}
        </div>
      ) : (
        <p className="text-center">There are no comments yet. Visit our profile and leave us a comment!</p>
      )}
    </section>
    </>
  );
};

export default OpinionesCarousel;
