import React, { Fragment } from "react";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: "",
      shortName: "",
      plan: {},
      // TODO статус вынести в константу или объект
      status: "Stopped",
      actions: {}
    };
  }
  render() {
    const { project, shortName, plan, status, actions } = this.state;
    return (
      <td>
        <tr>{project}</tr>
        <tr>{shortName}</tr>
        <tr>{plan}</tr>
        <tr>{status}</tr>
        <tr>{actions}</tr>
      </td>
    );
  }
}
