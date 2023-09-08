import React, { useState } from 'react';

const Orders = () => {
  const [productOrders, setProductOrders] = useState([]);
  // const [error, setError] = useState(null);

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return setProductOrders(data);
    } catch (error) {
      // setError(error);
      console.log(error);
    }
  }

  fetchData('https://be-hunglqfx18738-lab23.onrender.com/orders');

  return (
    <React.Fragment>
      {productOrders.length === 0 ? (
        <h1>
          <h1>Nothing there!</h1>
        </h1>
      ) : (
        <ul class='orders'>
          {productOrders.map((orders, i) => (
            <li class='orders__item'>
              <h1>{orders._id}</h1>
              <ul class='orders__products'>
                {orders.products.map((order, k) => (
                  <li class='orders__products-item'>
                    {order.product.title} ({order.quantity})
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
};

export default Orders;
