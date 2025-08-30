import React, { useState } from "react";
import Button from "./mini-components/Button";

const CheckoutHero = () => {
  const [discountCode, setDiscountCode] = useState("");

  return (
    <section className="max-w-6xl mx-auto h-[1300px]">
      <div>
        <div className="flex items-center justify-center">
          <div className="flex gap-2 cursor-pointer p-6 mt-44">
            <small className="font-bold text-black">Home</small>
            <img src="/Vector v.png" alt="arrow icon" />
            <small className="text-black">Checkout</small>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img src="/checkoutimg.png" alt="Checkout visual" />
        </div>
      </div>

      <section className="flex justify-between items-start  px-24 mt-20 ">
        <div>
          {/* Left side */}
          <div className="px-6 ">
            <div>
              <div className="font-bold text-lg mb-2">Payment Method</div>
              <small>Check / Money order</small>
            </div>

            <div className="flex gap-3 mt-4 items-center">
              <img src="/Group157.png" alt="Payment icon" />
              <small>Check / Money order</small>
            </div>

            <div className="mt-4">
              <small>
                Veronica Costello <br />
                6146 Honey Bluff Parkway <br />
                Calder, Michigan, 49628-7978 <br />
                United States <br />
                T: (555) 229-3326
              </small>

              <div>
                <button className="bg-[#F0F0F0] w-11 mt-3">Edit</button>
              </div>

              <div className="mt-4 w-96">
                <img src="/line.png" alt="Divider line" />
              </div>

              <div className="mt-6 ">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Apply Discount Code
                </label>
                <div className="flex ">
                  <input
                    type="text"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    className="border border-gray-300 px-4 py-2 w- focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Enter code"
                  />
                  <button className="bg-black text-white px-4 py-2 text-sm hover:bg-gray-800 w-32">
                    Apply Discount
                  </button>
                  <Button btnText="Place Order" className="w-32 h-10 ml-10 " />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right side  */}
        <div className="mb-6">
          <div className="bg-[#F5F5F5] w-[394px] h-[408px] p-6">
            <div className=" p-6 h-full">
              {/* Order Summary */}
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Cart Subtotal:</span>
                  <span>$19.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping (Flat Rate - Fixed):</span>
                  <span>$5.00</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-bold">
                  <span>Order Total:</span>
                  <span>$24.00</span>
                </div>
              </div>

              {/* Item Details */}
              <div className="mt-6">
                <h3 className="text-md font-semibold mb-2">1 Item in Cart</h3>
                <div className="flex items-center gap-4 ">
                  <div className="bg-white ">
                    <img
                      src="/Goldwhite.png"
                      alt="Go-Get’r Pushup Grips"
                      className="w-20 h-32 object-cover rounded-md   "
                    />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Go-Get’r Pushup Grips</p>
                    <p>Price: $19.00</p>
                    <p>Quantity: 1</p>
                    <button className="text-blue-600 hover:underline mt-1 text-xs">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mt-8">
              <div>
                <span className="font-bold text-2xl">Ship To</span>
              </div>
              <div>
                <img src="/pen.png" alt="" />
              </div>
            </div>
          </div>
          <div className="mt-8 w-96">
            <img src="line.png" alt="" />
          </div>
          <div className="mt-8">
            <small>
              Veronica Costello <br />
              6146 Honey Bluff Parkway <br />
              Calder, Michigan, 49628-7978 <br />
              United States <br />
              T: (555) 229-3326
            </small>
          </div>
          <div className="flex items-center justify-between mt-8">
            <div>
              <span className="font-bold text-2xl">Shipping Method:</span>
            </div>
            <div>
              <img src="/pen.png" alt="" />
            </div>
          </div>
          <div className="mt-8 w-96">
            <img src="line.png" alt="" />
          </div>
          <div className=" mt-4">Flat Rate - Fixed</div>
        </div>
      </section>
    </section>
  );
};

export default CheckoutHero;
