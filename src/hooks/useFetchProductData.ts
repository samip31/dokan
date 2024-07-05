
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "../types/Product";


export default function useFetchProduct() {
  const config = {
    method: "get",
    url: "http://localhost:5000/api/products",
  };

  const getProducts = async () => {
    const response = await axios.request<Product[]>(config); 
    return response.data;
  };

  const { data: productData } = useQuery<Product[]>({
    queryKey: ["product-data"], 
    queryFn: getProducts,
  });

  return { productData };
}


