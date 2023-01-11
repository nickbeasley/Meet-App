import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    inputNr: 32,
    infoTest: "",
    showError: false,
  };

  handleInputChanged = (e) => {
    this.props.updateNumberOfEvents(e.target.value);
    if (e.target.value === "") {
      this.setState({ inputNr: "" });
    } else if (e.target.value < 1 || e.target.value > 32) {
      this.setState({ showError: true });
    } else {
      this.setState({
        inputNr: e.target.value,
        showError: false,
      });
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <input
          type="number"
          className="number"
          value={this.state.inputNr}
          onChange={this.handleInputChanged}
        />
        {this.state.showError && (
          <ErrorAlert text="Please enter a number between 1 and 32" />
        )}
      </div>
    );
  }
}

export default NumberOfEvents;
