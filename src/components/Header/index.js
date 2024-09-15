import './index.css'

const Header = () => {
  console.log('hi')
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
          {0}
        </h1>
      </div>
    </div>
  )
}

export default Header
