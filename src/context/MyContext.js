import React from 'react'

const MyContext = React.createContext({
  score: 0,
  activeImageId: '',
  result: '',
  setResult: () => {},
  setImage: () => {},
  increaseScore: () => {},
  decreaseScore: () => {},
})
export default MyContext
