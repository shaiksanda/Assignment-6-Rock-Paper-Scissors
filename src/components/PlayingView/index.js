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

class PlayingView extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="playing-header">
          <Header />
        </div>
        <div className="images-container">
          {choicesList.map(each => (
            <Link
              to="/result" // Passing imageUrl as URL parameter
              key={each.id}
            >
              <button className="button" type="button">
                <img src={each.imageUrl} alt={each.id} className="image" />
              </button>
            </Link>
          ))}
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

export default PlayingView
