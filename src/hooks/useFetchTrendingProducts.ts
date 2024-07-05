import { Product } from "@src/types/Product";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useFetchTrendingProducts() {
  const config = {
    method: "get",
    url: "http://localhost:5000/api/products/trending/",
  };

  const getTrendingProducts = async () => {
    const response = await axios.request<Product[]>(config); // Specify the response data type as Product[]
    return response.data;
  };

  const { data: productData } = useQuery<Product[]>({
    queryKey: ["trending-product-data"],
    queryFn: getTrendingProducts,
  });

  return { productData };
}
