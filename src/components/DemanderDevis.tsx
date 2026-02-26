// src/components/DemanderDevis.tsx
import React, { useState } from "react";
import SendMail from "./SendMail";

const DEFAULT_MESSAGE = `Bonjour,

Je souhaiterais obtenir un devis pour la prestation suivante :

- Description du besoin :
- Quantité / surface approximative :
- Numéro de téléphone :
- Informations complémentaires :

Merci par avance pour votre retour.

Cordialement,
`;

const DemanderDevis: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(DEFAULT_MESSAGE);

  const [sendTrigger, setSendTrigger] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [pendingSend, setPendingSend] = useState(false);

  const sendDevis = () => {
    if (!name || !email || !message) {
      alert("❌ Merci de remplir tous les champs !");
      return;
    }

    setPendingSend(true);
    setStatusMessage(null);
    setSendTrigger(true); // déclenche l'envoi dans SendMail
  };

  const handleMailResult = (success: boolean, msg: string) => {
    setStatusMessage(msg);
    setPendingSend(false);

    if (success) {
      setName("");
      setEmail("");
      setMessage(DEFAULT_MESSAGE);
      setOpen(false);
      setSendTrigger(false); // reset trigger
    } else {
      setTimeout(() => setSendTrigger(false), 2000); // reset pour retry manuel
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      <button className="quote-button" onClick={() => setOpen(true)}>
        Demander un devis
      </button>

      {/* Overlay + formulaire */}
      {open && (
        <div
          className="quote-overlay"
          onClick={() => !pendingSend && setOpen(false)}
        >
          <div
            className="quote-form-container"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Demande de devis</h3>

            <div className="quote-row">
              <label>
                Nom
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>

            <div className="quote-message-wrapper">
              <label>Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className="quote-actions">
              <button
                className="send"
                onClick={sendDevis}
                disabled={pendingSend}
              >
                Envoyer
              </button>
              <button
                className="cancel"
                onClick={() => setOpen(false)}
                disabled={pendingSend}
              >
                Annuler
              </button>
            </div>

            {statusMessage && !pendingSend && (
              <p className="status-message">{statusMessage}</p>
            )}
          </div>
        </div>
      )}

      {/* Modal SendMail */}
      {sendTrigger && (
        <div className="quote-modal-overlay">
          <div className="quote-modal-content">
            <SendMail
              formData={{ user_name: name, user_email: email, message }}
              onResult={handleMailResult}
              sendTrigger={sendTrigger}
            />
            {statusMessage && (
              <p className="status-message mt-2">{statusMessage}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DemanderDevis;