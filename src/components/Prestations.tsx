// src/components/Prestations.tsx
import React, { useState } from "react";
import "../css/Prestations.css";  

import { 
  load_prestation_sdb, 
  load_prestation_terrasse, 
  load_prestation_magasin, 
  load_prestation_cuisine 
} from "../utils/loader";

/* Sections avec images et descriptions */
const sections = [
  { 
    id: "Salle de bain", 
    title: "Salle de bain",
    description: "Découvrez nos réalisations de salles de bain modernes et fonctionnelles, alliant style et confort.",
    images: load_prestation_sdb()
  },
  { 
    id: "Cuisine", 
    title: "Cuisine",
    description: "Nos cuisines sur-mesure optimisent l'espace tout en gardant un design élégant.",
    images: load_prestation_cuisine()
  },
  { 
    id: "Terrasse", 
    title: "Terrasse",
    description: "Profitez de nos terrasses contemporaines, parfaites pour vos moments en extérieur.",
    images: load_prestation_terrasse()
  },
  { 
    id: "Magasin", 
    title: "Magasin",
    description: "Exemples de magasins rénovés pour un rendu moderne et attractif.",
    images: load_prestation_magasin()
  }
];

/* Gradients pour sections */
const gradients = [
  "linear-gradient(135deg, #252524, #726e6b)",
  "linear-gradient(135deg, #726e6b, #252524)",
  "linear-gradient(-135deg, #252524, #726e6b)",
  "linear-gradient(-135deg, #726e6b, #252524)",
  "linear-gradient(135deg, #252524, #726e6b)"
];

/* Composant Carousel */
const Carousel: React.FC<{ images: string[], title?: string, description?: string }> = ({ images, title, description }) => {
  const [current, setCurrent] = useState(0);

  // Slides : description en premier + images
  const slides = description
    ? [{ type: "description", content: description }, ...images.map(img => ({ type: "image", content: img }))]
    : images.map(img => ({ type: "image", content: img }));

  const nextSlide = () => setCurrent(prev => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent(prev => (prev - 1 + slides.length) % slides.length);

  const slide = slides[current];

  return (
    <div className="prestation-carousel-carousel">
      {title && <h3 className="prestation-carousel-title">{title}</h3>}

      <div className="prestation-carousel-inner">
        <button className="prestation-carousel-btn prev" onClick={prevSlide}>‹</button>

        {slide.type === "description" ? (
          <div className="prestation-carousel-description-container">
            <div className="prestation-carousel-description-box">
              <h4 className="prestation-carousel-description-title">
                {title}
              </h4>
              <p className="prestation-carousel-description-text">
                {slide.content}
              </p>
            </div>
          </div>
        ) : (
          <div className="prestation-carousel-slide">
            <img src={slide.content} alt={title || "image"} />
          </div>
        )}

        <button className="prestation-carousel-btn next" onClick={nextSlide}>›</button>
      </div>
    </div>
  );
};

/* Section avec Carousel */
const SectionWithCarousel: React.FC<{ section: { id: string; title: string; images: string[]; description?: string }; gradient: string }> = ({ section, gradient }) => {
  return (
    <section 
      id={section.id} 
      className="prestations-section" 
      style={{ background: gradient }}
    >
      <Carousel images={section.images} title={section.title} description={section.description} />
    </section>
  );
};

/* Composant principal Prestations */
const Prestations: React.FC = () => {
  return (
    <div className="prestations-page">

      {/* ==== Table des matières moderne ==== */}
      <section className="prestations-section toc-section" style={{ background: gradients[0] }}>
        <div className="toc-container">
          <h1 className="toc-title">Nos Prestations</h1>
          <ul className="toc-list">
            {sections.map(section => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="toc-link">
                  {section.title}
                  <span className="toc-link-arrow">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ==== Sections avec carousel ==== */}
      {sections.map((section, index) => (
        <SectionWithCarousel
          key={section.id}
          section={section}
          gradient={gradients[index + 1]}
        />
      ))}

    </div>
  );
};

export default Prestations;