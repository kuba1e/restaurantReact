import React, { Component } from "react";
import ErrorIndicator from "../ErrorIndicator";

export default class ErrorBoundry extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    if (this.state.error) {
      return <ErrorIndicator error={this.state.error} />;
    }

    return this.props.children;
  }
}
