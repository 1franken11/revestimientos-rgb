import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./ProjectsModal.css";

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
  const currentMedia = gallery[currentIndex];
  const isVideo = currentMedia.endsWith(".mp4");

  const goToPrevMedia = () => {
    setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const goToNextMedia = () => {
    setCurrentIndex((prev) => (prev + 1) % gallery.length);
  };

  const modalContent = (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        {/* Navegación interna dentro de la misma galería */}
        {gallery.length > 1 && (
          <>
            <button
              className="modal-nav-button modal-prev"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevMedia();
              }}
            >
              ⟨
            </button>
            <button
              className="modal-nav-button modal-next"
              onClick={(e) => {
                e.stopPropagation();
                goToNextMedia();
              }}
            >
              ⟩
            </button>
          </>
        )}

        <div className="media-wrapper">
          {isVideo ? (
            <video
              src={currentMedia}
              className="modal-video"
              controls
              autoPlay
              muted
              loop
            />
          ) : (
            <img src={currentMedia} alt="Proyecto" className="modal-image" />
          )}
        </div>

        <div className="gallery-nav-wrapper">
          <button
            className="modal-nav-button modal-prev-gallery"
            onClick={(e) => {
              e.stopPropagation();
              onPrevGallery();
              setCurrentIndex(0);
            }}
          >
            ‹
          </button>
          <button
            className="modal-nav-button modal-next-gallery"
            onClick={(e) => {
              e.stopPropagation();
              onNextGallery();
              setCurrentIndex(0);
            }}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")!
  );
};

export default ProjectsModal;
