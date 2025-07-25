import React from "react";
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="min-h-screen  bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url(/BGnav.png)" }}
    >
      <div className="bg-black/60 min-h-screen flex items-center justify-between px-12 py-20 gap-12">
        <div className="flex flex-col gap-6 text-white/70 text-xl">
          <FaFacebook />
          <FaTwitter />
          <FaYoutube />
          <FaGoogle />
        </div>

        <div className="text-white max-w-lg">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            SimpleWood <br /> Chair Collection
          </h1>
          <p className="mb-6 text-lg">
            Find hand-curated collections that fit your style, space, and
            budget.
          </p>
          <button className="bg-s_button hover:bg-s_button/70 text-white py-2 px-6 rounded w-full lg:w-32 ">
            Shop Now
          </button>
        </div>

        <div className="flex gap-3 mt-14">
          <div className="flex flex-row lg:flex-col space-y-3">
            <img src="/image1.png" alt="" />
            <img src="/image2.png" alt="" />
          </div>
          <img src="/image3.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
