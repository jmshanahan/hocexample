import React, { Component } from "react";
import TableRow from "./TableRow";

export default class UserList extends Component {
  tabRow() {
    if (this.props.data instanceof Array) {
      {
        return this.props.data.map(function(object, i) {
          return <TableRow obj={object} key={i} />;
        });
      }
    }
  }
  render() {
    return (
      <div className="container">
        <table className="table table-striped">
          <thead>
            <td>ID</td>
            <td>Name</td>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
