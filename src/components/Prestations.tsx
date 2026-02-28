// src/components/Prestations.tsx
import React from "react";
import "../css/Prestations.css";

const sections = [
  { id: "Salle de bain", title: "Salle de bain" },
  { id: "Cuisine", title: "Cuisine" },
  { id: "Terrasse", title: "Terrasse" },
  { id: "Magasin", title: "Magasin" }
];

const gradients = [
  "linear-gradient(135deg, #252524, #726e6b)",
  "linear-gradient(135deg, #726e6b, #252524)",
  "linear-gradient(-135deg, #252524, #726e6b)",
  "linear-gradient(-135deg, #726e6b, #252524)",
  "linear-gradient(135deg, #252524, #726e6b)"
];

const Prestations: React.FC = () => {
  return (
    <div className="prestations-page">
      
      {/* First Page - Modern Table of Contents */}
      <section
        className="prestations-section toc-section"
        style={{ background: gradients[0] }}
      >
        <div className="toc-container">
          <h1 className="toc-title">Préstation</h1>
          <ul className="toc-list">
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="toc-link">
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Other Pages */}
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className="prestations-section"
          style={{ background: gradients[index + 1] }}
        >
          <h2>{section.title}</h2>
        </section>
      ))}
    </div>
  );
};

export default Prestations;