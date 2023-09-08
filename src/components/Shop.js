import React from 'react';

import CartButton from './CartButton';

const Shop = props => {
  return (
    <React.Fragment>
      <div class='grid'>
        {typeof props.products === 'undefined'
          ? 'No Backend Data!'
          : props.products.length === 0
          ? 'No Product!'
          : props.products.map((product, i) => (
              <article key={i} class='card product-item'>
                <header class='card__header'>
                  <h1 class='product__title'>{product.title}</h1>
                </header>
                <div class='card__image'>
                  <img src={product.imageUrl} alt='A Book' />
                </div>
                <div class='card__content'>
                  <h2 class='product__price'>${product.price}</h2>
                  <p class='product__description'>{product.description}</p>
                </div>
                <div class='card__actions'>
                  <CartButton productId={product._id} />
                </div>
              </article>
            ))}
      </div>
    </React.Fragment>
  );
};

export default Shop;
