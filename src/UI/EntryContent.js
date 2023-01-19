import React from "react";
import styles from "./EntryContent.module.css";

const EntryContent = (props) => {
  return (
    <div className={styles.entry}>
      <h1>{props.title} </h1>
      <p>{props.text}</p>
    </div>
  );
};

export default EntryContent;
