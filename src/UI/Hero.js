import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1>Hola, soy Gise.</h1>
      <h2>
        Te invito a compartir exploraciones para que puedas diseñar tu vida cada
        vez más.
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Vitae tempus quam
        pellentesque nec nam aliquam sem et tortor. Lacus viverra vitae congue
        eu consequat ac.
      </p>
    </div>
  );
};

export default Hero;
