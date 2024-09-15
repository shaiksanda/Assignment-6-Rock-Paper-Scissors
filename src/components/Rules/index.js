import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css' // Optional: Custom styles for your popup

class Rules extends Component {
  render() {
    const {trigger} = this.props

    return (
      <Popup trigger={trigger} modal closeOnDocumentClick>
        {close => (
          <div className="popup">
            <div className="close-button">
              <RiCloseLine size={25} onClick={close} />
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
              className="rules-image"
            />
          </div>
        )}
      </Popup>
    )
  }
}

export default Rules
