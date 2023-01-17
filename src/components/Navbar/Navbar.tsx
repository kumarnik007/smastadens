import React from 'react';
import './Navbar.scss';

export const Navbar = () => (
  <nav className="navbar is-fixed-top has-shadow">
    <div className="container">
      <div className="navbar-brand">
        <div className="navbar-brand__left">
          <a
            className="navbar-item"
            href="#"
          >
            <div>Mina Sidor</div>
            <div className="navbar-item--expand"></div>
          </a>

          <a
            className="navbar-item"
            href="#"
          >
            <div>Schemaläggning</div>
            <div className="navbar-item--expand"></div>
          </a>
        </div>

        <div className="navbar-brand__right">
          <a
            className="navbar-item"
            href="#"
          >
            Organisation
          </a>
        </div>
      </div>
    </div>
  </nav>
);
