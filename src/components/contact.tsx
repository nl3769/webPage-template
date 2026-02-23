import React, { useState } from "react";

import SendMail from "./SendMail";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [sendMailTrigger, setSendMailTrigger] = useState(0);
  const [pendingSend, setPendingSend] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);
    setPendingSend(true);
    setSendMailTrigger((t) => t + 1);
  };

  const handleMailResult = (success: boolean, message: string) => {
    setStatusMessage(message);
    setPendingSend(false);
    if (success) {
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="contact-section px-4 py-8">
      <div className="contact-container max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Formulaire */}
        <div className="contact-form flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
          <p className="mb-6">Envoyez-nous un message via le formulaire :</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
              disabled={pendingSend}
            >
              Envoyer
            </button>
            {pendingSend && (
              <SendMail
                formData={formData}
                onResult={handleMailResult}
                resetTrigger={sendMailTrigger}
              />
            )}
            {statusMessage && !pendingSend && (
              <p className="status-message mt-2">{statusMessage}</p>
            )}
          </form>
        </div>

        {/* Informations de contact */}
        <div className="contact-info flex-1 bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Nos coordonnées</h3>
          <p className="mb-2">📍 Adresse : 123 Rue Exemple, 75000 Paris</p>
          <p className="mb-2">📞 Téléphone : +33 1 23 45 67 89</p>
          <p>✉️ Email : contact@fancyweb.fr</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;