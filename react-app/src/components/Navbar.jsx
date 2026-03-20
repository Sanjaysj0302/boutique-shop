import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <div className="logo">
        <NavLink to="/">
          <img src="/images/title.jpeg" alt="Boutique Logo" />
        </NavLink>
      </div>

      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/collections">Collections</NavLink>
        <NavLink to="/custom-order">Custom Order</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <div className="header-social-links">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>
        <a href="https://www.instagram.com/nila.instyle/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
        <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><i className="fab fa-pinterest"></i></a>
      </div>
    </header>
  );
}

export default Navbar;
