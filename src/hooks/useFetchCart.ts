import { useMutation, useQuery, QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { CartItem } from "../types/CartItem";

export default function useFetchCart() {
  const config = {
    method: "get",
    url: "http://localhost:5000/api/cart",
  };
  const queryClient = new QueryClient();

  const getCart = async () => {
    const response = await axios.request<CartItem[]>(config); // Specify the response data type as Product[]
    return response.data;
  };

  const { data: cartData } = useQuery<CartItem[]>({
    queryKey: ["cart-product-data"],
    queryFn: getCart,
  });

  return { cartData };
}
