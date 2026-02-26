import React, { useState } from "react";

import TopBar from "./components/topbar";
import Hero from "./components/hero";
import Contact from "./components/contact"; // Footer
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

type Page = "Accueil" | "Prestations";

const App: React.FC = () => {
  const [page, setPage] = useState<Page>("Accueil");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Topbar */}
      <TopBar page={page} setPage={setPage} />

      {/* Contenu principal */}
      <main className="flex-1">
        {page === "Accueil" && <Hero />}
        {page === "Prestations" && <Prestations />}
        {/* On supprime le Contact ici */}
      </main>

      {/* Footer Contact affiché sur toutes les pages */}
      <Contact />

      {/* Toujours affiché */}
      <DemanderDevis />
    </div>
  );
  
};

export default App;