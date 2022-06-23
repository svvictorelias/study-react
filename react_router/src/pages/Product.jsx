import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const Product = () => {
  const { id } = useParams();
  const url = 'http://localhost:3000/products/' + id;
  const { data: product, loading, error } = useFetch(url);
  console.log(product)
  return (
    <div>
      <p>ID do produto: {id}</p>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando...</p>}
      {product &&(
        <div>
          <h1>{product.name}</h1>
          <p>R$ {product.price}</p>
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
      )}
    </div>
  );
};

export default Product;
