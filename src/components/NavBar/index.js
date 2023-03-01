import './index.css'

const NavBar = props => {
  const {score, timer} = props

  return (
    <nav className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="game-icon"
      />
      <ul className="score-container">
        <li>
          <p className="para">
            Score: <span className="score-text">{`${score}`}</span>
          </p>
        </li>
        <li>
          <p className="para score-text">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="time-icon"
            />
            {`${timer} sec`}
          </p>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
