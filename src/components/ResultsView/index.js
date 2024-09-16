import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import MyContext from '../../context/MyContext'
import Rules from '../Rules'
import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class ResultsView extends Component {
  getRandomImageUrl = () => {
    const randomIndex = Math.floor(Math.random() * choicesList.length)
    return choicesList[randomIndex].imageUrl
  }

  getResult = (playerChoice, opponentChoice) => {
    if (playerChoice === opponentChoice) {
      return "IT'S A DRAW"
    }
    if (
      (playerChoice === 'ROCK' && opponentChoice === 'SCISSORS') ||
      (playerChoice === 'PAPER' && opponentChoice === 'ROCK') ||
      (playerChoice === 'SCISSORS' && opponentChoice === 'PAPER')
    ) {
      return 'YOU WON'
    }
    return 'YOU LOSE'
  }

  render() {
    return (
      <MyContext.Consumer>
        {({activeImageId}) => {
          const randomImageUrl = this.getRandomImageUrl()

          // Find the image URL for the player's choice
          const playerChoiceImage = choicesList.find(
            each => each.id === activeImageId,
          )?.imageUrl

          // Determine the opponent's choice based on random image URL
          const opponentChoiceId = choicesList.find(
            each => each.imageUrl === randomImageUrl,
          )?.id

          // Determine the game result
          const result = this.getResult(activeImageId, opponentChoiceId)

          // setResult(game)
          // Update the result in the context

          return (
            <div className="bg-container">
              <div className="playing-header">
                <Header result={result} />
              </div>
              <div style={{display: 'flex'}}>
                <div className="card">
                  <h1 style={{color: 'white'}}>YOU</h1>
                  <img
                    src={playerChoiceImage}
                    alt="your choice"
                    className="image"
                  />
                </div>
                <div className="card">
                  <h1 style={{color: 'white'}}>OPPONENT</h1>
                  <img src={randomImageUrl} alt="opponent" className="image" />
                </div>
              </div>
              <div>
                <h2>{result || 'Result will be displayed here'}</h2>{' '}
                {/* Display the result */}
                <Link to="/">
                  <button type="button" className="play-again-button">
                    Play Again
                  </button>
                </Link>
              </div>
              <div style={{textAlign: 'right', alignSelf: 'flex-end'}}>
                <Rules
                  trigger={
                    <button className="rules-button" type="button">
                      Show Rules
                    </button>
                  }
                />
              </div>
            </div>
          )
        }}
      </MyContext.Consumer>
    )
  }
}

export default ResultsView
