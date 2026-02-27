// src/components/AvisCarousel.tsx
import React, { useState } from "react";
import "../css/Avis.css";

export interface AvisType {
  _id: string;
  note: number;
  commentaire: string;
  nom: string;
  prenom: string;
  createdAt: string;
}

interface AvisCarouselProps {
  avisList: AvisType[];
}

const AvisCarousel: React.FC<AvisCarouselProps> = ({ avisList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (avisList.length === 0) {
    return (
      <div className="avis-section">
        <h3>Avis des utilisateurs :</h3>
        <p>Aucun avis pour le moment.</p>
      </div>
    );
  }

  const prevAvis = () => {
    setCurrentIndex((prev) => (prev === 0 ? avisList.length - 1 : prev - 1));
  };

  const nextAvis = () => {
    setCurrentIndex((prev) => (prev === avisList.length - 1 ? 0 : prev + 1));
  };

  const avis = avisList[currentIndex];

  return (
    <div className="avis-section carousel">
      <h3>Avis des utilisateurs :</h3>
      <div className="carousel-content">
        <button className="carousel-btn prev" onClick={prevAvis}>
          ‹
        </button>

        <div className="avis-card">
          {/* Nom et prénom au-dessus */}
          <div className="user-name">
            {avis.nom.charAt(0)}. {avis.prenom}
          </div>

          <div className="note-date">
            <span className="star-rating">
              {"★".repeat(avis.note) + "☆".repeat(5 - avis.note)}
            </span>
            <span>
              {new Date(avis.createdAt).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <div className="commentaire">{avis.commentaire}</div>
        </div>

        <button className="carousel-btn next" onClick={nextAvis}>
          ›
        </button>
      </div>
    </div>
  );
};

export default AvisCarousel;