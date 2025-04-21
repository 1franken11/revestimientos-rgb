import React, { useState, useEffect, useContext, useRef } from "react";
import styles from "./FirstSection.module.css";
import { LanguageContext } from "../../context/LanguageContext";
import { SlideData } from "./SlideData";
import SectionWithNavbarOffset from "../sectionWithNavbarOffset/SectionWithNavbarOffset";
import { PiArrowSquareRightFill, PiArrowSquareLeftFill  } from "react-icons/pi";

// ✅ Convierte URL a formato optimizado
const toWebp = (url: string) =>
  url.replace("/upload/", "/upload/f_auto,q_auto/");

// ✅ Devuelve la imagen ideal según el ancho
const getResponsiveImage = (srcSet: Record<string, string>, width: number): string => {
  const key =
    width <= 480 ? "9x16" :
    width <= 768 ? "4x5" :
    width <= 1024 ? "3x2" :
    width <= 1440 ? "4x3" :
    "16x9";

  return toWebp(srcSet[key]);
};

const FirstSection: React.FC = () => {
  const { translations } = useContext(LanguageContext)!;
  const [current, setCurrent] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  // ✅ Escuchar cambios de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % SlideData.length);
  };

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + SlideData.length) % SlideData.length);
  };

  const goToIndex = (i: number) => {
    setCurrent(i);
  };

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

  useEffect(() => {
    resetTimer();
  }, [current]);

  return (
    <SectionWithNavbarOffset id="sp-page-title" className={styles.firstSection}>
      <div className={styles.slideshow}>
        {SlideData.map((slide, i) => {
          const isActive = i === current;
          const optimizedSrc = getResponsiveImage(slide.srcSet, viewportWidth);

          return (
            <div
              key={i}
              className={`${styles.slide} ${isActive ? styles.active : ""}`}
            >
              {isActive && (
                <img
                  src={optimizedSrc}
                  srcSet={`
                    ${optimizedSrc} 1x,
                    ${optimizedSrc.replace("/upload/", "/upload/dpr_2.0/")} 2x
                  `}
                  alt={slide.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              )}
              <div className={styles.caption}>
                {translations?.SLIDES?.[i]?.caption || slide.alt}
              </div>
            </div>
          );
        })}
        <button className={styles.carouselControlPrev} onClick={goToPrev}>
        <PiArrowSquareLeftFill size={60} />
        </button>
        <button className={styles.carouselControlNext} onClick={goToNext}>
        <PiArrowSquareRightFill size={60} />
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
