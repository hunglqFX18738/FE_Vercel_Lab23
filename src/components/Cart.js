import React, { useState } from 'react';

import DeleteButton from './DeleteButton';
import OrdersButton from './OrdersButton';

const Cart = () => {
  const [productCart, setProductCart] = useState([]);
  // const [error, setError] = useState(null);

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return setProductCart(data);
    } catch (error) {
      // setError(error);
      console.log(error);
    }
  }

  fetchData('https://be-hunglqfx18738-lab23.onrender.com/cart');

  console.log(productCart);

  return (
    <React.Fragment>
      {productCart.length === 0 ? (
        <h1>No Products in Cart!</h1>
      ) : (
        productCart.map((product, i) => (
          <ul class='cart__item-list' key={i}>
            <li class='cart__item'>
              <h1>{product.productId.title}</h1>
              <h2>{product.quantity}</h2>
              <DeleteButton
                productId={product.productId._id}
                cartDelete={true}
              />
            </li>
          </ul>
        ))
      )}
      <hr />
      <div class='centered'>
        <OrdersButton />
      </div>
    </React.Fragment>
  );
};

export default Cart;
