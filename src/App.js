import React, { Component } from "react";
import "./Resources/style.css";
import Item from "./components/Calculator";
export default class App extends Component {
  state = {
    temp: "0",
    screenInput: "0",
    operation: null,
    tracking: "",
    tempReset: false,
  };
  numbersAndOperations = [
    "AC",
    "+/-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];
  onChange = (e, key) => {
    if (key === "screenInput") {
      const num = this.state.screenInput;

      if (num === "0" || this.state.tempReset) {
        this.setState({
          screenInput: e.target.value.slice(
            e.target.value.length - 1,
            e.target.value.length
          ),
          tempReset: false,
        });
      } else {
        this.setState({ screenInput: e.target.value });
      }
    }
  };

  preformOperation = (operation) => {
    if (operation) {
      let temp;
      switch (operation) {
        case "+":
          temp =
            parseFloat(this.state.temp) + parseFloat(this.state.screenInput);
          break;
        case "-":
          temp =
            parseFloat(this.state.temp) - parseFloat(this.state.screenInput);
          break;
        case "*":
          temp =
            parseFloat(this.state.temp) * parseFloat(this.state.screenInput);
          break;
        case "/":
          temp =
            parseFloat(this.state.temp) / parseFloat(this.state.screenInput);
          break;
        case "%":
          temp =
            parseFloat(this.state.temp) % parseFloat(this.state.screenInput);
          break;
        default:
          temp = "0";
      }
      return temp;
    } else {
      return this.state.screenInput;
    }
  };

  clear = () => {
    this.setState({
      temp: "0",
      screenInput: "0",
      operation: null,
      tracking: "",
      tempReset: false,
    });
  };

  onClick = (item) => {
    if (isNaN(item) && item !== ".") {
      if (item === "=") {
        let temp = this.preformOperation(this.state.operation);

        this.setState({
          screenInput: temp.toString(),
          temp: temp.toString(),
          operation: null,
          tempReset: true,
        });
      } else if (item !== "AC") {
        if (!this.state.tempReset) {
          let temp = this.preformOperation(this.state.operation);
          this.setState({
            temp: temp.toString(),
            operation: item,
            // tracking: item + " " + this.state.screenInput,
            screenInput: temp.toString(),
            tempReset: true,
          });
        } else {
          this.setState({ operation: item });
        }
      } else {
        this.clear();
      }
    } else {
      let num = this.state.screenInput;
      if (!this.state.operation) {
        this.setState({ temp: "0" });
      }
      if (num === "0" || this.state.tempReset) {
        this.setState({ screenInput: item, tempReset: false });
      } else {
        if (item === ".")
          this.setState({ screenInput: item + this.state.screenInput });
        else this.setState({ screenInput: this.state.screenInput + item });
      }
    }
  };
  render() {
    return (
      <div className="calculator">
        <div dir="rtl" className="input-tracking">
          {this.state.tracking}
        </div>
        <input
          dir="rtl"
          value={this.state.screenInput}
          onChange={(e) => this.onChange(e, "screenInput")}
          type="text"
          className="screen-input"
        />
        <div className="control-container">
          {this.numbersAndOperations.map((item, i) => {
            return <Item onClick={this.onClick} key={i} item={item} />;
          })}
        </div>
      </div>
    );
  }
}
