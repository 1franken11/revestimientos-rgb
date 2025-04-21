import React, { useRef, useState, useEffect, useCallback } from "react";
import "./ImageComparison.css";

interface ComparisonItem {
  before: string;
  after: string;
  alt: string;
}

interface ImageComparisonProps {
  comparisons?: ComparisonItem[];
}

const ImageComparison: React.FC<ImageComparisonProps> = ({ comparisons = [] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const afterWrapperRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInteracting, setUserInteracting] = useState(false);

  const optimizeUrl = (url: string) =>
    url.replace("/upload/", "/upload/f_auto,q_auto/");

  const moveToPercentage = (percentage: number) => {
    if (!dividerRef.current || !sliderRef.current || !afterWrapperRef.current) return;

    dividerRef.current.style.left = `${percentage}%`;
    sliderRef.current.style.left = `${percentage}%`;
    afterWrapperRef.current.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
  };

  const rafId = useRef<number | null>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
  
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
    }
  
    rafId.current = requestAnimationFrame(() => {
      if (!containerRef.current) return;
  
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let percentage = (x / rect.width) * 100;
      percentage = Math.max(0, Math.min(100, percentage));
  
      moveToPercentage(percentage);
    });
  }, []);
  

  // Centra al cargar nueva imagen
  useEffect(() => {
    // Esperar a que se renderice todo antes de mover
    requestAnimationFrame(() => {
      moveToPercentage(50);
    });
  }, [currentIndex]);

  const current = comparisons[currentIndex];
  useEffect(() => {
    const preventScroll = (e: TouchEvent) => {
      if (userInteracting) e.preventDefault();
    };
  
    document.addEventListener("touchmove", preventScroll, { passive: false });
  
    return () => {
      document.removeEventListener("touchmove", preventScroll);
    };
  }, [userInteracting]);
  
  return (
    <div className="comparison-wrapper">
      <div
        className="image-comparison-container"
        ref={containerRef}
        onMouseMove={(e) => userInteracting && handleMove(e.clientX)}
        onTouchMove={(e) => userInteracting && handleMove(e.touches[0].clientX)}
        onMouseUp={() => setUserInteracting(false)}
        onTouchEnd={() => setUserInteracting(false)}
      >
        <img
          src={optimizeUrl(current.before)}
          alt={current.alt}
          className="image-before"
          loading="lazy"
        />

        <div
          ref={afterWrapperRef}
          className="comparison-after-wrapper"
          style={{ clipPath: "inset(0 50% 0 0)" }}
        >
          <img
            src={optimizeUrl(current.after)}
            alt={current.alt}
            className="image-after"
            loading="lazy"
          />
        </div>

        <div ref={dividerRef} className="comparison-divider" style={{ left: "50%" }} />
        <div
          ref={sliderRef}
          className="comparison-slider"
          style={{ left: "50%" }}
          onMouseDown={(e) => {
            setUserInteracting(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            setUserInteracting(true);
            handleMove(e.touches[0].clientX);
          }}
        >
          <div className="slider-arrow left-arrow" />
          <div className="slider-arrow right-arrow" />
        </div>
      </div>

      <div className="comparison-dots">
        {comparisons.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageComparison;
