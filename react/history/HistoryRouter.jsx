import React from "react";
import utils from '~/utils'
import RouteContext from './RouteContext'

export default class HistoryRouter extends React.Component {
  state = {
    currentPath: utils.extractUrlPath(window.location.href)
  };

  onPopState = e => {
    const currentPath = utils.extractUrlPath(window.location.href);
    console.log("onPopState:", currentPath);
    this.setState({ currentPath });
  };

  componentDidMount() {
    window.addEventListener("popstate", this.onPopState);
  }

  componentWillUnmount() {
    window.removeEventListener("popstate", this.onPopState);
  }

  render() {
    return (
      <RouteContext.Provider value={{currentPath: this.state.currentPath, onPopState: this.onPopState}}>
        {this.props.children}
      </RouteContext.Provider>
    );
  }
}
