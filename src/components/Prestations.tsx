// src/components/Prestations.tsx
import React from "react";

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
      {gradients.map((gradient, index) => (
        <section
          key={index}
          className="prestations-section"
          style={{ background: gradient }}
        >
          <h2>Page {index + 1}</h2>
        </section>
      ))}
    </div>
  );
};

export default Prestations;