import { RootState } from 'app/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { convertNum } from 'utils/convertNum';

const TotalItems = () => {
  const [subTotal, setSubTotal] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const orderList = useSelector((state: RootState) => state.order);

  useEffect(() => {
    const subToTalCal = orderList.reduce((curr, prev) => {
      return curr + prev.price * prev.quantity;
    }, 0);
    setSubTotal(subToTalCal);
  }, [orderList]);

  return (
    <div className='mt-5 px-5'>
      <div className='rounded-md py-4 shadow-lg'>
        <div className=' flex justify-between px-4 '>
          <span className='text-md font-semibold'>Subtotal</span>
          <span className='text-2xl  font-bold'>{convertNum(subTotal)}</span>
        </div>
        <div className=' flex justify-between px-4 '>
          <span className='text-md font-semibold'>Discount</span>
          <div>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDiscount(parseInt(e.target.value))}
              className='w-10 rounded-lg border border-gray-300 bg-gray-50 text-center text-2xl font-bold'
              value={discount}
            />
            <span>%</span>
          </div>
        </div>
        <div className='mt-3 flex items-center justify-between border-t-2 px-4 py-2'>
          <span className='text-2xl font-semibold'>Total</span>
          <span className='text-2xl font-bold'>{convertNum(subTotal * (1 - discount / 100))}</span>
        </div>
      </div>
    </div>
  );
};

export default TotalItems;
