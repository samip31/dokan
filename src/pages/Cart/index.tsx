import React from "react";
import useCart from "@src/hooks/useCart";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTimes } from "@fortawesome/free-solid-svg-icons";
import useFetchCart from "@src/hooks/useFetchCart";

export default function Cart() {
  const { cartData } = useFetchCart();
  const { removeFromCart } = useCart();

  const handleRemoveFromCart = (productId: string) => {
    removeFromCart(productId);
  };

  return (
    <div className="bg-hero-pattern bg-center bg-fixed">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg p-10">
        <div className="text-3xl font-syne font-bold text-gray-800 mb-6">
          Your Cart
        </div>

        {cartData && cartData.length > 0 ? (
          <div>
            {cartData[0].products.map((product) => (
              <div
                key={product.productId.name}
                className="flex items-center justify-between border-b border-gray-300 py-4"
              >
                <div className="flex items-center gap-4 font-Poppins">
                  <img
                    src={`/src/assets/svg/jacket.png`}
                    alt={product._id}
                    className="w-20 h-20 object-contain rounded-lg"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">
                      {product.productId.name}
                    </h2>
                    <p className="text-gray-600">{product.productId.name}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-2">
                        <button className="text-gray-500 focus:outline-none">
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span className="text-gray-800">
                          {product.quantity}
                        </span>
                        <button className="text-gray-500 focus:outline-none">
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                      <div className="text-lg font-semibold text-gray-900">
                        ${product.productId.price * product.quantity}
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(product.productId._id)}
                  className="text-gray-500 focus:outline-none"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            ))}
            <div className="flex justify-end mt-6">
              <Link to="/checkout" className="primaryButton">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-lg text-gray-600 text-center py-12">
            Your cart is empty.
          </div>
        )}
      </div>
    </div>
  );
}
