import React, { useState, useEffect, useContext } from "react";
import styles from "./FirstSection.module.css";
import { LanguageContext } from "../../context/LanguageContext";
import { SlideData } from "./SlideData";
import SectionWithNavbarOffset from "../sectionWithNavbarOffset/SectionWithNavbarOffset";

const FirstSection: React.FC = () => {
  const { translations } = useContext(LanguageContext)!;
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50; // distancia mínima para considerar swipe
  const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval> | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
  
    const distance = touchStart - touchEnd;
    let newIndex = current;
  
    if (distance > minSwipeDistance) {
      newIndex = (current + 1) % SlideData.length;
      setCurrent(newIndex);
    } else if (distance < -minSwipeDistance) {
      newIndex = (current - 1 + SlideData.length) % SlideData.length;
      setCurrent(newIndex);
    }
  
    setTouchStart(null);
    setTouchEnd(null);
  
    // Reinicia el autoplay de forma segura:
    if (intervalId) clearInterval(intervalId);
  
    const id = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % SlideData.length);
    }, 5000);
  
    setIntervalId(id);
  };
  
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SlideData.length);
    }, 5000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, []);
  
  useEffect(() => {
    const preloadNext = new Image();
    const nextIndex = (current + 1) % SlideData.length;
    preloadNext.src = SlideData[nextIndex].src;
  }, [current]);
  
  return (
    <SectionWithNavbarOffset id="sp-page-title" className={styles.firstSection}>
      <div
        className={styles.slideshow}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {" "}
        {SlideData.map((Slide, i) => (
          <div
            key={i}
            className={`${styles.slide} ${i === current ? styles.active : ""}`}
          >
            <img src={Slide.src} alt={Slide.alt} />
            <div className={styles.caption}>
              {translations?.SLIDES?.[i]?.caption || Slide.alt}
            </div>
          </div>
        ))}
        <div className={styles.dots}>
          {SlideData.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              className={`${styles.dot} ${i === current ? styles.active : ""}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </SectionWithNavbarOffset>
  );
};

export default FirstSection;
