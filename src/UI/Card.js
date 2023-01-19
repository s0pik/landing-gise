import React from "react";
import styles from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.imgUrl}></img>
      <h2> {props.title}</h2>
      <h3> {props.subtitle}</h3>
      <p>{props.text}</p>
      <footer>{props.url}</footer>
    </div>
  );
};

export default Card;
