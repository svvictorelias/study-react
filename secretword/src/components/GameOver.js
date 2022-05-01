import './GameOver.css'

const GameOver = ({retry}) => {
  return (
    <div>
        <button onClick={retry}>Recomeçar</button>
    </div>
  )
}

export default GameOver