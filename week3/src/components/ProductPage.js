import React from 'react';
import './ProductPage.css';

const ProductPage = () => {
  const product = {
    image: 'https://m.media-amazon.com/images/I/61JxhLQgp3L._SL1500_.jpg',
    name: 'boAt Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds',
    description: 'Playback- Enjoy an extended break on weekends with your favourite episodes on stream, virtue of a playback time of up to 42 hours including the 6 hours nonstop playtime for earbuds.',
   // description: '',
    price: '$29.99',
  };

  return (
    <div className="product-page">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h2>{product.price}</h2>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;
