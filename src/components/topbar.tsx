// src/components/TopBar.tsx
import React, { useState } from "react";
import logo from "/images/logo/logo.png";
import MenuPrestations from "./MenuPrestations";

interface TopBarProps {
  showContact: boolean;
  setShowContact: (show: boolean) => void;
  onSelectPrestation?: (item: string) => void;
}

const TopBar: React.FC<TopBarProps> = ({
  showContact,
  setShowContact,
  onSelectPrestation,
}) => {
  const [showPrestations, setShowPrestations] = useState(false);

  const prestationsItems = ["Chambre", "Menu", "Activité", "Spa"];

  return (
    <div className="top-bar">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>

      <div className="nav-links">
        <button
          className={!showContact ? "active" : ""}
          onClick={() => setShowContact(false)}
        >
          Accueil
        </button>

        <MenuPrestations
          items={prestationsItems}
          onSelect={(item) => {
            setShowPrestations(false);
            onSelectPrestation && onSelectPrestation(item);
          }}
        />

        <button
          className={showContact ? "active" : ""}
          onClick={() => setShowContact(true)}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default TopBar;