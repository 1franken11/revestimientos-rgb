import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./ProjectsModal.css";
import { withWatermark } from "../../utils/cloudinary";
import { PiArrowSquareRightFill, PiArrowSquareLeftFill } from "react-icons/pi";

interface ProjectModalProps {
  gallery: string[];
  onClose: () => void;
  onNextGallery: () => void;
  onPrevGallery: () => void;
}

const ProjectsModal: React.FC<ProjectModalProps> = ({
  gallery,
  onClose,
  onNextGallery,
  onPrevGallery,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false); // <--- nuevo estado
  const currentMedia = gallery[currentIndex];
  const isVideo = currentMedia.endsWith(".mp4");

  const goToPrevMedia = () => {
    setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
    setIsLoaded(false); // <--- reset al cargar nueva imagen/video
  };

  const goToNextMedia = () => {
    setCurrentIndex((prev) => (prev + 1) % gallery.length);
    setIsLoaded(false); // <--- reset al cargar nueva imagen/video
  };

  // Cuando cambiás de galería (otro proyecto), también reset
  React.useEffect(() => {
    setIsLoaded(false);
  }, [gallery]);

  const modalContent = (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Botón de cerrar (muestra solo cuando está cargado) */}
        {isLoaded && (
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        )}

        {/* Botones de navegación dentro de la galería */}
        {gallery.length > 1 && isLoaded && (
          <>
            <button
              className="modal-nav-button modal-prev"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevMedia();
              }}
            >
              <PiArrowSquareLeftFill size={40} />
            </button>
            <button
              className="modal-nav-button modal-next"
              onClick={(e) => {
                e.stopPropagation();
                goToNextMedia();
              }}
            >
              <PiArrowSquareRightFill size={40} />
            </button>
          </>
        )}

        <div className="media-wrapper">
          {isVideo ? (
            <video
              src={currentMedia.replace("/upload/", "/upload/f_auto,q_auto/")}
              className="modal-video"
              controls
              autoPlay
              muted
              loop
              onLoadedData={() => setIsLoaded(true)}
              onContextMenu={(e) => e.preventDefault()}
              style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.3s" }}
            />
          ) : (
            <>
              <img
                src={currentMedia.replace("/upload/", "/upload/f_auto,q_auto/")}
                srcSet={`
                  ${currentMedia.replace(
                    "/upload/",
                    "/upload/f_auto,q_auto/"
                  )} 1x,
                  ${currentMedia.replace(
                    "/upload/",
                    "/upload/f_auto,q_auto,dpr_2.0/"
                  )} 2x
                `}
                alt="Proyecto"
                className="modal-image"
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
                onContextMenu={(e) => e.preventDefault()}
                style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.3s" }}
              />
              {/* Botón descargar (solo si está cargada la imagen) */}
              {isLoaded && (
                <a
                  href={withWatermark(currentMedia)}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-btn"
                >
                  Descargar imagen
                </a>
              )}
            </>
          )}
        </div>

        {/* Botones para navegar ENTRE galerías (proyectos) */}
        {isLoaded && (
          <div className="gallery-nav-wrapper">
            <button
              className="modal-nav-button modal-prev-gallery"
              onClick={(e) => {
                e.stopPropagation();
                onPrevGallery();
                setCurrentIndex(0);
                setIsLoaded(false); // <--- reset al cargar otra galería
              }}
            >
              <PiArrowSquareLeftFill size={40} />
            </button>
            <button
              className="modal-nav-button modal-next-gallery"
              onClick={(e) => {
                e.stopPropagation();
                onNextGallery();
                setCurrentIndex(0);
                setIsLoaded(false); // <--- reset al cargar otra galería
              }}
            >
              <PiArrowSquareRightFill size={40} />
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")!
  );
};

export default ProjectsModal;
