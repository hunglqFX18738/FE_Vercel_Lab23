import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Shop from './components/Shop';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import EditProduct from './components/EditProduct';
import AdminProducts from './components/AdminProducts';
import Cart from './components/Cart';
import Orders from './components/Orders';

function App() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch('https://be-hunglqfx18738-lab23.onrender.com/api')
      .then(res => res.json())
      .then(data => setBackendData(data));
  }, [backendData]);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            exact
            path='/'
            element={<Shop products={backendData.products} />}
          />
          <Route
            path='/products'
            element={<Products products={backendData.products} />}
          />
          <Route
            path='/products/:productId'
            element={<ProductDetails products={backendData.products} />}
          />
          <Route path='/edit-product' element={<EditProduct />} />
          <Route path='/edit-product/:productId' element={<EditProduct />} />
          <Route
            path='/admin-products'
            element={<AdminProducts products={backendData.products} />}
          />
          <Route path='/cart' element={<Cart />} />
          <Route path='/orders' element={<Orders />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
