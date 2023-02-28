import React, { useState } from 'react';
import './header.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="header__logo">
          <StorefrontIcon className="header__logoImage" fontSize="large" />
          <h2 className="header__logoTitle">eShop</h2>
        </div>
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className={`header__nav ${menuOpen ? 'header__navMobile' : ''}`}>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello Guest</span>
            <span className="nav__itemLineTwo">Sign In</span>
          </div>
        </Link>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
      </div>
      <div className="header__right">
        {/* Mobile-menu */}
        <div className="header__mobileMenuButton" onClick={toggleMenu}>
          <div className={`header__mobileMenuIcon ${menuOpen ? 'active' : ''}`}>
            <MenuIcon />
          </div>
        </div>
        {/* Basket icon and count */}
        <div className="header__basket">
          <Link to="/checkout" style={{ textDecoration: 'none' }}>
            <div className="nav__itemBasket">
              <ShoppingBasketIcon />
              <span className="nav__itemLineTwo nav__basketCount">
                {basket.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
