import './App.css';
import {useState, useEffect} from 'react'

//custom hook

import {useFetch} from './hooks/useFetch'

const url = 'http://localhost:3000/products'
function App() {
  const [products, setProducts] = useState([])

  const {data:items, httpConfig, loading} = useFetch(url)

  const [name, setName] = useState('')
  const [price, setPrice] =useState('')

  const handleSubmit = async(e)=>{
    e.preventDefault()

    const product ={
      name,
      price,
    }

    setName('')
    setPrice('')
    httpConfig(product,'POST')
  }
  
  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {loading && <p>Carregando dados...</p>}
      {!loading && (
              <ul>
              {items && items.map((product)=>(
                <li key={product.id}>{product.name} - R${product.price}</li>
              ))}
            </ul>
      )}
      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
            type='text'
            value={name}
            name='name'
            onChange={e=> setName(e.target.value)}></input>
          </label>
          <label>
            Preço:
            <input type='number' value={price} name='price' onChange={e=> setPrice(e.target.value)}></input>
          </label>
          {!loading && <input type='submit' value='Criar'></input>}
        </form>
      </div>

    </div>
  );
}

export default App;
