// src/App.tsx
import React, { useState } from "react";

import TopBar from "./components/topbar";
import Hero from "./components/hero";
import Contact from "./components/contact";

import "./css/base.css";
import "./css/carousel.css";
import "./css/contact.css";
import "./css/hero.css";
import "./css/layout.css";
import "./css/responsive.css";
import "./css/topbar.css";
import "./css/MenuPrestations.css";


const App: React.FC = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="app">
      <TopBar showContact={showContact} setShowContact={setShowContact} />
      {showContact ? <Contact /> : <Hero />}
    </div>
  );
};

export default App;