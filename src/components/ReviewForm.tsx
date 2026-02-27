import React, { useState } from "react";

import "../css/ReviewForm.css";

interface ReviewFormProps {
  onSubmit: (note: number, commentaire: string) => void;
  onCancel: () => void;
  loading: boolean;
}

const Mail: React.FC<ReviewFormProps> = ({ onSubmit, onCancel, loading }) => {
  const [note, setNote] = useState(5);
  const [hoverNote, setHoverNote] = useState<number | null>(null);
  const [commentaire, setCommentaire] = useState("");

  const handleSubmit = () => onSubmit(note, commentaire);

  return (
    <div className="mail-section">
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
        <button className="btn-cancel" onClick={() => { setCommentaire(""); onCancel(); }}>
            Annuler
        </button>
        </div>
    </div>
  );
};

export default Mail;