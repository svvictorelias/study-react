import './StartScreen.css'

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no Botão para começar a jogar</p>
      <button onClick={startGame}>Começar a Jogar</button>
    </div>
  )
}

export default StartScreen