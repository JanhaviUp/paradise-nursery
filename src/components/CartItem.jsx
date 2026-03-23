import React from "react";

function CartItem() {
  const cart = [
    { id: 1, name: "Snake Plant", price: 200, quantity: 2 },
    { id: 2, name: "Rose", price: 100, quantity: 1 }
  ];

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Price: ₹{item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button>+</button>
          <button>-</button>
          <button>Remove</button>
        </div>
      ))}

      <h2>
        Total: ₹
        {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
      </h2>
    </div>
  );
}

export default CartItem;
