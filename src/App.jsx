import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import useProducts from './hooks/useProducts';


function App() {
  const [name, setName] = useLocalStorage('name');
  const { products, loading, error } = useProducts('https://fakestoreapi.com/products');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading products: {error}</div>;

  return (
    <div className="App">
      <div className='input' >
      <h1>Hi {name}👋</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)
          
        }
      />
        </div>
        <div className='card' >
      <h2>Shop List</h2>
      <ul>
  {Array.isArray(products) && products.map((product) => (
    <li key={product.id} className="product-card">
      <span className="product-title">{product.title}</span>
      <span className="product-price">${product.price}</span>
    </li>
  ))}
</ul>

    </div>
      </div>
  );
}

export default App;
