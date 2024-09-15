import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
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

  render() {
    const randomImageUrl = this.getRandomImageUrl() // Generate random image URL here

    return (
      <div className="bg-container">
        <div className="playing-header">
          <Header />
        </div>
        <div style={{display: 'flex'}}>
          <div className="card">
            <h1 style={{color: 'white'}}>YOU</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
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
  }
}

export default ResultsView
