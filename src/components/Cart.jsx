import { useState } from "react";

const Cart = () => {
  const [discountCode, setDiscountCode] = useState("SALE2020");
  const [shippingOption, setShippingOption] = useState("flat");

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8 bg-white">
      {/* Left Side: Cart Items */}
      <div className="md:col-span-2 space-y-6">
        {/* Cart Item */}
        <div className="border-b pb-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Images */}
            <div className="">
              <div className="">
                <img
                  src="/Goldchair.png"
                  alt="Chair 1"
                  className="w-20 h-20 object-cover border "
                />
              </div>
              <div className="mt-14">
                <img
                  src="/Greychair.png"
                  alt="Chair 2"
                  className="w-20 h-20 object-cover border"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Discount Code */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Apply Discount Code
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              className="border border-gray-300 px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="bg-black text-white px-4 py-2 text-sm hover:bg-gray-800 w-44">
              Apply Discount
            </button>
          </div>
        </div>
      </div>

      {/* Right Side: Summary */}
      <div className="space-y-6 bg-[#F5F5F5] w-[373px] h-[808px] ">
        <h2 className="text-xl font-semibold text-gray-800 p-10">Summary</h2>

        {/* Shipping Info */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <input
              type="text"
              placeholder="Nigeria"
              className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              State/Province
            </label>
            <input
              type="text"
              placeholder="Lagos"
              className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Zip/Postal Code
            </label>
            <input
              type="text"
              placeholder="100001"
              className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Shipping Options */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">Shipping Options</p>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="flat"
              name="shipping"
              value="flat"
              checked={shippingOption === "flat"}
              onChange={() => setShippingOption("flat")}
            />
            <label htmlFor="flat" className="text-sm text-gray-700">
              Flat Rate ($5.00)
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="table"
              name="shipping"
              value="table"
              checked={shippingOption === "table"}
              onChange={() => setShippingOption("table")}
            />
            <label htmlFor="table" className="text-sm text-gray-700">
              Table Rate ($15.00)
            </label>
          </div>
        </div>

        {/* Order Total */}
        <div className="text-lg font-semibold text-gray-900">
          Order Total: $90.00
        </div>

        {/* Checkout Button */}
        <button className="w-full bg-green-600 text-white py-3 text-sm font-medium hover:bg-green-700 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
