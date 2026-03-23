import React from "react";

function ProductList() {
  const plants = {
    Indoor: [
      { id: 1, name: "Snake Plant", price: 200, img: "https://via.placeholder.com/100" },
      { id: 2, name: "Peace Lily", price: 250, img: "https://via.placeholder.com/100" },
      { id: 3, name: "Aloe Vera", price: 150, img: "https://via.placeholder.com/100" },
      { id: 4, name: "Spider Plant", price: 180, img: "https://via.placeholder.com/100" },
      { id: 5, name: "Money Plant", price: 220, img: "https://via.placeholder.com/100" },
      { id: 6, name: "ZZ Plant", price: 300, img: "https://via.placeholder.com/100" }
    ],
    Outdoor: [
      { id: 7, name: "Rose", price: 100, img: "https://via.placeholder.com/100" },
      { id: 8, name: "Tulip", price: 120, img: "https://via.placeholder.com/100" },
      { id: 9, name: "Sunflower", price: 90, img: "https://via.placeholder.com/100" },
      { id: 10, name: "Lavender", price: 200, img: "https://via.placeholder.com/100" },
      { id: 11, name: "Jasmine", price: 150, img: "https://via.placeholder.com/100" },
      { id: 12, name: "Hibiscus", price: 130, img: "https://via.placeholder.com/100" }
    ]
  };

  return (
    <div>
      <h1>Product List</h1>

      {Object.keys(plants).map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          {plants[category].map((plant) => (
            <div key={plant.id}>
              <img src={plant.img} alt={plant.name} />
              <p>{plant.name}</p>
              <p>₹{plant.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
