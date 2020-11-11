import React from "react";
import { brokders } from "../models/Funds";

class TableComponent extends React.Component {
  componentDidMount() {
    brokders()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return <div></div>;
  }
}

export default TableComponent;
