// src/components/Hero.tsx
import React from "react";
import Carousel from "./carousel";
import { load_prestation_example_images } from "../utils/loader";

const images = load_prestation_example_images();

const Hero: React.FC = () => (
  <section className="hero">
    <div className="hero-content">
      <h2>NOM ENTREPRISE - ACTIVITE</h2>
      <p>
        il faut bosser avec nous parce que truc. Aussi on propose ces services, donc machin truc. Aussi on a bcp d'experience, et la satisfaction clientele et notre priorité et mahcin truc.
      </p>
      <Carousel images={images} />
    </div>
  </section>
);

export default Hero;