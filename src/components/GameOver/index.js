import './index.css'

const matchGameOver = props => {
  const {score, resetGame} = props
  const onClickReset = () => {
    resetGame()
  }
  return (
    <div className="bg-container-score">
      <div className="game-over-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy"
        />
        <p className="your-score">YOUR SCORE</p>
        <p className="your-score">{score}</p>
        <button type="button" className="reset-btn" onClick={onClickReset}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="reset-icon"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default matchGameOver
