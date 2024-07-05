import { ProductId } from "./ProductId";

export interface CartItem {
  _id: string; 
  products: ProductId[];
  
}
