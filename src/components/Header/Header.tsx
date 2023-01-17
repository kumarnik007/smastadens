import React from 'react';
import { Navbar } from '../Navbar';
import './Header.scss';
import './Title-bar.scss';

export const Header = () => (
  <div className="header">
    <div className="header__top">
      <Navbar />
    </div>

    <div className="header__mid title-bar">
      <h1 className="title">
        Småstadens kommun
      </h1>

      <form className="find-person">
        <div className="field">
          <label className="label" htmlFor="person-search" />

          <div className="control">
            <input
              type="text"
              id="person-search"
              placeholder="Sök"
              className="input is-dander"
              name="query"
            />
          </div>
        </div>
      </form>
    </div>

    <div className="header__bottom header-tabs">
      <a
        className="header-tab"
        href="#"
      >
        Organisationshierarki
      </a>

      <a
        className="header-tab"
        href="#"
      >
        Schemainställningar
      </a>

      <a
        className="header-tab"
        href="#"
      >
        Kontoinställningar
      </a>
    </div>
  </div>
);
