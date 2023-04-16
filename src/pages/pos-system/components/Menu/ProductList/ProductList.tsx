import Product from './Product';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from 'app/slice/POS.slice';
import { ProductType } from 'types/product.type';
import { RootState } from 'app/store';
import { useLocation } from 'react-router-dom';
import { locationSelected } from 'app/slice/products.slice';
import { categoriesLocation } from 'app/slice/categorires.slice';

const ProductList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const data = useSelector((state: RootState) => state.products);
  const handleClickProduct = (item: ProductType) => {
    dispatch(addItem(item));
  };
  useEffect(() => {
    const path = location.pathname.slice(1, location.pathname.length);
    dispatch(locationSelected(path));
    dispatch(categoriesLocation(path));
  }, [dispatch, location.pathname]);

  return (
    <div className='mt-5 grid h-3/4 grid-cols-3 gap-4 overflow-y-auto px-5'>
      {data.productList.map((item) => (
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
