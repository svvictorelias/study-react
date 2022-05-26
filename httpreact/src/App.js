import './App.css'
import { useState, useEffect } from 'react'
import { useFetch } from './hooks/useFetch'

const url = 'http://localhost:3000/products'

function App() {
  const { data: items, httpConfig, loading, error } = useFetch(url)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const handleDelete = (id)=>{
    httpConfig(id,"DELETE")
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const product = { name, price }

    httpConfig(product, 'POST')

    setName('')
    setPrice('')
  }

  return (
    <div className="App">
      <h1>Lista de Produtos!</h1>
      {loading && <p>Carregando dados</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items &&
            items.map(product => (
              <li key={product.id}>
                {product.name} - {product.price}
                <input type="submit" value="Apagar" onClick={()=>handleDelete(product.id)}/>
              </li>
              
            ))}
        </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={e => setName(e.target.value)}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              value={price}
              name="price"
              onChange={e => setPrice(e.target.value)}
            />
          </label>
          {!loading && 
          <input type="submit" value="Criar" />
          }
          {loading && 
          <input type="submit" value="Aguarde" disabled />
          }
        </form>
      </div>
    </div>
  )
}

export default App
