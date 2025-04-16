import React from 'react';
import './ProductCard.css'; // Importing the CSS for styling

function ProductCard({ name, description, price, imageUrl }) {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">{price}</p>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
  );
}

export default ProductCard;
