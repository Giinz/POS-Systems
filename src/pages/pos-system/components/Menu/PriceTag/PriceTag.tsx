import { selectPriceTag } from 'app/slice/priceTage.slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store';

const PriceTag = () => {
  const priceTagValue = useSelector((state: RootState) => state.priceTag);
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(selectPriceTag(e.target.value));
  };
  return (
    <div className='px-5'>
      <select onChange={handleChange} value={priceTagValue}>
        <option value='A'>Price 1</option>
        <option value='B'>Price 2</option>
        <option value='C'>Price 3</option>
      </select>
    </div>
  );
};

export default PriceTag;
