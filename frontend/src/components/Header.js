import React, { useState } from 'react'; 
import logo from '../image/Header_Mesto_Logo.svg';
import menu from '../image/BurgerMenuIcon.svg';
import close from '../image/CloseIcon.svg';
import HeaderBar from './HeaderBar';

function Header({ onLogout, userEmail }) {
  const [ menuOpen, setMenuOpen ] = useState(false);

  function handleMenuChange(e) {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className="header">
      {menuOpen && (
        <div className="header__bar-small">
          <HeaderBar onLogout={onLogout} userEmail={userEmail} />
        </div>
      )}
      <div className="header__wrapper">
        <img className="header__logo" src={logo} alt="Логотип проекта Mesto" />
        <div className="header__menu">
          {menuOpen ?
          (
          <img className="header__menu-close" src={close} alt="Закрыть" onClick={handleMenuChange} />
          ) :
          (
          <img className="header__menu-icon" src={menu} alt="Меню" onClick={handleMenuChange} />
          )}
        </div>
        <div className="header__bar-big">
          <HeaderBar onLogout={onLogout} userEmail={userEmail} />
        </div>
      </div>
    </header>
  );
}

export default Header;