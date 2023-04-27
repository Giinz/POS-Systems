import { useDispatch, useSelector } from 'react-redux';
import OrderItem from './OrderItem';
import { RootState } from 'app/store';
import { Order } from 'types/order.type';
import { changeQuantityByValue, decrementQuantity, deleteOrderItem, incrementQuantity } from 'app/slice/order.slice';

const OrderList = () => {
  const orderList = useSelector((state: RootState) => state.order);
  const priceTag = useSelector((state: RootState) => state.priceTag);
  const dispatch = useDispatch();
  const handleChangeQuantity = (order: Order, e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log(value);
    dispatch(changeQuantityByValue({ order: order, value: value }));
  };
  const handleIncrement = (order: Order) => {
    dispatch(incrementQuantity(order));
  };
  const handeDecrement = (order: Order) => {
    dispatch(decrementQuantity(order));
  };
  const handleDeleteItem = (id: number) => {
    dispatch(deleteOrderItem(id));
  };
  return (
    <div className='h-90 mt-5 overflow-y-auto px-2 py-4'>
      {orderList.map((order) => {
        let productPrice: number = 0;
        switch (priceTag) {
          case 'A':
            productPrice = order.price1;
            break;
          case 'B':
            productPrice = order.price2;
            break;
          case 'C':
            productPrice = order.price3;
            break;
          default:
            break;
        }
        return (
          <OrderItem
            key={order.id}
            itemPrice={productPrice}
            itemName={order.name}
            handleChangeQuantity={(e) => handleChangeQuantity(order, e)}
            handleDecrement={() => handeDecrement(order)}
            handleIncrement={() => handleIncrement(order)}
            handleDeleteItem={() => handleDeleteItem(order.id)}
            quantity={order.quantity}
          />
        );
      })}
    </div>
  );
};

export default OrderList;
