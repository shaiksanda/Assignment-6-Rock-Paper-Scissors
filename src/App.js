import {Component} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PlayingView from './components/PlayingView'
import ResultsView from './components/ResultsView'
import MyContext from './context/MyContext'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      activeImageId: '',
      result: '',
    }
  }

  setTheImage = imageUrl => {
    this.setState({activeImageId: imageUrl})
  }

  increaseScore = () => {
    this.setState(prevState => ({score: prevState.score + 1}))
  }

  decreaseScore = () => {
    this.setState(prevState => ({score: prevState.score - 1}))
  }

  setResult = result => {
    this.setState({result})
  }

  render() {
    const {score, activeImageId, result} = this.state
    console.log(result)
    const contextValue = {
      score,
      activeImageId,
      result,
      setResult: this.setResult,
      setImage: this.setTheImage,
      increaseScore: this.increaseScore,
      decreaseScore: this.decreaseScore,
    }

    return (
      <MyContext.Provider value={contextValue}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PlayingView />} />
            <Route path="/result" element={<ResultsView />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    )
  }
}

export default App
