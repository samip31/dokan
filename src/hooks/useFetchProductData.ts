// src/hooks/useFetchProducts.ts
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "../types/Product";
// Adjust the path as per your project structure

export default function useFetchProducts() {
  const config = {
    method: "get",
    url: "http://localhost:5000/api/products",
  };

  const getProducts = async () => {
    const response = await axios.request<Product[]>(config); // Specify the response data type as Product[]
    return response.data;
  };

  const { data: productData } = useQuery<Product[]>({
    queryKey: ["product-data"], // Update the query key as needed
    queryFn: getProducts,
  });

  return { productData };
}
