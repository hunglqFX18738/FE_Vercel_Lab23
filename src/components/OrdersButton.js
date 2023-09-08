import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrdersButton = props => {
  const navigate = useNavigate();

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

  const orderHandler = e => {
    e.preventDefault();
    // const prodId = prodIdRef.current.value;
    postData('https://be-hunglqfx18738-lab23.onrender.com/create-order', {});
    navigate('/orders');
  };

  return (
    <React.Fragment>
      <form onSubmit={orderHandler} method='post'>
        <button class='btn' type='submit'>
          Order Now!
        </button>
      </form>
    </React.Fragment>
  );
};

export default OrdersButton;
