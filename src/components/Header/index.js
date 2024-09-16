import {useState, useEffect} from 'react'
// import MyContext from '../../context/MyContext'
import './index.css'

const Header = props => {
  const {result} = props

  const [score, setScore] = useState(0)
  useEffect(() => {
    if (result === 'YOU WON') {
      setScore(prevScore => prevScore + 1)
    } else if (result === 'YOU LOSE') {
      setScore(prevScore => prevScore - 1)
    }
  }, [result])

  return (
    <div className="header-container">
      <div>
        <h1 className="heading">ROCK</h1>
        <h1 className="heading">PAPER</h1>
        <h1 className="heading">SCISSORS</h1>
      </div>
      <div className="score-card">
        <h1 className="score">Score</h1>
        <h1 style={{margin: '0px', color: '#223a5f', fontFamily: 'Roboto'}}>
          {score} {/* The score will persist and update accordingly */}
        </h1>
      </div>
    </div>
  )
}

export default Header
