import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function HeaderBar({ onLogout, userEmail }) {
  return (
    <div className="header__bar-container">
      <Switch>
        <Route exact path="/">
          <div className="header__container">
            <p className="header__email">{userEmail}</p>
            <Link to="/signin" className="header__link" onClick={onLogout}>
              Выйти
            </Link>
          </div>
        </Route>
        <Route path="/signin">
          <Link to="/signup" className="header__link">
            Регистрация
          </Link>
        </Route>
        <Route path="/signup">
          <Link to="/signin" className="header__link">
            Войти
          </Link>
        </Route>
      </Switch>
    </div>
  );
}

export default HeaderBar;