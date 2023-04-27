export interface dataType {
  id: number;
  name: string;
  price1: number;
  price2: number;
  price3: number;
  category: string;
  image: string;
}

export const data: dataType[] = [
  {
    id: 1,
    name: 'Tea',
    price1: 10000,
    price2: 20000,
    price3: 150000,
    category: 'drinks',
    image:
      'https://img.etimg.com/photo/msid-69212931,quality-100/chai-itself-was-once-a-trend-that-developed-this-way-.jpg'
  },
  {
    id: 2,
    name: 'coffee',
    price1: 200000,
    price2: 20000,
    price3: 150000,
    category: 'drinks',
    image: 'https://i.cdn.newsbytesapp.com/images/l110_14211532861690.jpg'
  },
  {
    id: 3,
    name: 'Chicken Biryani',
    price1: 100000,
    price2: 20000,
    price3: 150000,
    category: 'rice',
    image: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg'
  },
  {
    id: 4,
    name: 'Veg Biryani',
    price1: 500000,
    price2: 20000,
    price3: 150000,
    category: 'rice',
    image: 'https://www.indianveggiedelight.com/wp-content/uploads/2020/04/veg-biryani-instant-pot-featured.jpg'
  },
  {
    id: 5,
    name: 'Chicken Hakka',
    price1: 7000,
    price2: 20000,
    price3: 150000,
    category: 'noodles',
    image: 'https://cravecookclick.com/wp-content/uploads/2012/07/IMG_4400.jpg'
  },
  {
    id: 6,
    name: 'Eggy',
    price1: 50000,
    price2: 20000,
    price3: 150000,
    category: 'noodles',
    image: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Egg-Noodles-min.jpg'
  }
];
const categories = [...new Set(data.map((item) => item.category))].sort();
categories.unshift('All');
const categoriesData = categories.map((item, index) => ({ category: item, id: index + 1, isActive: false }));

const initialData = categoriesData.map((obj) => (obj.id === 1 ? { ...obj, isActive: true } : obj));
export { initialData };
