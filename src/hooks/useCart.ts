import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { CartItem } from "../types/CartItem";

export default function useCart() {
  const queryClient = useQueryClient(); // Access the QueryClient instance

  // Function to fetch cart data
  const fetchCart = async () => {
    const response = await axios.get<CartItem[]>(
      "http://localhost:5000/api/cart"
    );
    return response.data;
  };

  // Fetch cart data using useQuery
  const {
    data: cartData,
    isLoading,
    error,
  } = useQuery<CartItem[]>({
    queryKey: ["cart"], // Unique key to identify the cart query
    queryFn: fetchCart, // Function to fetch the cart data
  });

  // Mutation to add an item to the cart
  const addToCart = useMutation({
    mutationFn: async (newItem: { productId: string; quantity: number }) => {
      const response = await axios.post(
        "http://localhost:5000/api/cart",
        newItem
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] }); // Invalidate the cart query to refetch the updated data
    },
  });

  // Mutation to remove an item from the cart
  const removeFromCart = useMutation({
    mutationFn: async (productId: string) => {
      await axios.delete(`http://localhost:5000/api/cart/${productId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] }); // Invalidate the cart query to refetch the updated data
    },
  });

  // Mutation to increase the quantity of an item in the cart
  const increaseQuantity = useMutation({
    mutationFn: async (productId: string) => {
      const response = await axios.put(
        `http://localhost:5000/api/cart/increase/${productId}`
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] }); // Invalidate the cart query to refetch the updated data
    },
  });

  // Mutation to decrease the quantity of an item in the cart
  const decreaseQuantity = useMutation({
    mutationFn: async (productId: string) => {
      const response = await axios.put(
        `http://localhost:5000/api/cart/decrease/${productId}`
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] }); // Invalidate the cart query to refetch the updated data
    },
  });

  return {
    cartData, // The current cart data
    isLoading, // Loading state for the cart data
    error, // Error state for the cart data
    addToCart: addToCart.mutateAsync, // Function to add an item to the cart
    removeFromCart: removeFromCart.mutateAsync, // Function to remove an item from the cart
    increaseQuantity: increaseQuantity.mutateAsync, // Function to increase the quantity of an item in the cart
    decreaseQuantity: decreaseQuantity.mutateAsync, // Function to decrease the quantity of an item in the cart
  };
}
