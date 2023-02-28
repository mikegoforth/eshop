import React from 'react';
import './subtotal.css';
import { useStateValue } from '../../context/StateProvider';
import { getBasketTotal } from '../../reducers/reducer';
import { formatPrice } from '../../utils/formatter';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const totalPrice = basket.reduce((total, item) => total + item.price, 0);

  console.log(basket);
  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items): <strong>{formatPrice(totalPrice)}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button className={basket.length === 0 ? 'disabled' : ''} disabled={basket.length === 0}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
