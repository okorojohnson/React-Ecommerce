import React, { useState } from "react";

const ShippingAddress = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add validation or API call here if needed
  };

  return (
    <section className="w-[1500px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center justify-center">
        <div className="flex gap-2 cursor-pointer p-6 mt-44">
          <small className="font-bold text-black">Home</small>
          <img src="/Vector v.png" alt="arrow icon" />
          <small className="text-black">Checkout</small>
        </div>
      </div>

      {/* Checkout Image */}
      <div className="flex items-center justify-center mb-10">
        <img src="/checkoutimg.png" alt="Checkout visual" />
      </div>

      {/* Main Section */}
      <section className="flex px-80">
        {/* Left Side - Form */}
        <div className="w-[500px] bg-white p-6  ">
          <form className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>

            {/* First Name Field */}
            <div className="flex items-center gap-4">
              <label className="w-32 text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                defaultValue="daisy.watson@example.com"
                className="flex-1 border border-gray-300 px-4 py-2  focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Password Field */}
            <div className="flex items-center gap-4">
              <label className="w-32 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="flex-1 border border-gray-300 px-4 py-2  focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Zip/Postal Code Field */}
            <div className="flex items-center gap-4">
              <label className="w-32 text-sm font-medium text-gray-700">
                Zip/Postal Code
              </label>
              <input
                type="text"
                className="flex-1 border border-gray-300 px-4 py-2  focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Message */}
            <p className="text-sm text-gray-600">
              You already have an account with us.{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">
                Sign in
              </span>{" "}
              or continue as guest.
            </p>

            {/* Buttons */}
            <div className="flex items-center justify-between mt-4">
              <button
                type="submit"
                className="bg-s_button text-white px-6 py-2  hover:bg-green-700 transition"
              >
                Login
              </button>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot Your Password?
              </a>
            </div>
          </form>
          <div className="mt-8 w-96">
            <img src="line.png" alt="" />
          </div>
        </div>

        {/* Right Side - Order Summary */}
        <div
          className="w-[300px] h-[300px] p-4  mt-20"
          style={{ backgroundColor: "#F5F5F5" }}
        >
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <p className="text-sm font-medium mb-2">2 Items in Cart</p>

          {/* Item 1 */}
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/Greychair.png"
              alt="Go-Get’r Pushup Grips"
              className="w-16 h-16 object-cover "
            />
            <div className="text-sm">
              <p className="font-medium">Go-Get’r Pushup Grips</p>
              <p>Qty: 1</p>
              <p>$19.00</p>
              <button className="text-blue-600 hover:underline text-xs mt-1">
                View Details
              </button>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-4">
            <img
              src="/Goldchair.png"
              alt="Go-Get’r Pushup Grips"
              className="w-16 h-16 object-cover "
            />
            <div className="text-sm">
              <p className="font-medium">Go-Get’r Pushup Grips</p>
              <p>Qty: 1</p>
              <p>$19.00</p>
              <button className="text-s_button hover:underline text-xs mt-1">
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-32 mt-6 px-80 ">
        <form className="space-y-4">
          {/* First Name */}
          <div className="flex items-center gap-4">
            <label className="w-40 text-sm font-medium text-gray-700">
              First Name *
            </label>
            <input type="text" className="flex-1 border px-4 py-2 mr-96 " />
          </div>

          {/* Last Name */}
          <div className="flex items-center gap-4">
            <label className="w-40 text-sm font-medium text-gray-700">
              Last Name *
            </label>
            <input type="text" className="flex-1 border px-4 py-2 mr-96 " />
          </div>

          {/* Company */}
          <div className="flex items-center gap-4">
            <label className="w-40 text-sm font-medium text-gray-700">
              Company
            </label>
            <input type="text" className="flex-1 border px-4 py-2 mr-96" />
          </div>

          {/* Street Address */}
          <div className="flex items-center gap-4">
            <label className="w-40 text-sm font-medium text-gray-700">
              Street Address *
            </label>
            <input type="text" className="flex-1 border px-4 py-2 mr-96" />
          </div>

          {/* Country */}
          <div className="flex items-center gap-4">
            <label className="w-40 text-sm font-medium text-gray-700">
              Country *
            </label>
            <select className="flex-1 border px-4 py-2 mr-96">
              <option>Nigeria</option>
              <option>Ghana</option>
              <option>South Africa</option>
            </select>
          </div>

          {/* State/Province */}
          <div className="flex items-center gap-4">
            <label className="w-40 text-sm font-medium text-gray-700">
              State/Province *
            </label>
            <select className="flex-1 border px-4 py-2 mr-96">
              <option>Oyo</option>
              <option>Lagos</option>
              <option>Abuja</option>
            </select>
          </div>

          {/* Shipping Methods */}
          <div className="p-4">
            <h3 className="text-md font-semibold mt-6 mb-2">
              Shipping Methods
            </h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="shipping" defaultChecked />
                <div className="flex gap-20 p-4">
                  <div>$5.00</div>
                  <div>Fixed</div>
                  <div>Flat Rate</div>
                </div>
              </label>
              <label className="flex items-center gap-2 text-gray-400">
                <input type="radio" name="shipping" disabled />
                <div className="flex gap-16 p-4">
                  <div>$10.00</div>
                  <div>Table Rate</div>
                  <div>Best Way</div>
                </div>
              </label>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex  mt-6 gap-60">
            <button type="button" className="px-4 py-2">
              Back
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-s_button text-white  hover:bg-green-700 w-32"
            >
              Next
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default ShippingAddress;
