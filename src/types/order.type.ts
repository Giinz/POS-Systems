import { ProductType } from './product.type';

export interface Order extends ProductType {
  quantity: number;
}
