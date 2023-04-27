import { convertNum } from '../../../../../utils/convertNum';

interface OrderItemType {
  itemName: string;
  itemPrice: number;
  quantity: number;
  handleDecrement: () => void;
  handleChangeQuantity: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleIncrement: () => void;
  handleDeleteItem: () => void;
}

const OrderItem = ({
  itemName,
  itemPrice,
  quantity,
  handleDecrement,
  handleIncrement,
  handleChangeQuantity,
  handleDeleteItem
}: OrderItemType) => {
  return (
    <div className='mb-4 flex flex-row items-center justify-between'>
      <div className='flex w-2/5 flex-row items-center'>
        <span className='text-md ml-4 font-semibold'>{itemName}</span>
      </div>
      <div className='flex w-20 items-center justify-evenly'>
        <span className='cursor-pointer rounded-md bg-gray-300 px-3 py-1  print:hidden' onClick={handleDecrement}>
          -
        </span>
        <input
          className='w-20 px-2 text-center font-semibold'
          value={quantity}
          onChange={handleChangeQuantity}
          type='number'
        />
        <span className='cursor-pointer rounded-md bg-gray-300 px-3 py-1  print:hidden' onClick={handleIncrement}>
          +
        </span>
      </div>
      <div className='w-32 text-center text-lg font-semibold'>{convertNum(itemPrice * quantity)}</div>
      <div className='font-semibold'>
        <span className='cursor-pointer rounded-md bg-red-100 px-2 py-1 text-red-500' onClick={handleDeleteItem}>
          X
        </span>
      </div>
    </div>
  );
};

export default OrderItem;
