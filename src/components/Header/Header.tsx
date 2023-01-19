import React from 'react';
import { Navbar } from '../Navbar';
import './Header.scss';
import './Title-bar.scss';

interface Props {
  query: string,
  onSetQuery: (value: string) => void,
};

export const Header: React.FC<Props> = ({
  query,
  onSetQuery,
}) => (
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
              value={query}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => onSetQuery(event.target.value)}
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
