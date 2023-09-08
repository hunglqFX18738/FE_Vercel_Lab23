import React, { useRef } from 'react';

const DeleteButton = props => {
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

  const deleteHandler = e => {
    e.preventDefault();
    const prodId = prodIdRef.current.value;
    postData(
      props.cartDelete
        ? 'https://be-hunglqfx18738-lab23.onrender.com/cart-delete-item'
        : 'https://be-hunglqfx18738-lab23.onrender.com/delete-product',
      {
        productId: prodId,
      }
    );
  };

  return (
    <React.Fragment>
      <form onSubmit={deleteHandler} method='post'>
        <button class='btn danger' type='submit'>
          Delete
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

export default DeleteButton;
