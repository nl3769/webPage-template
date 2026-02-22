import React, { useState } from "react";
import "./css/style.css";
import img1 from "/images/prestation/examples/image_1.png";
import img2 from "/images/prestation/examples/image_2.png";
import logo from "/images/logo/logo.png";

const images = [img1, img2];

const Main: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContact, setShowContact] = useState(false);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="app">
      {/* Top bar */}
      <div className="top-bar">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="top-menu">
          <ul>
            <li><button onClick={() => setShowContact(false)}>Accueil</button></li>
            <li><button onClick={() => setShowContact(true)}>Contact</button></li>
          </ul>
        </nav>
      </div>

      {/* Contenu principal */}
      {!showContact ? (
        <section className="hero">
          <div className="hero-content">
            <h2>Bienvenue sur Fancy Web</h2>
            <p>Un design moderne avec effet glassmorphism et animations CSS.</p>

            <div className="carousel">
              <div className="carousel-image-container">
                <img
                  src={images[currentIndex]}
                  alt={`Photo ${currentIndex + 1}`}
                />
                <div className="nav left" onClick={prevImage}>❮</div>
                <div className="nav right" onClick={nextImage}>❯</div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="contact-section">
          <div className="contact-container">
            {/* Formulaire / message */}
            <div className="contact-form">
              <h2>Contactez-nous</h2>
              <p>Envoyez-nous un message via le formulaire :</p>
              {/* Tu peux ajouter ton formulaire ici */}
            </div>

            {/* Infos de contact */}
            <div className="contact-info">
              <h3>Nos coordonnées</h3>
              <p>📍 Adresse : 123 Rue Exemple, 75000 Paris</p>
              <p>📞 Téléphone : +33 1 23 45 67 89</p>
              <p>✉️ Email : contact@fancyweb.fr</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Main;