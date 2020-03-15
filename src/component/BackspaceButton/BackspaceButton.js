import React from "react";
import styles from "./BackspaceButton.module.css";

const BackspaceButton = props => {
  return (
    <div className={styles.backspaceButton} onClick={props.handleBackspaceFn}>
      {props.children}
    </div>
  );
};

export default BackspaceButton;
