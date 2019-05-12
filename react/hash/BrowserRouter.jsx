import React from "react";
import RouteContext from './RouteContext'
import utils from '~/utils'

export default class BrowserRouter extends React.Component {
  state = {
    currentPath: utils.extractHashPath(window.location.href)
  };

  onHashChange = e => {
    const currentPath = utils.extractHashPath(e.newURL);
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
      <RouteContext.Provider value={{currentPath: this.state.currentPath}}>
        {this.props.children}
      </RouteContext.Provider>
    );
  }
}
