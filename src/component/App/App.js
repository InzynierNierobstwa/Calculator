import React from "react";
import styles from "./App.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import ClearButton from "../ClearButton/ClearButton";
import BackspaceButton from "../BackspaceButton/BackspaceButton";
import * as math from "mathjs";

class App extends React.Component {
  state = {
    input: "",
    char: ["+", "-", "*", "/"],
    canAddDecimalDot: true
  };

  handleClearButton = () => {
    this.setState({ input: "" });
  };

  handleBackspace = () => {
    this.setState({
      input: this.state.input.slice(0, this.state.input.length - 1)
    });
  };

  addToInput = value => {
    this.setState({ input: this.state.input + value });
  };

  handleEqual = () => {
    if (this.state.input.length > 1) {
      this.setState({ input: math.evaluate(this.state.input) });
    }
  };

  addOperators = value => {
    const lastChar = this.state.input[this.state.input.length - 1];
    if (!this.state.char.includes(lastChar) && this.state.input.length > 0) {
      this.addToInput(value);
    }
  };

  addDecimalDot = value => {
    if (this.state.canAddDecimalDot) {
      this.addToInput(value);
      this.setState({ canAddDecimalDot: false });
    }
  };

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.app__calculator}>
          <Input input={this.state.input} />
          <div className={styles.app__row}>
            <Button handleClickFn={this.addToInput}>7</Button>
            <Button handleClickFn={this.addToInput}>8</Button>
            <Button handleClickFn={this.addToInput}>9</Button>
            <Button handleClickFn={this.addOperators}>/</Button>
          </div>
          <div className={styles.app__row}>
            <Button handleClickFn={this.addToInput}>4</Button>
            <Button handleClickFn={this.addToInput}>5</Button>
            <Button handleClickFn={this.addToInput}>6</Button>
            <Button handleClickFn={this.addOperators}>*</Button>
          </div>
          <div className={styles.app__row}>
            <Button handleClickFn={this.addToInput}>1</Button>
            <Button handleClickFn={this.addToInput}>2</Button>
            <Button handleClickFn={this.addToInput}>3</Button>
            <Button handleClickFn={this.addOperators}>+</Button>
          </div>
          <div className={styles.app__row}>
            <Button handleClickFn={this.addDecimalDot}>.</Button>
            <Button handleClickFn={this.addToInput}>0</Button>
            <Button handleClickFn={this.handleEqual}>=</Button>
            <Button handleClickFn={this.addOperators}>-</Button>
          </div>
          <div className={styles.app__row}>
            <ClearButton handleClearFn={() => this.handleClearButton()}>
              CE
            </ClearButton>
            <BackspaceButton handleBackspaceFn={() => this.handleBackspace()}>
              C
            </BackspaceButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
