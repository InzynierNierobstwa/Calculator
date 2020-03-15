import React from "react";
import styles from "./Button.module.css";

const isOperator = value => {
  return !isNaN(value) || value === "." || value === "=";
};

const Button = props => {
  return (
    <div
      className={
        isOperator(props.children)
          ? styles.button__number
          : styles.button__operator
      }
      onClick={() => props.handleClickFn(props.children)}
    >
      {props.children}
    </div>
  );
};

export default Button;
