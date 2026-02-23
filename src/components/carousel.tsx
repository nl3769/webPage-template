import React, { useState, useEffect } from "react";

interface CarouselProps {
  images: string[];
}

interface Avis {
  _id: string;
  note: number;
  commentaire: string;
  createdAt: string;
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [avisList, setAvisList] = useState<Avis[]>([]);
  const [loading, setLoading] = useState(false);
  const [commentaire, setCommentaire] = useState("");
  const [note, setNote] = useState(5);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const envoyerAvis = async () => {
    if (!commentaire.trim()) return alert("❌ Merci d'écrire un commentaire !");
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/avis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ note, commentaire }),
      });

      if (response.ok) {
        alert("✅ Avis envoyé !");
        setCommentaire(""); // vide le champ après envoi
        setNote(5);
        chargerAvis();
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

  const chargerAvis = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/avis");
      const data: Avis[] = await response.json();
      setAvisList(data);
    } catch (err) {
      console.error("Erreur lors du chargement des avis :", err);
    }
  };

  useEffect(() => {
    chargerAvis();
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-image-container">
        <img src={images[currentIndex]} alt={`Photo ${currentIndex + 1}`} />
        <div className="nav left" onClick={prevImage}>❮</div>
        <div className="nav right" onClick={nextImage}>❯</div>
      </div>

      {/* Formulaire pour écrire un avis */}
      <div style={{ width: "600px", marginTop: "15px" }}>
        <label>
          Note :
          <input
            type="number"
            min={1}
            max={5}
            value={note}
            onChange={(e) => setNote(Number(e.target.value))}
            style={{ marginLeft: "8px", width: "50px" }}
          />
        </label>
        <br />
        <label>
          Commentaire :
          <textarea
            value={commentaire}
            onChange={(e) => setCommentaire(e.target.value)}
            rows={3}
            style={{ width: "100%", marginTop: "5px", padding: "5px" }}
          />
        </label>
        <button onClick={envoyerAvis} disabled={loading} style={{ marginTop: "10px" }}>
          {loading ? "Envoi..." : "Envoyer un avis"}
        </button>
      </div>

      <div className="avis-list">
        <h3>Avis des utilisateurs :</h3>
        {avisList.length === 0 ? (
          <p>Aucun avis pour le moment.</p>
        ) : (
          <ul>
            {avisList.map((avis) => (
              <li key={avis._id}>
                <strong>Note :</strong> {avis.note} |{" "}
                <strong>Commentaire :</strong> {avis.commentaire} |{" "}
                <em>{new Date(avis.createdAt).toLocaleString()}</em>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Carousel;