import {Route, BrowserRouter, Routes} from 'react-router-dom'
import PlayingView from './components/PlayingView'
import ResultsView from './components/ResultsView'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PlayingView />} />
      <Route path="/result" element={<ResultsView />} />
    </Routes>
  </BrowserRouter>
)

export default App
