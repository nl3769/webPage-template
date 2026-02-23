// src/components/Avis.tsx
import React from "react";
import "../css/Avis.css";

export interface AvisType {
  _id: string;
  note: number;
  commentaire: string;
  createdAt: string;
}

interface AvisProps {
  avisList: AvisType[];
}

const Avis: React.FC<AvisProps> = ({ avisList }) => {
  return (
    <div className="avis-section">
      <h3>Avis des utilisateurs :</h3>
      {avisList.length === 0 ? (
        <p>Aucun avis pour le moment.</p>
      ) : (
        <ul>
          {avisList.map((avis) => (
            <li key={avis._id}>
              <div className="note-date">
                <span className="star-rating">
                  {"★".repeat(avis.note) + "☆".repeat(5 - avis.note)}
                </span>
                <span>
                  {new Date(avis.createdAt).toLocaleDateString("fr-FR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="commentaire">{avis.commentaire}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Avis;