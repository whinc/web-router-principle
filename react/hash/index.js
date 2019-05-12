import React from "react";
import ReactDOM from "react-dom";
import BrowserRouter from "./BrowserRouter";
import Route from './Route'
import Link from './Link'

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
  document.querySelector(".react.hash .container")
);
