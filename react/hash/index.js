import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "./BrowserRouter";

ReactDOM.render(
  <BrowserRouter>
    <ul>
      <li>
        <Link to="/home">home</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
    </ul>

    <Route path="/home" render={() => <h2>Home</h2>} />
    <Route path="/about" render={() => <h2>About</h2>} />
  </BrowserRouter>,
  document.querySelector("#react_hash_container")
);
