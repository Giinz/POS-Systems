import CategoriesItem from './CategoriesItem';
import { CategoriesType } from 'types/categories.type';
import { useDispatch, useSelector } from 'react-redux';
import { renderProducts } from '../../../../../app/slice/products.slice';
import { RootState } from 'app/store';
import { categorySelected } from 'app/slice/categorires.slice';

const Categories = () => {
  const initialData = useSelector((state: RootState) => state.categories.categories);
  const dispatch = useDispatch();

  const handleSelected = (item: CategoriesType) => {
    dispatch(categorySelected(item));
    dispatch(renderProducts(item));
  };

  return (
    <div className='flex w-full flex-row justify-evenly overflow-scroll no-scrollbar px-2'>
      {initialData.map((item) => (
        <CategoriesItem
          key={item.id}
          categoryName={item.category.toUpperCase()}
          isActive={item.isActive}
          handleSelected={() => handleSelected(item)}
        />
      ))}
    </div>
  );
};

export default Categories;
