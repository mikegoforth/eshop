import React from 'react';
import './product.css';
import { useStateValue } from '../../context/StateProvider';
import { formatPrice } from '../../utils/formatter';

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>{formatPrice(price)}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
