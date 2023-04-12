interface dataType {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

export const data: dataType[] = [
  {
    id: 1,
    name: 'Tea',
    price: 10000,
    category: 'drinks',
    image:
      'https://img.etimg.com/photo/msid-69212931,quality-100/chai-itself-was-once-a-trend-that-developed-this-way-.jpg'
  },
  {
    id: 2,
    name: 'coffee',
    price: 200000,
    category: 'drinks',
    image: 'https://i.cdn.newsbytesapp.com/images/l110_14211532861690.jpg'
  },
  {
    id: 3,
    name: 'Chicken Biryani',
    price: 100000,
    category: 'rice',
    image: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg'
  },
  {
    id: 4,
    name: 'Veg Biryani',
    price: 500000,
    category: 'rice',
    image: 'https://www.indianveggiedelight.com/wp-content/uploads/2020/04/veg-biryani-instant-pot-featured.jpg'
  },
  {
    id: 5,
    name: 'Chicken Hakka',
    price: 7000,
    category: 'noodles',
    image: 'https://cravecookclick.com/wp-content/uploads/2012/07/IMG_4400.jpg'
  },
  {
    id: 6,
    name: 'Eggy',
    price: 50000,
    category: 'noodles',
    image: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Egg-Noodles-min.jpg'
  }
];
