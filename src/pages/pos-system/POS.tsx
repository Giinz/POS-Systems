import { useDispatch } from 'react-redux';
import Categories from './components/Categories/Categories';
import OrderList from './components/OrderList/OrderList';
import ProductList from './components/ProductList/ProductList';
import TotalItems from './components/TotalItems/TotalItems';
import { deleteAllOrder } from './POS.slice';

const POS = () => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteAllOrder());
  };
  return (
    <div className='container mx-auto bg-white'>
      <div className='flex flex-col-reverse shadow-lg lg:flex-row'>
        <div className='min-h-screen w-full shadow-lg lg:w-3/5'>
          {/* Header */}
          <div className='mt-5 flex flex-row items-center justify-between px-5'>
            <div className='text-gray-800'>
              <div className='text-xl font-bold'>Đại lý nhựa Song Long - Dũng Hà</div>
              <span className='text-xs'>428 Ngọc Lâm, Long Biên, Hà Nội</span>
            </div>
          </div>
          {/* End Header */}
          <div className='mt-5'>
            <Categories />
            <ProductList />
          </div>
        </div>
        <div className='w-full lg:w-2/5'>
          <div className='mt-5 flex flex-row items-center justify-between px-5'>
            <div className='text-xl font-bold'>Đơn hàng</div>
            <div className='font-semibold'>
              <span className='cursor-pointer rounded-md bg-red-100 px-4 py-2 text-red-500' onClick={handleDelete}>
                Xóa
              </span>
            </div>
          </div>
          <OrderList />
          <TotalItems />
        </div>
      </div>
    </div>
  );
};

export default POS;
