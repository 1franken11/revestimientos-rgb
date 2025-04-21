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

const ImageComparison: React.FC<ImageComparisonProps> = ({
  comparisons = [],
}) => {
  const optimizeUrl = (url: string) =>
    url.replace("/upload/", "/upload/f_auto,q_auto/");
  const containerRef = useRef<HTMLDivElement>(null);
  const beforeImgRef = useRef<HTMLImageElement>(null);
  const [dividerPosition, setDividerPosition] = useState(50);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageOffsets, setImageOffsets] = useState({ left: 0, right: 0 });
  const [userInteracting, setUserInteracting] = useState(false);

  const updateOffsets = useCallback(() => {
    if (beforeImgRef.current && containerRef.current) {
      const imgRect = beforeImgRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const left =
        ((imgRect.left - containerRect.left) / containerRect.width) * 100;
      const right =
        ((containerRect.right - imgRect.right) / containerRect.width) * 100;
      setImageOffsets({ left, right });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateOffsets);
    return () => window.removeEventListener("resize", updateOffsets);
  }, [updateOffsets]);
  useEffect(() => {
    updateOffsets();
  }, [currentIndex, updateOffsets]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;

    // Limitar el slider entre el borde izquierdo y derecho de la imagen
    percentage = Math.max(
      imageOffsets.left,
      Math.min(100 - imageOffsets.right, percentage)
    );

    setDividerPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons !== 1) return;
    setUserInteracting(true);
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setUserInteracting(true);
    handleMove(e.touches[0].clientX);
  };

  const handleInteractionEnd = () => {
    setUserInteracting(false);
  };

  const nextSlide = useCallback(() => {
    if (!userInteracting) {
      setCurrentIndex((prev) => (prev + 1) % comparisons.length);
      setDividerPosition(50);
    }
  }, [comparisons.length, userInteracting]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  if (comparisons.length === 0) return <p>No hay imágenes para comparar.</p>;

  const currentComparison = comparisons[currentIndex];
  const safePosition = Math.max(
    imageOffsets.left,
    Math.min(100 - imageOffsets.right, dividerPosition)
  );

  return (
    <div className="comparison-wrapper">
      <div
        className="image-comparison-container"
        ref={containerRef}
        style={{ height: "100%", width: "100%" }}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseUp={handleInteractionEnd}
        onTouchEnd={handleInteractionEnd}
      >
        <img
          ref={beforeImgRef}
          src={optimizeUrl(currentComparison.before)}
          srcSet={`
    ${optimizeUrl(currentComparison.before)} 1x,
    ${optimizeUrl(currentComparison.before).replace(
      "/upload/",
      "/upload/dpr_2.0/"
    )} 2x
  `}
          alt={currentComparison.alt}
          className="image-before"
          loading="lazy"
          onLoad={updateOffsets}
          onContextMenu={(e) => e.preventDefault()}
        />

        <div
          className="comparison-after-wrapper"
          style={{ clipPath: `inset(0 ${100 - safePosition}% 0 0)` }}
        >
          <img
            src={optimizeUrl(currentComparison.after)}
            srcSet={`
    ${optimizeUrl(currentComparison.after)} 1x,
    ${optimizeUrl(currentComparison.after).replace(
      "/upload/",
      "/upload/dpr_2.0/"
    )} 2x
  `}
            alt={currentComparison.alt}
            className="image-after"
            loading="lazy"
            onLoad={updateOffsets}
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
        <div
          className="comparison-divider"
          style={{ left: `${safePosition}%` }}
        />
        <div
          className="comparison-slider"
          style={{ left: `${safePosition}%` }}
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
        {comparisons.map((item, i) => (
          <span
            key={i}
            className={`dot ${i === currentIndex ? "active" : ""}`}
            title={item.alt}
            onClick={() => {
              setCurrentIndex(i);
              setDividerPosition(50);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageComparison;
