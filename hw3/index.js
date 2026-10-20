const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

function ProductCart(props) {
  return (
    <div>
      <h1>{props.title} </h1>
      <img src="https://picsum.photos" alt="product" />
      <p> {props.status}</p>
      <p>{props.category}</p>
      <button>add to cart</button>
    </div>
  );
}

root.render(
  <div>
    <ProductCart title="apple" status="in stock" category="fruit" />
    <ProductCart title="boots" status="in stock" category="clothes" />
    <ProductCart title="banana" status="no left" category="fruit" />
    <ProductCart title="sofa" status="in stock" category="furniture" />
  </div>,
);
