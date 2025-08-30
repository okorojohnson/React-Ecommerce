import React from "react";

const Hero2 = () => {
  return (
    <div
      className="w-full h-[180px] mt-40"
      style={{ backgroundImage: "url(/hero2BG.png)" }}
    >
      <div className="flex gap-2 pt-16 px-16 ursor-pointer ">
        <small className="font-bold text-white">Home</small>
        <img src="/Vector v.png" alt="" />
        <small className="text-white">New Luma Yoga Collection</small>
      </div>
      <div className="px-16 pt-6 ">
        <h2 className="font-semibold text-white text-3xl ">
          Simple Wood Chair Collection
        </h2>
      </div>
    </div>
  );
};

export default Hero2;
