import { Product } from "@src/types/Product";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useFetchProductDetail(productId: string) {
  const config = {
    method: "get",
    url: `http://localhost:5000/api/products/${productId}`, // Update URL to include productId
  };

  const getProductDetail = async () => {
    const response = await axios.request<Product>(config); // Specify the response data type as Product
    return response.data;
  };

  const { data: productData } = useQuery<Product>({
    queryKey: ["product-detail", productId], // Use productId as part of the queryKey
    queryFn: getProductDetail,
  });

  return { productData };
}
