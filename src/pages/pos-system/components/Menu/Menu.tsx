import React from 'react';
import Categories from './Categories/Categories';
import ProductList from './ProductList/ProductList';

const Menu = () => {
  return (
    <div className='mt-5'>
      <Categories />
      <ProductList />
    </div>
  );
};

export default Menu;
