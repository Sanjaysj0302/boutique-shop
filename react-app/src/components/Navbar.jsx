import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header>
      <div className="logo">
        <NavLink to="/" onClick={close} className="logo-link">
          <img src="/images/title.jpeg" alt="Boutique Logo" />
          <div className="logo-text">
            <span className="logo-name">Nila Instyle</span>
            <span className="logo-tagline">Boutique</span>
          </div>
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

      {/* Mobile menu overlay */}
      {menuOpen && <div className="mobile-overlay" onClick={close} />}

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <div className="mobile-menu-brand">
          <img src="/images/title.jpeg" alt="Nila Instyle" />
          <span>Nila Instyle</span>
          <button className="mobile-menu-close" onClick={close} aria-label="Close menu">
            <i className="fas fa-times"></i>
          </button>
        </div>

        <nav className="mobile-nav">
          <NavLink to="/" end onClick={close}><i className="fas fa-home"></i><span>Home</span></NavLink>
          <NavLink to="/collections" onClick={close}><i className="fas fa-th-large"></i><span>Collections</span></NavLink>
          <NavLink to="/custom-order" onClick={close}><i className="fas fa-cut"></i><span>Custom Order</span></NavLink>
          <NavLink to="/about" onClick={close}><i className="fas fa-heart"></i><span>About</span></NavLink>
          <NavLink to="/contact" onClick={close}><i className="fas fa-envelope"></i><span>Contact</span></NavLink>
        </nav>

        <div className="mobile-menu-footer">
          <p className="mobile-menu-tagline">Custom stitching · Made just for you</p>
          <div className="mobile-social">
            <a href="https://www.instagram.com/nila.instyle/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
