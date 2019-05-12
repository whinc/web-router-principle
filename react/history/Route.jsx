import React from 'react'
import RouteContext from './RouteContext'

export default ({ path, render }) => (
  <RouteContext.Consumer>
    {({currentPath}) => currentPath === path && render()}
  </RouteContext.Consumer>
);