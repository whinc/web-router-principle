import React from "react";

const RouteContext = React.createContext("/");

class BrowserRouter extends React.Component {
  state = {
    currentPath: extractPath(window.location.href)
  };

  onHashChange = e => {
    const currentPath = extractPath(e.newURL);
    console.log("onHashChange:", currentPath);
    this.setState({ currentPath });
  };

  componentDidMount() {
    window.addEventListener("hashchange", this.onHashChange);
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.onHashChange);
  }

  render() {
    return (
      <RouteContext.Provider value={this.state.currentPath}>
        {this.props.children}
      </RouteContext.Provider>
    );
  }
}

const Route = ({ path, render }) => (
  <RouteContext.Consumer>
    {currentPath => currentPath === path && render()}
  </RouteContext.Consumer>
);

const Link = ({ to, ...props }) => <a {...props} href={"#" + to} />;

const extractPath = url => (/#(.*)$/g.exec(url) || ["", ""])[1];

export { BrowserRouter, Route, Link };
