import "./Home.css";

import React from "react";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-light bg-light fixed-top">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                <i class="octicon octicon-home" aria-hidden="true"></i> Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="octicon octicon-bell"></i> Notifications
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="octicon octicon-inbox"></i> Messages
              </a>
            </li>
          </ul>

          <form class="navbar-form" role="search">
            <div class="input-group">
              <input
                type="text"
                class="form-control input-search"
                placeholder="Search Twitter"
                name="srch-term"
                id="srch-term"
              />
              <div class="input-group-btn">
                <button class="btn btn-default btn-search" type="submit">
                  <i class="octicon octicon-search navbar-search-icon"></i>
                </button>
              </div>
            </div>
          </form>
          <a class="mr-3 ml-3" href="/user">
            <strong></strong>
          </a>

          <a class="mr-3 ml-3" href="/logout">
            Logout
          </a>

          <button class="btn btn-search-bar">Tweet</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
