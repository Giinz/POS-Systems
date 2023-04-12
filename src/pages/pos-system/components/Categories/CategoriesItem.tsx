interface CategoriesItemType {
  isActive: boolean;
}

const CategoriesItem = ({ isActive }: CategoriesItemType) => {
  return (
    <span
      className={`mr-4 rounded-2xl px-5 py-1 text-sm font-semibold ${
        isActive && 'rounded-2xl bg-yellow-500 text-white'
      }`}
    >
      Food
    </span>
  );
};

export default CategoriesItem;
