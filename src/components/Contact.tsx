import React from "react";

import "../css/Contact.css";

const Contact: React.FC = () => {
  const adresse = encodeURIComponent("11 rue des moulins, 37190, Vallères");

  return (
    <footer className="contact-footer">
      <div className="container">
        <div className="contact-cards">
          {/* Adresse cliquable */}
          <div className="contact-card address-card">
            <span className="icon">📍</span>
            <p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${adresse}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                11 rue des moulins, 37190, Vallères
              </a>
            </p>
          </div>

          {/* Téléphone */}
          <div className="contact-card phone-card">
            <span className="icon">📞</span>
            <p>
              <a href="tel:+33123456789">92783929378338</a>
            </p>
          </div>

          {/* Email */}
          <div className="contact-card email-card">
            <span className="icon">✉️</span>
            <p>
              <a href="mailto:blablabla@nmqnm.fr">blablabla@nmqnm.fr</a>
            </p>
          </div>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} blablabl. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Contact;