// src/components/Carousel.tsx
import React, { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm";
import Avis, { AvisType } from "./Avis";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [avisList, setAvisList] = useState<AvisType[]>([]);
  const [loading, setLoading] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  // Resize
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  // Charger avis
  const chargerAvis = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/avis");
      const data: AvisType[] = await res.json();
      setAvisList(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    chargerAvis();
  }, []);

  // Envoyer avis
  const envoyerAvis = async (note: number, commentaire: string) => {
    if (!commentaire.trim()) {
      alert("❌ Merci d'écrire un commentaire !");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/avis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ note, commentaire }),
      });
      if (response.ok) {
        alert("✅ Avis envoyé !");
        chargerAvis();
        setFormVisible(false);
      } else {
        alert("❌ Erreur lors de l'envoi");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Erreur réseau");
    } finally {
      setLoading(false);
    }
  };

  const containerWidth = width > 600 ? 600 : width * 0.9;

  return (
    <div className="carousel">
      {/* Carousel images */}
      <div className="carousel-image-container" style={{ width: containerWidth }}>
        <img src={images[currentIndex]} alt={`Photo ${currentIndex + 1}`} />
        <div className="nav left" onClick={prevImage}>❮</div>
        <div className="nav right" onClick={nextImage}>❯</div>
      </div>

      {/* Bouton pour afficher le formulaire */}
      <button
        className="comment-button"
        onClick={() => setFormVisible(true)}
        style={{ width: containerWidth }}
      >
        Laisser un commentaire
      </button>

      {/* Modal Mail */}
      {formVisible && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ width: containerWidth }}>
            <ReviewForm
              onSubmit={envoyerAvis}
              onCancel={() => setFormVisible(false)}
              loading={loading}
            />
          </div>
        </div>
      )}

      {/* Liste des avis */}
      <Avis avisList={avisList} />
    </div>
  );
};

export default Carousel;