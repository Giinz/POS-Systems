import Menu from './components/Menu/Menu';
import OrderTab from './components/OrderTab/OrderTab';

const POS = () => {
  return (
    <div className='flex flex-col-reverse shadow-lg lg:flex-row'>
      <div className='min-h-screen w-full shadow-lg lg:w-3/5'>
        <Menu />
      </div>
      <OrderTab />
    </div>
  );
};

export default POS;
