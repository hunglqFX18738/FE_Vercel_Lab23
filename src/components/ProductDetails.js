import React, { useState } from 'react';

import { useParams } from 'react-router-dom';

import CartButton from './CartButton';

const ProductDetails = props => {
  const [product, setProduct] = useState([]);
  const params = useParams();
  const prodId = params.productId;
  // const posProd = props.products.map(e => e.id).indexOf(prodId);
  // const product = props.products[posProd];
  // fetch(`https://be-hunglqfx18738-lab23.onrender.com/products/${prodId}`)
  //   .then(res => res.json())
  //   .then(data => setBackendData(data));

  async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return setProduct(data);
  }

  fetchData(`https://be-hunglqfx18738-lab23.onrender.com/products/${prodId}`);

  return (
    <div className='centered'>
      <h1>{product.title}</h1>
      <hr />
      <div>
        <img src={product.imageUrl} alt={product.title} />
      </div>
      <h2>{product.price}</h2>
      <p>{product.description}</p>
      <CartButton productId={product._id} />
    </div>
  );
};

export default ProductDetails;
