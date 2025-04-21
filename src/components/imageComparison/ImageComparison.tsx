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
  const beforeImgRef = useRef<HTMLImageElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const afterWrapperRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInteracting, setUserInteracting] = useState(false);

  const optimizeUrl = (url: string) =>
    url.replace("/upload/", "/upload/f_auto,q_auto/");

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current || !dividerRef.current || !sliderRef.current || !afterWrapperRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    percentage = Math.max(0, Math.min(100, percentage));

    dividerRef.current.style.left = `${percentage}%`;
    sliderRef.current.style.left = `${percentage}%`;
    afterWrapperRef.current.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
  }, []);

  const nextSlide = useCallback(() => {
    if (!userInteracting) {
      setCurrentIndex((prev) => (prev + 1) % comparisons.length);
      setTimeout(() => handleMove(containerRef.current!.offsetWidth / 2), 50);
    }
  }, [comparisons.length, userInteracting, handleMove]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const current = comparisons[currentIndex];

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
          ref={beforeImgRef}
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
            onClick={() => {
              setCurrentIndex(i);
              setTimeout(() => handleMove(containerRef.current!.offsetWidth / 2), 50);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageComparison;