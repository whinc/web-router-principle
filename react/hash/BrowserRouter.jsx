import React from "react";

const RouteContext = React.createContext("/");

class BrowserRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPath: extractPath(window.location.href)
    };
    this.onHashChange = this.onHashChange.bind(this);
  }

  onHashChange(e) {
    console.log(extractPath(e.newURL));
    this.setState({ currentPath: extractPath(e.newURL) });
  }

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

const extractPath = url => {
  const foundIndex = url.indexOf("#");
  if (foundIndex !== -1) return url.slice(foundIndex + 1);
  else return "";
};

export { BrowserRouter, Route, Link };
