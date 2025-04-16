import React, { useState, useEffect, useContext, useRef } from "react";
import styles from "./FirstSection.module.css";
import { LanguageContext } from "../../context/LanguageContext";
import { SlideData } from "./SlideData";
import SectionWithNavbarOffset from "../sectionWithNavbarOffset/SectionWithNavbarOffset";

const getResponsiveImage = (srcSet: any): string => {
  const width = window.innerWidth;
  if (width <= 480) return srcSet["9x16"];
  if (width <= 768) return srcSet["4x5"];
  if (width <= 1024) return srcSet["3x2"];
  if (width <= 1440) return srcSet["4x3"];
  return srcSet["16x9"];
};

const FirstSection: React.FC = () => {
  const { translations } = useContext(LanguageContext)!;
  const [current, setCurrent] = useState(0);
  const [responsiveSrc, setResponsiveSrc] = useState<string | null>(null);

  useEffect(() => {
    const updateSrc = () => {
      const src = getResponsiveImage(SlideData[current].srcSet);
      setResponsiveSrc(src);
    };

    updateSrc(); // inicial

    window.addEventListener("resize", updateSrc);
    return () => window.removeEventListener("resize", updateSrc);
  }, [current]);

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % SlideData.length);
  };
  
  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + SlideData.length) % SlideData.length);
  };
  
  const goToIndex = (i: number) => {
    setCurrent(i);
  };
  useEffect(() => {
    resetTimer();
  }, [current]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SlideData.length);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <SectionWithNavbarOffset id="sp-page-title" className={styles.firstSection}>
      <div className={styles.slideshow}>
        {SlideData.map((slide, i) => (
          <div
            key={i}
            className={`${styles.slide} ${i === current ? styles.active : ""}`}
          >
            {i === current && responsiveSrc && (
              <img src={responsiveSrc} alt={slide.alt} />
            )}
            <div className={styles.caption}>
              {translations?.SLIDES?.[i]?.caption || slide.alt}
            </div>
          </div>
        ))}
        <button className={styles.carouselControlPrev} onClick={goToPrev}>
          &#10094;
        </button>
        <button className={styles.carouselControlNext} onClick={goToNext}>
          &#10095;
        </button>
        <div className={styles.dots}>
          {SlideData.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              className={`${styles.dot} ${i === current ? styles.active : ""}`}
              onClick={() => goToIndex(i)}
              />
          ))}
        </div>
      </div>
    </SectionWithNavbarOffset>
  );
};

export default FirstSection;