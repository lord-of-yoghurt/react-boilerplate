import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLogout } from '../actions/auth';


export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>My Awesome App</h1>
        </Link>
        <button className="app-button app-button--link" onClick={startLogout}>Sign out</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(null, mapDispatchToProps)(Header);
