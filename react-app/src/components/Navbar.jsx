import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const CATEGORY_META = {
  tops:        { label: 'Tops',        icon: 'fas fa-tshirt' },
  skirttop:    { label: 'Skirt & Top', icon: 'fas fa-female' },
  lehenga:     { label: 'Lehenga',     icon: 'fas fa-crown' },
  blouse:      { label: 'Blouse',      icon: 'fas fa-vest' },
  salwar:      { label: 'Salwar',      icon: 'fas fa-user' },
  frocks:      { label: 'Frocks',      icon: 'fas fa-heart' },
  kids:        { label: 'Kids',        icon: 'fas fa-child' },
  accessories: { label: 'Accessories', icon: 'fas fa-gem' },
};

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header>
      <div className="logo">
        <NavLink to="/" className="logo-link">
          <img src="/images/title.jpeg" alt="Nila Instyle" />
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

      {/* Center brand — mobile only */}
        {/* <div className="header-center"> */}
        {/* <span className="header-brand-name">Nila Instyle</span> */}
        {/* <span className="header-brand-tagline">be your own label</span>  */}
       {/* </div>  */}

      {/* Hamburger button — mobile only */}
      <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
        <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </button>

      {/* Mobile menu overlay */}
      {menuOpen && <div className="mobile-overlay" onClick={close} />}

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <nav className="mobile-nav">
          <NavLink to="/" end onClick={close}><i className="fas fa-home"></i><span>Home</span></NavLink>

          <div className="mobile-nav-item-wrapper">
            <button
              className="mobile-nav-item-toggle"
              onClick={() => setSubmenuOpen(!submenuOpen)}
            >
              <i className="fas fa-th-large"></i>
              <span>Collections</span>
              <i className={`fas fa-chevron-${submenuOpen ? 'up' : 'down'}`}></i>
            </button>

            {submenuOpen && (
              <div className="mobile-submenu">
                {Object.entries(CATEGORY_META).map(([key, meta]) => (
                  <button
                    key={key}
                    className="mobile-submenu-item"
                    onClick={() => {
                      navigate(`/collections?category=${key}`);
                      close();
                      setSubmenuOpen(false);
                    }}
                  >
                    <i className={meta.icon}></i>
                    <span>{meta.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

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
