import React, { useState } from "react";
import emailjs from "@emailjs/browser";

interface SendMailProps {
  formData: { name: string; email: string; message: string };
  onResult: (success: boolean, message: string) => void;
  resetTrigger: number; // pour relancer l'envoi si besoin
}

const SendMail: React.FC<SendMailProps> = ({ formData, onResult, resetTrigger }) => {
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (!formData.name && !formData.email && !formData.message) return;
    setLoading(true);
    emailjs
      .send(
        "service_c94tqpj",
        "template_si182zr",
        formData,
        "cT0LHAtAA9KW7r4Kn"
      )
      .then(() => {
        setLoading(false);
        onResult(true, "✅ Message envoyé avec succès !");
      })
      .catch((error) => {
        setLoading(false);
        onResult(false, "❌ Une erreur est survenue, veuillez réessayer.");
        console.error(error);
      });
    // eslint-disable-next-line
  }, [resetTrigger]);

  return loading ? <p className="status-message mt-2">Envoi...</p> : null;
};

export default SendMail;