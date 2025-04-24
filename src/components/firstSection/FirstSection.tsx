import React, { useState, useEffect, useContext, useRef } from "react";
import styles from "./FirstSection.module.css";
import { LanguageContext } from "../../context/LanguageContext";
import { SlideData } from "./SlideData";
import SectionWithNavbarOffset from "../sectionWithNavbarOffset/SectionWithNavbarOffset";
import { PiArrowSquareRightFill, PiArrowSquareLeftFill } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";

// Convierte URL a formato optimizado
const toWebp = (url: string) =>
  url.replace("/upload/", "/upload/f_auto,q_auto/");

// Devuelve la imagen ideal según el ancho
const getResponsiveImage = (srcSet: Record<string, string>, width: number): string => {
  const key =
    width <= 480 ? "9x16" :
    width <= 768 ? "4x5" :
    width <= 1024 ? "3x2" :
    width <= 1440 ? "4x3" :
    "16x9";
  return toWebp(srcSet[key]);
};

// Transición crossfade + slide
const slideVariants = {
  initial: { opacity: 0, x: 60, scale: 1.04 },
  animate: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: -60, scale: 0.97 },
};

const FirstSection: React.FC = () => {
  const { translations } = useContext(LanguageContext)!;
  const [current, setCurrent] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

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
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    resetTimer();
    // eslint-disable-next-line
  }, [current]);

  const optimizedSrc = getResponsiveImage(SlideData[current].srcSet, viewportWidth);

  return (
    <SectionWithNavbarOffset id="sp-page-title" className={styles.firstSection}>
      <div className={styles.slideshow}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className={styles.slide + " " + styles.active}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.7, ease: "easeInOut" }}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
            }}
          >
            <img
              src={optimizedSrc}
              srcSet={`
                ${optimizedSrc} 1x,
                ${optimizedSrc.replace("/upload/", "/upload/dpr_2.0/")} 2x
              `}
              alt={SlideData[current].alt}
              loading="eager"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div className={styles.caption}>
              {translations?.SLIDES?.[current]?.caption || SlideData[current].alt}
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Controles */}
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
