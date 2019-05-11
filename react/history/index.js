import React from "react";
import ReactDOM from "react-dom";
import { HistoryRouter, Route, Link } from "./HistoryRouter";

ReactDOM.render(
  <HistoryRouter>
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
  </HistoryRouter>,
  document.querySelector("#react_history_container")
);
