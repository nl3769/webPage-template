import React from "react";

const Contact: React.FC = () => {
  const adresse = encodeURIComponent("123 Rue Exemple, XXXXXXX BLABAL");

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
                123 Rue Exemple, XXXXXXX BLABAL
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