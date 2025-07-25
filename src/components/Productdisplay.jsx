import React from "react";

const Productdisplay = () => {
  return (
    <section className="px-4 md:px-6 lg:px-12 xl:px-40 2xl:px-72">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-8 py-20">
        <div className="bg-white ">
          <img src="/sofa.svg" alt="Sofa" className="w-[606px]  mb-4" />
          <div className="flex items-center gap-2">
            <img src="/plus.png" alt="icon" className="w-6 h-6" />
            <span className="text-base font-medium">Sofa</span>
          </div>
        </div>

        <div className="bg-white p-4 ">
          <img
            src="/cupboard2.png"
            alt="Cupboard"
            className="w-[606px] h-[680px] mb-4"
          />
          <div className="flex items-center gap-2">
            <img src="/plus.png" alt="icon" className="w-6 h-6" />
            <span className="text-base font-medium">Cupboard</span>
          </div>
        </div>

        <div className="bg-white p-4 ">
          <img
            src="/Table.svg"
            alt="Tables"
            className="w-[606px] h-[396px] mb-4"
          />
          <div className="flex items-center gap-2">
            <img src="/plus.png" alt="icon" className="w-6 h-6" />
            <span className="text-base font-medium">Tables</span>
          </div>
        </div>

        <div className="bg-white p-4 ">
          <img
            src="/bed2.png"
            alt="Beds & Mattresses"
            className="w-[606px] h-[472px] mb-4"
          />
          <div className="flex items-center gap-2">
            <img src="/plus.png" alt="icon" className="w-6 h-6" />
            <span className="text-base font-medium">Beds & Mattresses</span>
          </div>
        </div>

        <div className="bg-white p-4 ">
          <img
            src="/lamp2.png"
            alt="Floor Lamp"
            className="w-[606px] h-[842px] mb-4"
          />
          <div className="flex items-center gap-2">
            <img src="/plus.png" alt="icon" className="w-6 h-6" />
            <span className="text-base font-medium">Floor Lamp</span>
          </div>
        </div>

        <div className=" text-black p-6 text-center flex flex-col justify-center w-[606px] h-[380px] border">
          <h2 className="text-5xl mb-2 px-8">Get 10% Discount</h2>
          <p className="text-sm mb-3 px-16">
            Get 10% discount with notified about the latest news and updates, no
            spam, we proise1
          </p>
          <div className="">
            <input
              type="email"
              placeholder="Enter your email address shadow-lg"
              className="p-6 w-72 px-4 py-2 rounded-full border border-gray-500 bg-transparent text-white placeholder:text-gray-300"
            />
          </div>
        </div>

        <div className="bg-white p-4 ">
          <img
            src="/commode2.png"
            alt="Commode"
            className="w-[606px] h-[396px] mb-4"
          />
          <div className="flex items-center gap-2">
            <img src="/plus.png" alt="icon" className="w-6 h-6" />
            <span className="text-base font-medium">Commode</span>
          </div>
        </div>

        <div className="bg-white p-4 ">
          <img src="/she.svg" alt="Shelving" className="w-full mb-4" />
          <div className="flex items-center gap-2">
            <img src="/plus.png" alt="icon" className="w-6 h-6" />
            <span className="text-base font-medium">Shelving</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productdisplay;
