import React, { Component } from "react";
import Index from "../page/index";
import ReactDedex from "../page/index";
export default class index extends Component {
  render() {
    return (
      <div>
        <p>redux</p>
        <Index />
        <p>react-redux</p>
        <ReactDedex />
      </div>
    );
  }
}
