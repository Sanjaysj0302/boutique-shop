import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header>
      <div className="logo">
        <NavLink to="/" onClick={close}>
          <img src="/images/title.jpeg" alt="Boutique Logo" />
        </NavLink>
      </div>

      {/* Desktop nav */}
      <nav className="desktop-nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/collections">Collections</NavLink>
        <NavLink to="/custom-order">Custom Order</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      {/* Desktop social */}
      <div className="header-social-links desktop-social">
        <a href="https://www.instagram.com/nila.instyle/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><i className="fab fa-pinterest"></i></a>
      </div>

      {/* Hamburger button — mobile only */}
      <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
        <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            <NavLink to="/" end onClick={close}>Home</NavLink>
            <NavLink to="/collections" onClick={close}>Collections</NavLink>
            <NavLink to="/custom-order" onClick={close}>Custom Order</NavLink>
            <NavLink to="/about" onClick={close}>About</NavLink>
            <NavLink to="/contact" onClick={close}>Contact</NavLink>
          </nav>
          <div className="mobile-social">
            <a href="https://www.instagram.com/nila.instyle/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
