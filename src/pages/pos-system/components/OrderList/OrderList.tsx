import { useDispatch, useSelector } from 'react-redux';
import OrderItem from './OrderItem';
import { RootState } from 'app/store';
import { Order } from 'types/order.type';
import { decrementQuantity, incrementQuantity } from 'pages/pos-system/POS.slice';

const OrderList = () => {
  const orderList = useSelector((state: RootState) => state.order);
  const dispatch = useDispatch();

  const handleChangeQuantity = () => {};
  const handleIncrement = (order: Order) => {
    dispatch(incrementQuantity(order));
  };
  const handeDecrement = (order: Order) => {
    dispatch(decrementQuantity(order));
  };

  return (
    <div className='h-90 mt-5 overflow-y-auto px-2 py-4'>
      {orderList.map((order) => (
        <OrderItem
          key={order.id}
          itemPrice={order.price}
          itemName={order.name}
          handleChangeQuantity={handleChangeQuantity}
          handleDecrement={() => handeDecrement(order)}
          handleIncrement={() => handleIncrement(order)}
          quantity={order.quantity}
        />
      ))}
    </div>
  );
};

export default OrderList;
