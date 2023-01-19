import React from "react";
import styles from "./header.module.css";
import logo from "../Assets/Assets-img/logo-isoptipo.png";
const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} className={styles.img}></img>
      <ul className={styles.nav}>
        <li>Inicio</li>
        <li>Talleres</li>
        <li>Recursos</li>
        <li>Productos</li>
        <li>Sobre Gise</li>
        <li>Contacto</li>
        <li> </li>
      </ul>
    </div>
  );
};

export default Header;
