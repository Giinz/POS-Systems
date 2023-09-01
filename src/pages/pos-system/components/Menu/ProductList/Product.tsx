import { ProductPropType } from 'types/product.type';
import { convertNum } from 'utils/convertNum';

const Product = ({ name, price, image, handleClick }: ProductPropType) => {
  return (
    <div
      className='flex h-32 cursor-pointer flex-col justify-between rounded-md border border-gray-200 px-3 py-3'
      onClick={handleClick}
    >
      <div>
        <div className='font-bold text-gray-800'>{name}</div>
      </div>
      <div className='flex flex-row items-center justify-between'>
        <span className='self-end text-lg font-bold text-yellow-500'>{convertNum(price)}</span>
        <img src={image} alt='sample' className=' hidden h-14 w-14 rounded-md object-cover md:block' />
      </div>
    </div>
  );
};

export default Product;
