// src/App.tsx
import React, { useState } from "react";

import TopBar from "./components/topbar";
import Hero from "./components/hero";
import Contact from "./components/contact";
import Prestations from "./components/Prestations";
import DemanderDevis from "./components/DemanderDevis";

import "./css/base.css";
import "./css/carousel.css";
import "./css/contact.css";
import "./css/hero.css";
import "./css/layout.css";
import "./css/responsive.css";
import "./css/topbar.css";
import "./css/Prestations.css";
import "./css/DemanderDevis.css";
import "./css/ReviewForm.css";
import "./css/Avis.css";

type Page = "Accueil" | "Prestations" | "Contact";

const App: React.FC = () => {
  const [page, setPage] = useState<Page>("Accueil");

  return (
    <div className="app">
      <TopBar page={page} setPage={setPage} />

      {page === "Accueil" && <Hero />}
      {page === "Prestations" && <Prestations />}
      {page === "Contact" && <Contact />}

      {/* Affiché sur toutes les pages */}
      <DemanderDevis />
    </div>
  );
};

export default App;