import React, { useState } from "react";
import "../css/ReviewForm.css";

interface ReviewFormProps {
  onCancel: () => void;
  loading: boolean;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onCancel, loading }) => {
  const [note, setNote] = useState(5);
  const [hoverNote, setHoverNote] = useState<number | null>(null);
  const [commentaire, setCommentaire] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");

  const handleSubmit = async () => {
    if (!nom.trim() || !prenom.trim()) {
      alert("Veuillez remplir le nom et le prénom !");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/avis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nom, prenom, note, commentaire }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi de l'avis");
      }

      const data = await response.json();
      console.log("📝 Avis envoyé :", data);

      // Reset du formulaire
      setNom("");
      setPrenom("");
      setCommentaire("");
      setNote(5);

      alert("Avis envoyé avec succès !");
    } catch (err) {
      console.error(err);
      alert("Impossible d'envoyer l'avis.");
    }
  };

  return (
    <div className="mail-section">
      <div className="name-container">
        <label className="required-label">
          Nom
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </label>

        <label className="required-label">
          Prénom
          <input
            type="text"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
          />
        </label>
      </div>

      <label>
        Note :
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className={`star ${i <= (hoverNote ?? note) ? "filled" : ""}`}
              onMouseEnter={() => setHoverNote(i)}
              onMouseLeave={() => setHoverNote(null)}
              onClick={() => setNote(i)}
            >
              ★
            </span>
          ))}
        </div>
      </label>

      <label>
        Commentaire :
        <textarea
          value={commentaire}
          onChange={(e) => setCommentaire(e.target.value)}
          rows={4}
        />
      </label>

      <div className="mail-buttons">
        <button className="btn-submit" onClick={handleSubmit} disabled={loading}>
          {loading ? "Envoi..." : "Envoyer"}
        </button>
        <button
          className="btn-cancel"
          onClick={() => {
            setNom("");
            setPrenom("");
            setCommentaire("");
            setNote(5);
            onCancel();
          }}
        >
          Annuler
        </button>
      </div>
    </div>
  );
};

export default ReviewForm;