import React from "react";

// Reusable Product Card Component
const ProductCard = ({ imageSrc, title, oldPrice, newPrice }) => (
  <div className="w-[288px] h-[350px] mt-[44px] ml-8 px-8 mx-32 gap-2">
    <div className="h-[262px]">
      <img
        src={imageSrc}
        alt={title}
        className="bg-s_cards w-full h-full object-cover"
      />
    </div>
    <div className="font-bold mt-2">{title}</div>
    <ul className="flex gap-2 mt-1">
      <li style={{ color: "#A2A2A2" }}>{oldPrice}</li>
      <li>{newPrice}</li>
    </ul>
    <div className="flex mt-1">
      <img src="/Staryellow.png" alt="star" />
      <img src="/Staryellow.png" alt="star" />
      <img src="/Staryellow.png" alt="star" />
      <img src="/Stargrey.png" alt="star" />
      <img src="/Stargrey.png" alt="star" />
    </div>
  </div>
);

// Main Page Component
const Productpage1details = () => {
  const productData = [
    {
      imageSrc: "/Greychair.png",
      title: "Cupboards",
      oldPrice: "$45.00",
      newPrice: "$44.00",
    },
    {
      imageSrc: "/Goldchair.png",
      title: "Cupboards",
      oldPrice: "$45.00",
      newPrice: "$44.00",
    },
    {
      imageSrc: "/Brownchair.png",
      title: "Cupboards",
      oldPrice: "$45.00",
      newPrice: "$44.00",
    },
    {
      imageSrc: "/Goldchair.png",
      title: "Cupboards",
      oldPrice: "$45.00",
      newPrice: "$44.00",
    },
  ];

  return (
    <div className="px-4">
      {/* Section Label */}
      <div className="mt-16 text-black flex items-center justify-center text-lg font-semibold">
        Related Products
      </div>

      {/* Product Cards */}
      <div className=" justify-start mt-6 grid grid-cols-4 mx-36">
        {productData.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Productpage1details;
