import React from "react";
import styles from "./ClearButton.module.css";

const ClearButton = props => {
  return (
    <div className={styles.clearButton} onClick={props.handleClearFn}>
      {props.children}
    </div>
  );
};

export default ClearButton;
