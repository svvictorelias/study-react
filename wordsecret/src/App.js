//CSS
import './App.css'

//React
import { useCallback, useEffect, useState } from 'react'

//data
import { wordsList } from './data/words'

//components
import StartScreen from './components/StartScreen'
import GameOver from './components/GameOver'
import Game from './components/Game'

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' }
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  const picWordAndCategory = () => {
    const randomType = typeData => {
      return typeData[Math.floor(Math.random() * Object.keys(typeData).length)]
    }
    const categories = Object.keys(words)
    //pick a random category
    const category = randomType(categories)
    //pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)]

    return [word, category]
  }

  const startGame = () => {
    //pick word and pick category
    const {word, category} = picWordAndCategory()
    setGameStage(stages[1].name)
  }

  //process the letter input
  const veifyLetter = () => {}

  //restart game
  const retry = () => {}

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game />}
      {gameStage === 'end' && <GameOver />}
    </div>
  )
}

export default App
