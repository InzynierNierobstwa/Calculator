import React from "react";
import styles from "./App.module.css";
import Button from "../Button/Button";

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.app__calculator}>
          <div className={styles.app__row}>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>/</Button>
          </div>
          <div className={styles.app__row}>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>X</Button>
          </div>
          <div className={styles.app__row}>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>+</Button>
          </div>
          <div className={styles.app__row}>
            <Button>.</Button>
            <Button>0</Button>
            <Button>=</Button>
            <Button>-</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
