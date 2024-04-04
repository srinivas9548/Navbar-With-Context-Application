import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgContainer = isDarkTheme
        ? 'dark-about-container'
        : 'light-about-container'
      const changeHeadingColor = isDarkTheme
        ? 'dark-about-heading'
        : 'light-about-heading'

      return (
        <>
          <Navbar />
          <div className={bgContainer}>
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
                className="about-image"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
                className="about-image"
              />
            )}

            <h1 className={changeHeadingColor}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
