import './GameOver.css'

const GameOver = ({retry, score, word}) => {
  return (
    <div>
      <h1>Fim do Jogo!</h1>
      <h2>A palavra era: <span>{word}</span></h2>
      <h2>A sua pontuação foi: <span>{score}</span></h2>
      <button onClick={retry}>Recomeçar</button>
    </div>
  )
}

export default GameOver