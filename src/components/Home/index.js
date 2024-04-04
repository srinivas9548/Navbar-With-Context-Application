import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgContainer = isDarkTheme
        ? 'dark-home-container'
        : 'light-home-container'
      const changeHeadingColor = isDarkTheme
        ? 'dark-home-heading'
        : 'light-home-heading'

      return (
        <>
          <Navbar />
          <div className={bgContainer}>
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
                className="home-image"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
                className="home-image"
              />
            )}

            <h1 className={changeHeadingColor}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
