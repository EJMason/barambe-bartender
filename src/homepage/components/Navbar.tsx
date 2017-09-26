import * as React from 'react';

export const Navbar = () => (
  <nav
    className="navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <a className="navbar-item" href="http://bulma.io">
        <img
          src="http://bulma.io/images/bulma-logo.png"
          alt="Bulma: a modern CSS framework based on Flexbox"
          width="112"
          height="28"
        />
      </a>

      <button className="button navbar-burger">
        <span />
      </button>
    </div>
  </nav>
);