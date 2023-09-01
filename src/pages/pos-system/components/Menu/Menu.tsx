import Categories from './Categories/Categories';
import PriceTag from './PriceTag/PriceTag';
import ProductList from './ProductList/ProductList';

const Menu = () => {
  return (
    <div className='mt-5'>
      <div className='mt-5 flex flex-col items-center justify-between md:flex-row'>
        <Categories />
        <PriceTag />
      </div>
      <ProductList />
    </div>
  );
};

export default Menu;
