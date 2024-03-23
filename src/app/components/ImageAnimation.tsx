import React from "react";
import "./ImageAnimation.css"; // Fichier CSS pour les animations

const ImageAnimation = () => {
  return (
    <div className="container">
      <img
        className="sautillement"
        src="/lp3d.svg"
        alt="Image à animer"
        width={192}
      />
    </div>
  );
};

export default ImageAnimation;
