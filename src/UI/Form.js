import React from "react";
import styles from "./Form.module.css";
import Button from "./Button";

const Form = () => {
  return (
    <div className={styles.form}>
      <input type="text" name />
      <input type="email" id="email" name="email" />
      <Button>Suscribirme</Button>
    </div>
  );
};

export default Form;
