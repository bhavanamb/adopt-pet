//mostly code form reactjs.org

import React from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundaries extends React.Component {
  state = {
    hasError: false,
    redirect: false
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught error", error, info);
  }
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was aan error with the listing <Link to="/">Click Here</Link> to
          go back to Home page or wait 5 sec
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundaries;
