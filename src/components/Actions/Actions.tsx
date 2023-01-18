import React from 'react';
import './Actions.scss';

export const Actions = () => (
  <div className="actions">
    <div className="actions__left">
      <button className="actions__button">
        <div className="actions__button--ny-person actions__button--icon"></div>
        <div>Ny Person</div>
      </button>

      <button className="actions__button">
        <div className="actions__button--ny-grupp actions__button--icon"></div>
        <div>Ny Grupp</div>
      </button>

      <button className="actions__button">
        <div className="actions__button--ändra-kolumner actions__button--icon"></div>
        <div>Ändra Kolumner</div>
      </button>
    </div>

    <div className="actions__right">
      <button className="actions__action">
        <div className="actions__action--impotera actions__action--icon"></div>
        <div>Impotera</div>
      </button>

      <button className="actions__action">
        <div className="actions__action--expotera actions__action--icon"></div>
        <div>Expotera</div>
      </button>

      <button className="actions__action">
        <div className="actions__action--dela actions__action--icon"></div>
        <div>Dela</div>
      </button>
    </div>
  </div>
);
