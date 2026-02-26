import React from "react";

const Contact: React.FC = () => {
  return (
    <footer className="contact-footer">
      <div className="container">
        <div className="contact-cards">
          <div className="contact-card">
            <span className="icon">📍</span>
            <p>123 Rue Exemple, XXXXXXX BLABAL</p>
          </div>
          <div className="contact-card">
            <span className="icon">📞</span>
            <p><a href="tel:+33123456789">92783929378338</a></p>
          </div>
          <div className="contact-card">
            <span className="icon">✉️</span>
            <p><a href="mailto:blablabla@nmqnm.fr">blablabla@nmqnm.fr</a></p>
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