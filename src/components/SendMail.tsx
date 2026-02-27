// src/components/SendMail.tsx
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import "../css/SendMail.css";

interface SendMailProps {
  formData: { user_name: string; user_email: string; message: string };
  onResult: (success: boolean, message: string) => void;
  sendTrigger: boolean;
}

const SendMail: React.FC<SendMailProps> = ({ formData, onResult, sendTrigger }) => {
  const [loading, setLoading] = useState(false);
  const [sentOnce, setSentOnce] = useState(false);

  const sendMail = async () => {
    if (loading || sentOnce) return;

    if (!formData.user_name || !formData.user_email || !formData.message) {
      onResult(false, "❌ Veuillez remplir tous les champs !");
      return;
    }

    // Vérification simple email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.user_email)) {
      onResult(false, "❌ Email invalide !");
      return;
    }

    setLoading(true);

    const templateParams = {
      name: formData.user_name,
      email: formData.user_email,
      message: formData.message,
      title: "Nouveau message depuis le site",
      time: new Date().toLocaleString("fr-FR"),
    };

    try {
      await emailjs.send(
        "service_c94tqpj",
        "template_si182zr",
        templateParams,
        "cT0LHAtAA9KW7r4Kn"
      );

      setSentOnce(true);
      onResult(true, "✅ Message envoyé avec succès !");
    } catch (error: any) {
      console.error("Erreur EmailJS :", error);
      onResult(false, "❌ Impossible d'envoyer le message.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (sendTrigger) {
      sendMail();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendTrigger]);

  return (
    <>
      {loading && (
        <div className="loading-overlay">
          <div className="loading-box">
            <div className="spinner"></div>
            <p>Envoi en cours...</p>
          </div>
        </div>
      )}
  
      <div>
        <button onClick={sendMail} disabled={loading || sentOnce}>
          {loading ? "Envoi..." : sentOnce ? "Envoyé" : "Envoyer"}
        </button>
      </div>
    </>
  );
};

export default SendMail;