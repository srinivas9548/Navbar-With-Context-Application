import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgContainer = isDarkTheme
        ? 'dark-not-found-container'
        : 'light-not-found-container'

      const changeHeadingColor = isDarkTheme
        ? 'dark-not-found-heading'
        : 'light-not-found-heading'

      const changeDescriptionColor = isDarkTheme
        ? 'dark-not-found-description'
        : 'light-not-found-description'

      return (
        <>
          <Navbar />
          <div className={bgContainer}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1 className={changeHeadingColor}>Lost Your Way?</h1>
            <p className={changeDescriptionColor}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
