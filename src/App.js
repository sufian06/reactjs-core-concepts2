import './App.css';

function App() {
  
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  return (
    <div>
      <h1>Count: </h1>
      <button>Increase</button>
    </div>
  )
}

/**
 * const products = [
    {name: 'laptop', price: '47000'},
    {name: 'phone', price: '75000'},
    {name: 'watch', price: '3500'},
    {name: 'tablet', price: '5000'},
  ]
 */

// {
//   products.map(product => <Product name={product.name} price={product.price}></Product>)
// }
// <Product name="laptop" price="47000"></Product>
// <Product name="phone" price="75000"></Product>
// <Product name="watch" price="3500"></Product>

function Product(props) {
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
