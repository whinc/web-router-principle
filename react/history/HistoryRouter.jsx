import React from "react";

const RouteContext = React.createContext("/");
let historyRouter = null;
class HistoryRouter extends React.Component {
  state = {
    currentPath: extractPath(window.location.href)
  };

  onPopState = e => {
    const currentPath = extractPath(window.location.href);
    console.log("onPopState:", currentPath);
    this.setState({ currentPath });
  };

  componentDidMount() {
    window.addEventListener("popstate", this.onPopState);
    historyRouter = this;
  }

  componentWillUnmount() {
    window.removeEventListener("popstate", this.onPopState);
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

const Link = ({ to, ...props }) => (
  <a
    href=""
    {...props}
    onClick={e => {
      // 阻止默认行为
      e.preventDefault();
      // 更新 URL
      window.history.pushState(null, "", to);
      // 更新 UI
      historyRouter && historyRouter.onPopState();
    }}
  />
);

const extractPath = url => /https?:\/\/[^/]+([^?#]*)/.exec(url)[1];

export { HistoryRouter, Route, Link };
