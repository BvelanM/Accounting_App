import React, { useState, useEffect , Component} from "react";
import "../css/tax.css";
import { CheckBox } from "@mui/icons-material";

class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      total: "",
      choice1:"1",
      choice2:"1",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.calculate = this.calculate.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }
  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  handleCheck(e){
    console.log(e);
    if(e=="GST") {
      this.state.choice1 = "0.05";
    }
    else if(e=="Import Tax"){
      this.state.choice2 = "0.18";
    }
  }
  calculate() {
    if (isNaN(this.state.value)) {
      alert("Please enter a valid number");
      this.setState({
        value: "",
        total: "",
      });
    } else {
      this.setState({
        total:
          "$" +
          (
            Number(this.state.value) +
            Number(this.state.value) * ( Number(this.state.choice1) + Number(this.state.choice2))
          ).toFixed(2),
        value: "",
      });
    }
  }
  render() {
    return (
      <div className="calc">
        <form onSubmit={this.handleSubmit} className="container">
          <h1 className="title">Sales Tax Calculator</h1>
          <div className="input-container">
            <label className="labels" for="price">
              Price:{" "}
            </label>
            <input
              id="price"
              type="text"
              placeholder="Price"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input
              id="submit"
              value="Submit"
              type="submit"
              onClick={this.calculate}
            />
            <div>
              <h3>Your total will be:</h3>
              <h3 className="total">{this.state.total}</h3>
            </div>
              <input type="checkbox" value={"GST"} id="gst" onClick={this.handleCheck("GST")}></input>
                <label for="gst"> GST</label><br></br>
              <input type="checkbox" id="imt" onClick={this.handleCheck("Import Tax")}></input>
              <label for="imt"> Import Tax</label><br></br>
          </div>
        </form>
      </div>
    );
  }
}

export default Calc;