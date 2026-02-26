// src/components/TopBar.tsx
import React from "react";
import logo from "/images/logo/logo.png";

interface TopBarProps {
  page: "Accueil" | "Prestations" | "Contact";
  setPage: (page: "Accueil" | "Prestations" | "Contact") => void;
}

const TopBar: React.FC<TopBarProps> = ({ page, setPage }) => {
  return (
    <div className="top-bar">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>

      <div className="nav-links">
        <button
          className={page === "Accueil" ? "active" : ""}
          onClick={() => setPage("Accueil")}
        >
          Accueil
        </button>

        <button
          className={page === "Prestations" ? "active" : ""}
          onClick={() => setPage("Prestations")}
        >
          Prestations
        </button>
      </div>
    </div>
  );
};

export default TopBar;