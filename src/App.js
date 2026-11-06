import { useState, useEffect } from 'react';

function App() {

  const [product, setproduct] = useState([])

  const [skip, setSkip] = useState(0);

  const [page, setPage] = useState(1);

  let url = `https://dummyjson.com/products?limit=10&skip=${skip}`



  function Nextpage() {
  setSkip(skip + 10);
  setPage(page + 1);
}

  function Prevpage() {
  setSkip(skip - 10);
  setPage(page - 1);
}

if(page < 1){
  setPage(1)
  setSkip(0)
}

if(page === 1){

}

  async function getProduct() {
    const response = await fetch(url)
    const data = await response.json()
    setproduct(data)
  }

  useEffect(() => {
    getProduct()
  }, [skip])




  return (
    <div className="App">

      <ul>
        <div id="product"> 

          
        {product.products && product.products.map((item) => (
          <div id="singleproduct"> 
          <li key={item.id}>
            <img id="thumbnail" src={item.thumbnail} alt={item.title} />
            <h2>{item.title}</h2>
            <p id="description">{item.description}</p>
            <h3>Price: ${item.price}</h3>
          </li>
          </div>
        ))}
</div>
      </ul>


<div id="pagination"> 
      <button onClick={Prevpage}>prev</button>
      <button>{page}</button>
      <button onClick={Nextpage}>next</button>
</div>


    </div>
  );
}

export default App;
