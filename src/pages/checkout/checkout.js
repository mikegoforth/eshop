import React, { useEffect } from 'react';
import './checkout.css';
import CheckoutProduct from '../../components/checkoutProduct/checkoutProduct';
import Subtotal from '../../components/subtotal/subtotal';
import { useStateValue } from '../../context/StateProvider';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <h2 className="checkout__title">Your Shopping Basket</h2>
        {basket.length === 0 ? (
          <div>
            <p>Your shopping basket is empty.</p>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <p>Review your items and proceed to checkout.</p>
            <p>
              You have {basket.length} items in your basket. To remove an item,
              click "Remove from basket".
            </p>
          </div>
        )}
        {basket.map((item) => (
          <CheckoutProduct
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image={item.image}
          />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
