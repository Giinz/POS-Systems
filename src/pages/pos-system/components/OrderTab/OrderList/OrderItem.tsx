import { convertNum } from '../../../../../utils/convertNum';

interface OrderItemType {
  itemName: string;
  itemPrice: number;
  quantity: number;
  handleDecrement: () => void;
  handleChangeQuantity: () => void;
  handleIncrement: () => void;
}

const OrderItem = ({
  itemName,
  itemPrice,
  quantity,
  handleChangeQuantity,
  handleDecrement,
  handleIncrement
}: OrderItemType) => {
  return (
    <div className='mb-4 flex flex-row items-center justify-between'>
      <div className='flex w-2/5 flex-row items-center'>
        <span className='text-md ml-4 font-semibold'>{itemName}</span>
      </div>
      <div className='flex w-32 items-center justify-evenly'>
        <span className='cursor-pointer rounded-md bg-gray-300 px-3  py-1' onClick={handleDecrement}>
          -
        </span>
        <input className='w-2 font-semibold' value={quantity} onChange={handleChangeQuantity} />
        <span className='cursor-pointer rounded-md bg-gray-300 px-3  py-1' onClick={handleIncrement}>
          +
        </span>
      </div>
      <div className='w-20 text-center text-lg font-semibold'>{convertNum(itemPrice * quantity)}</div>
    </div>
  );
};

export default OrderItem;
