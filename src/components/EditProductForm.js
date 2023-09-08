import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProductForm = props => {
  const navigate = useNavigate();

  const titleRef = useRef();
  const imageUrlRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();

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

  const submitHandler = event => {
    event.preventDefault();
    const titleValue = titleRef.current.value;
    const imageUrlValue = imageUrlRef.current.value;
    const priceValue = priceRef.current.value;
    const descriptionValue = descriptionRef.current.value;
    let productData = {
      title: titleValue,
      imageUrl: imageUrlValue,
      price: priceValue,
      description: descriptionValue,
    };
    postData(
      'https://be-hunglqfx18738-lab23.onrender.com/add-product',
      productData
    );
    navigate('/', { replace: true });
  };

  const editHandler = e => {
    e.preventDefault();
    const prodId = props.product._id;
    const titleValue = titleRef.current.value;
    const imageUrlValue = imageUrlRef.current.value;
    const priceValue = priceRef.current.value;
    const descriptionValue = descriptionRef.current.value;
    let productData = {
      productId: prodId,
      title: titleValue,
      imageUrl: imageUrlValue,
      price: priceValue,
      description: descriptionValue,
    };
    postData(
      `https://be-hunglqfx18738-lab23.onrender.com/edit-product/${prodId}`,
      productData
    );
    navigate('/', { replace: true });
  };

  return (
    <React.Fragment>
      <form
        class='product-form'
        onSubmit={
          typeof props.product._id === 'undefined' ? submitHandler : editHandler
        }
        method='POST'
      >
        <div class='form-control'>
          <label>Enter Title</label>
          <input
            type='text'
            ref={titleRef}
            name='product-title'
            id='product-title'
            // value={props.product.title}
            defaultValue={props.product.title}
          />
          <label>Enter imageUrl</label>
          <input
            type='text'
            ref={imageUrlRef}
            name='product-imageUrl'
            id='product-imageUrl'
            // value={props.product.imageUrl}
            defaultValue={props.product.imageUrl}
          />
          <label>Enter Price</label>
          <input
            type='number'
            name='price'
            id='price'
            step='0.01'
            ref={priceRef}
            // value={props.product.price}
            defaultValue={props.product.price}
          />
          <label>Enter Description</label>
          <textarea
            ref={descriptionRef}
            name='product-description'
            id='product-description'
            // value={props.product.description}
            defaultValue={props.product.description}
          />
        </div>
        <button className='btn' type='submit'>
          {typeof props.product._id === 'undefined'
            ? 'Add Product'
            : 'Edit Product'}
        </button>
      </form>
    </React.Fragment>
  );
};

export default EditProductForm;
