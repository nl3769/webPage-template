// src/components/SendMail.tsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

interface SendMailProps {
  formData: { user_name: string; user_email: string; message: string };
  onResult: (success: boolean, message: string) => void;
  sendTrigger: boolean; // déclenché quand l'utilisateur clique sur Envoyer
}

const SendMail: React.FC<SendMailProps> = ({ formData, onResult, sendTrigger }) => {
  const [loading, setLoading] = useState(false);
  const [sentOnce, setSentOnce] = useState(false); // empêche double envoi

  const sendMail = async () => {
    if (loading || sentOnce) return; // si déjà envoyé ou en cours, on bloque
    if (!formData.user_name || !formData.user_email || !formData.message) {
      onResult(false, "❌ Veuillez remplir tous les champs !");
      return;
    }

    setLoading(true);
    let timedOut = false;

    const timeoutId = setTimeout(() => {
      timedOut = true;
      setLoading(false);
      onResult(false, "⏱️ Délai d'envoi dépassé !");
    }, 10000);

    try {
      console.log("Envoi du mail avec les données :", formData);
      await emailjs.send(
        "service_c94tqpj",
        "template_si182zr",
        formData,
        "cT0LHAtAA9KW7r4Kn"
      );

      if (!timedOut) {
        clearTimeout(timeoutId);
        setLoading(false);
        setSentOnce(true);
        onResult(true, "✅ Message envoyé avec succès !");
      }
    } catch (error: any) {
      if (!timedOut) {
        clearTimeout(timeoutId);
        setLoading(false);
        onResult(false, `❌ Erreur : ${error.message || "Impossible d'envoyer le mail"}`);
        console.error(error);
      }
    }
  };

  // Déclenche l'envoi uniquement quand sendTrigger devient true
  React.useEffect(() => {
    if (sendTrigger) {
      sendMail();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendTrigger]);

  return (
    <div>
      <button onClick={sendMail} disabled={loading || sentOnce}>
        {loading ? "Envoi..." : sentOnce ? "Envoyé" : "Réessayer"}
      </button>
    </div>
  );
};

export default SendMail;