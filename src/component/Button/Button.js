import React from "react";
import styles from "./Button.module.css";

const isOperator = value => {
  return !isNaN(value) || value === "." || value === "=";
};

const Button = props => {
  return (
    <button
      className={
        isOperator(props.children)
          ? styles.button__number
          : styles.button__operator
      }
    >
      {props.children}
    </button>
  );
};

export default Button;
