import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import EditProductForm from './EditProductForm';

const AddProduct = () => {
  const [product, setProduct] = useState([]);

  const params = useParams();
  const location = useLocation();

  const prodId = params.productId;
  // const queryParams = new URLSearchParams(location.search);
  // const isSortingAscending = queryParams.get("sort") === "asc";

  //fetch api if url have params
  if (prodId) {
    async function fetchData(url) {
      const response = await fetch(url);
      const data = await response.json();
      return setProduct(data);
    }
    fetchData(
      `https://be-hunglqfx18738-lab23.onrender.com/edit-product/${prodId}${location.search}`
    );
  }

  return (
    <React.Fragment>
      <EditProductForm product={product} />
    </React.Fragment>
  );
};

export default AddProduct;
