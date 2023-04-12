import { data } from 'dev-data/data';
import Product from './Product';
import { useDispatch } from 'react-redux';
import { addItem } from 'pages/pos-system/POS.slice';
import { ProductType } from 'types/product.type';

const ProductList = () => {
  const dispatch = useDispatch();
  const handleClickProduct = (item: ProductType) => {
    dispatch(addItem(item));
  };
  return (
    <div className='mt-5 grid h-3/4 grid-cols-3 gap-4 overflow-y-auto px-5'>
      {data.map((item) => (
        <Product
          key={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
          handleClick={() => handleClickProduct(item)}
        />
      ))}
    </div>
  );
};

export default ProductList;
