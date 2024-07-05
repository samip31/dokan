import { Product } from "@src/types/Product";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useFetchProductDetail(productId: string) {
  const config = {
    method: "get",
    url: `http://localhost:5000/api/products/${productId}`, 
  };

  const getProductDetail = async () => {
    const response = await axios.request<Product>(config); 
    return response.data;
  };

  const { data: productData } = useQuery<Product>({
    queryKey: ["product-detail", productId], 
    queryFn: getProductDetail,
  });

  return { productData };
}
