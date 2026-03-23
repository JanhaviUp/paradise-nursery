import React from "react";

function ProductList() {
  const products = [
    { id: 1, name: "Rose Plant" },
    { id: 2, name: "Tulip Plant" }
  ];

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  );
}

export default ProductList;
