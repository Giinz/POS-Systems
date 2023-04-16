import { useDispatch } from 'react-redux';
import { deleteAllOrder } from '../../../../app/slice/POS.slice';
import { useRef, useCallback } from 'react';
import { useReactToPrint } from 'react-to-print';
import OrderList from './OrderList/OrderList';
import TotalItems from './TotalItems/TotalItems';

const OrderTab = () => {
  const orderListRef = useRef(null);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteAllOrder());
  };
  const handlePrint = useReactToPrint({
    content: useCallback(() => orderListRef.current, []),
    documentTitle: `Bill ${new Date().toLocaleDateString()}`,
    onAfterPrint: useCallback(() => dispatch(deleteAllOrder()), [dispatch])
  });

  return (
    <div className='w-full lg:w-2/5'>
      <div className='mt-5 flex flex-row items-center justify-between px-5'>
        <div className='text-xl font-bold'>Đơn hàng</div>
        <div className='font-semibold'>
          <span className='cursor-pointer rounded-md bg-red-100 px-4 py-2 text-red-500' onClick={handleDelete}>
            Xóa
          </span>
        </div>
      </div>
      <div ref={orderListRef}>
        <div className='mt-5 hidden flex-col items-center justify-between px-5 print:flex'>
          <div className='text-center text-gray-800'>
            <div className='text-3xl font-bold'>Đại lý nhựa Song Long - Dũng Hà</div>
            <span className='text-xl'>428 Ngọc Lâm, Long Biên, Hà Nội</span>
          </div>
          <div className='text-4xl font-bold'>Đơn hàng</div>
        </div>
        <OrderList />
        <TotalItems />
      </div>
      <div className='mt-5 px-5'>
        <div
          onClick={handlePrint}
          className='cursor-pointer rounded-md bg-yellow-500 px-4 py-4 text-center font-semibold text-white shadow-lg hover:opacity-80'
        >
          Print Bill
        </div>
      </div>
    </div>
  );
};

export default OrderTab;
