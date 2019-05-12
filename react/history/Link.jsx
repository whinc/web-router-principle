import React from 'react'
import RouteContext from "./RouteContext";

export default ({ to, ...props }) => (
  <RouteContext.Consumer>
    {({ onPopState }) => (
      <a
        href=""
        {...props}
        onClick={e => {
          // 阻止默认行为
          e.preventDefault();
          // 更新 URL
          window.history.pushState(null, "", to);
          // 更新 UI
          onPopState();
        }}
      />
    )}
  </RouteContext.Consumer>
);
