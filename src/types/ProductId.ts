import { Product } from "./Product";

export interface ProductId {
  _id: string;
  productId: Product;
  quantity: number;
}
