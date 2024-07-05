import axios from "axios";

const useCart = () => {
  const addToCart = async (productId: string, quantity: number) => {
    try {
      const response = await axios.post("http://localhost:5000/api/cart", {
        productId,
        quantity,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromCart = async (productId: string) => {
    await axios.delete(`http://localhost:5000/api/cart/${productId}`);
  };

  return {
    addToCart,
    removeFromCart,
  };
};

export default useCart;
