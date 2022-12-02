// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="main-container">
    <div className="container">
      <img
        alt="wave"
        className="logo-image"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1 className="title">Wave</h1>
    </div>

    <ul className="components">
      <li className="link">
        <Link className="component-link" to="/">
          Home
        </Link>
      </li>
      <li className="link">
        <Link className="component-link" to="/about">
          About
        </Link>
      </li>
      <li className="link">
        <Link className="component-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
