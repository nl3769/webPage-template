// src/components/Hero.tsx
import React from "react";
import Carousel from "./carousel";
import { load_prestation_example_images } from "../utils/loader";

const images = load_prestation_example_images();

const Hero: React.FC = () => (
  <section className="hero">
    <div className="hero-content">
      <h2>Welcome to my page</h2>
      <p>
        Blabla. Blablabla blablablab abblabla. Blablabla blablablab ab.blabla.
        Blablabla blablablab ab blabla. Blablabla blablablab ab v
      </p>
      <Carousel images={images} />
    </div>
  </section>
);

export default Hero;