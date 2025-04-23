import React from "react";

interface Props {
  iframeSrc: string;
  onClick: () => void;
}

export const FacebookIframeCard: React.FC<Props> = ({ iframeSrc, onClick }) => (
  <div onClick={onClick} style={{ cursor: "pointer", width: "100%", maxWidth: "500px" }}>
    <iframe
      src={iframeSrc}
      width="100%"
      height="250"
      style={{ border: "none", overflow: "hidden" }}
      scrolling="no"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></iframe>
  </div>
);
