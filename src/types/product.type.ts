export interface ProductPropType {
  name: string;
  price: number;
  image: string;
  handleClick: () => void;
}
export type ProductType = Omit<ProductPropType, 'handleClick'> & {
  id: number;
};
