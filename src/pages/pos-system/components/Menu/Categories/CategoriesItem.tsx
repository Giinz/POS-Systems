import { Link } from 'react-router-dom';
interface CategoriesItemType {
  isActive: boolean;
  categoryName: string;
  handleSelected: () => void;
}

const CategoriesItem = ({ isActive, categoryName, handleSelected }: CategoriesItemType) => {
  return (
    <Link
      to={`${categoryName.toLowerCase() === 'all' ? '/' : categoryName.toLowerCase()}`}
      className={`mr-4 cursor-pointer rounded-2xl px-5 py-1 text-sm font-semibold hover:bg-yellow-500 ${
        isActive && 'rounded-2xl bg-yellow-500 text-white'
      }`}
      onClick={handleSelected}
    >
      {categoryName}
    </Link>
  );
};

export default CategoriesItem;
