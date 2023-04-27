export interface ProductPropType {
  name: string;
  price: number;
  image: string;
  handleClick: () => void;
}
export type ProductType = Omit<ProductPropType, 'handleClick' | 'price'> & {
  id: number;
  price1: number;
  price2: number;
  price3: number;
};
