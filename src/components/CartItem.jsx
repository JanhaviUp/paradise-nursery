import React from "react";

function CartItem() {
  const cartItems = [
    { id: 1, name: "Rose Plant", quantity: 1 },
    { id: 2, name: "Tulip Plant", quantity: 2 }
  ];

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
}

export default CartItem;
