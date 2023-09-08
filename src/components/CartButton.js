import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const CartButton = props => {
  const navigate = useNavigate();
  const prodIdRef = useRef();

  async function postData(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  const cartHandler = e => {
    e.preventDefault();
    const prodId = prodIdRef.current.value;
    postData('https://be-hunglqfx18738-lab23.onrender.com/cart', {
      productId: prodId,
    });
    navigate('/cart');
  };

  return (
    <React.Fragment>
      <form onSubmit={cartHandler} method='post'>
        <button class='btn' type='submit'>
          Add to Cart
        </button>
        <input
          type='hidden'
          name='productId'
          ref={prodIdRef}
          value={props.productId}
        />
      </form>
    </React.Fragment>
  );
};

export default CartButton;
