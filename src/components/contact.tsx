import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    try {
        // https://dashboard.emailjs.com
      await emailjs.send(
        "service_c94tqpj",    // Remplace par ton Service ID EmailJS
        "template_si182zr",   // Remplace par ton Template ID EmailJS
        formData,
        "cT0LHAtAA9KW7r4Kn"     // Remplace par ta clé publique EmailJS
      );
      setStatusMessage("✅ Message envoyé avec succès !");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatusMessage("❌ Une erreur est survenue, veuillez réessayer.");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-form">
          <h2>Contactez-nous</h2>
          <p>Envoyez-nous un message via le formulaire :</p>
          <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Votre nom" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Votre email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Votre message" value={formData.message} onChange={handleChange} required />
            <button type="submit">Envoyer</button>
            {statusMessage && <p className="status-message">{statusMessage}</p>}
          </form>
        </div>

        <div className="contact-info">
          <h3>Nos coordonnées</h3>
          <p>📍 Adresse : 123 Rue Exemple, 75000 Paris</p>
          <p>📞 Téléphone : +33 1 23 45 67 89</p>
          <p>✉️ Email : contact@fancyweb.fr</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
