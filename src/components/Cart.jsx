import React from "react";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1999,
      qty: 1,
      image:
        "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2599,
      qty: 2,
      image:
        "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=400",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {/* Cart List */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-white shadow-md rounded-xl p-4 justify-between"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-lg object-cover"
              />

              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">₹{item.price}</p>

                {/* Quantity Controls */}
                <div className="flex items-center mt-2 space-x-3">
                  <button className="px-2 py-1 bg-gray-200 rounded-lg">
                    -
                  </button>
                  <span className="font-semibold">{item.qty}</span>
                  <button className="px-2 py-1 bg-gray-200 rounded-lg">
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Remove */}
            <button className="text-red-500 hover:text-red-700 font-semibold">
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-8 bg-white p-6 shadow-md rounded-xl w-full md:w-1/3 ml-auto">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>

        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>₹6597</span>
        </div>

        <div className="flex justify-between mb-2">
          <span>Delivery</span>
          <span className="text-green-600">Free</span>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>₹6597</span>
        </div>

        <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
