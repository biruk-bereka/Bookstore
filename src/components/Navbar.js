import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const links = [
  { path: '/', text: 'Books' },
  { path: '/categories', text: 'Categories' },
];

const Navbar = () => (
  <div className="header">
    <NavLink className="link" to="/"><h2 className="name">Bookstore CMS</h2></NavLink>
    <nav>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.text}>
            <NavLink className="link nav-link" to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default Navbar;
