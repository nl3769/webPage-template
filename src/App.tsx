import React, { useState } from "react";

import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import Contact from "./components/Contact"; // Footer
import Prestations from "./components/Prestations";
import DemanderDevis from "./components/DemanderDevis";

import "./css/Base.css";
import "./css/Layout.css";
import "./css/Responsive.css";

type Page = "Accueil" | "Prestations";

const App: React.FC = () => {
  const [page, setPage] = useState<Page>("Accueil");

  return (
  <>
    {/* Layout principal */}
    <div className="flex flex-col min-h-screen">
      {/* Topbar */}
      <TopBar page={page} setPage={setPage} />

      {/* Contenu principal qui prend tout l’espace restant */}
      <main className="flex-1">
        {page === "Accueil" && <Hero />}
        {page === "Prestations" && <Prestations />}
      </main>
    </div>

    {/* Footer hors du container flex-1 */}
    <Contact />

    {/* Bouton flottant toujours visible */}
    <DemanderDevis />
  </>
);
  
};

export default App;