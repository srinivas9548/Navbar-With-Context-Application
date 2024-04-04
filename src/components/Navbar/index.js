import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const navbarBgContainer = isDarkTheme
        ? 'dark-navbar-container'
        : 'light-navbar-container'
      const navItemClassName = isDarkTheme
        ? 'dark-mode-item'
        : 'light-mode-item'

      const onClickTheme = () => {
        toggleTheme()
      }

      return (
        <nav className={navbarBgContainer}>
          <div className="navbar-content">
            <Link to="/">
              {isDarkTheme ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                  alt="website logo"
                  className="website-logo"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                  alt="website logo"
                  className="website-logo"
                />
              )}
            </Link>
            <ul className="nav-menu-list">
              <Link to="/" className="nav-link">
                <li className={navItemClassName}>Home</li>
              </Link>
              <Link to="/about" className="nav-link">
                <li className={navItemClassName}>About</li>
              </Link>
            </ul>
            <button
              type="button"
              className="theme-button"
              onClick={onClickTheme}
              data-testid="theme"
            >
              {isDarkTheme ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                  className="theme-image"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                  className="theme-image"
                />
              )}
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
