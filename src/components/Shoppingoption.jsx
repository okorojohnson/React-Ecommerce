import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { CgMenuGridR } from "react-icons/cg";
import { ImArrowUp } from "react-icons/im";
const Shoppingoption = () => {
  return (
    <section className="px-28 mt-48 bg-white min-h-screen w-full  ">
      <div className="grid grid-cols-3 pt-2 ">
        {/* left */}
        <div className="w-[278px] space-y-4 ">
          <h3 className="text-lg font-semibold">Shopping Options</h3>
          <div className="flex items-center justify-between text-[#4F4F4F] text-base border-t">
            <span>Style</span>
            <FaChevronDown />
          </div>
          <div className="flex items-center justify-between text-[#4F4F4F] text-base border-t">
            <span>Category</span>
            <FaChevronDown />
          </div>
          <div className="flex items-center justify-between text-[#4F4F4F] text-base border-t">
            <span>Style</span>
            <FaChevronDown />
          </div>
          <div className="flex items-center justify-between text-[#4F4F4F] text-base border-t">
            <span>Size</span>
            <FaChevronDown />
          </div>
          <div className="flex items-center justify-between text-[#4F4F4F] text-base border-t">
            <span>Price</span>
            <FaChevronDown />
          </div>
          <div className="flex items-center justify-between text-[#4F4F4F] text-base border-t border-b py-2">
            <span>Color</span>
            <FaChevronDown />
          </div>
          <div>
            <span className="text-lg font-sm text-[#212121]">
              Compare Products
            </span>{" "}
            <span className="text-xs text-[#828282]">(2 items)</span>
          </div>
          <span className="flex items-center gap-2 text-sm underline">
            <IoClose />
            Summit Watch
          </span>
          <span className="flex items-center gap-2 text-sm underline">
            <IoClose />
            Cruise Dual Analog Watch
          </span>
          <div className="flex space-x-9 ">
            <button className="text-sm border bg-s_button text-furnituregrey w-[100px] py-2">
              Compare
            </button>
            <button className="text-sm underline">Clear All</button>
          </div>
        </div>
        {/* rightside top */}
        <div className="col-span-2 ">
          <div className="flex justify-between">
            {/* items */}
            <div className="flex items-center ">
              <span className="h-[34px] w-[34px] bg-[#DEDEDE] flex items-center justify-around">
                <CgMenuGridR />
              </span>
              <span className="h-[34px] w-[34px] bg-[#F0F0F0] flex items-center justify-around">
                <img src="/hero2image2.png" alt="" />
              </span>
              <p className="text-sm font-normal text-[#828282] ml-5">
                Items 1-9 of 32
              </p>
            </div>
            {/* sort */}
            <div className="flex items-center gap-4">
              <span className="text-[#828282] font-normal text-sm">
                Sort By
              </span>
              <button className="flex items-center justify-between w-[130px] h-[34px] bg-[#F0F0F0] px-3">
                Position <FaChevronDown />
              </button>
              <ImArrowUp />
            </div>
          </div>
          {/* display section */}
          <section className="grid grid-cols-3 pb-16">
            <div className="">
              <div className="w-[213px] h-[262px] mt-[44px] ml-8 ">
                <img src="/Greychair.png" alt="" className="bg-s_cards" />
              </div>
              <div className="font-bold">Cupboards</div>
              <ul className="flex gap-2">
                <li className="text-#A2A2A2">$45.00</li>
                <li>$44.00</li>
              </ul>
              <div className="flex ">
                <img src="/Staryellow.png" alt="" />
                <img src="/Staryellow.png" alt="" />
                <img src="/Staryellow.png" alt="" />
                <img src="/Stargrey.png" alt="" />
                <img src="/Stargrey.png" alt="" />
              </div>
            </div>
            <div>
              <div className="w-[213px] h-[262px] mt-[44px] ml-8 ">
                <img src="/Goldchair.png" alt="" className="bg-s_cards" />
              </div>
              <div className="font-bold">Cupboards</div>
              <ul className="flex gap-2">
                <li className="text-#A2A2A2">$45.00</li>
                <li>$44.00</li>
              </ul>
              <div className="flex">
                <img src="/Staryellow.png" alt="" />
                <img src="/Staryellow.png" alt="" />
                <img src="/Staryellow.png" alt="" />
                <img src="/Stargrey.png" alt="" />
                <img src="/Stargrey.png" alt="" />
              </div>
            </div>
            <div>
              <div className="w-[213px] h-[262px] mt-[44px] ml-8 ">
                <img src="/Brownchair.png" alt="" className="bg-s_cards" />
              </div>
              <div className="font-bold">Cupboards</div>
              <ul className="flex gap-2">
                <li className="text-#A2A2A2">$45.00</li>
                <li>$44.00</li>
              </ul>
              <div className="flex">
                <img src="/Staryellow.png" alt="" />
                <img src="/Staryellow.png" alt="" />
                <img src="/Staryellow.png" alt="" />
                <img src="/Stargrey.png" alt="" />
                <img src="/Stargrey.png" alt="" />
              </div>
            </div>
            <div>
              <div className="w-[213px] h-[262px] mt-[44px] ml-8 ">
                <img src="/Goldchair.png" alt="" className="bg-s_cards" />
              </div>
              <div className="font-bold">Cupboards</div>
              <ul className="flex gap-2">
                <li className="text-#A2A2A2">$45.00</li>
                <li>$44.00</li>
              </ul>
              <div className="flex">
                <img src="/Staryellow.png" alt="" />
                <img src="/Staryellow.png" alt="" />
                <img src="/Staryellow.png" alt="" />
                <img src="/Stargrey.png" alt="" />
                <img src="/Stargrey.png" alt="" />
              </div>
            </div>
            <div>
              <div className="w-[213px] h-[262px] mt-[44px] ml-8 ">
                <img src="/Brownchair.png" alt="" className="bg-s_cards" />
              </div>
              <div className="font-bold">Cupboards</div>
              <ul className="flex gap-2">
                <li className="text-#A2A2A2">$45.00</li>
                <li>$44.00</li>
              </ul>
              <div className="flex">
                <img src="/Staryellow.png" alt="" />
                <img src="/Staryellow.png" alt="" />
                <img src="/Staryellow.png" alt="" />
                <img src="/Stargrey.png" alt="" />
                <img src="/Stargrey.png" alt="" />
              </div>
            </div>
            <div>
              <div className="w-[213px] h-[262px] mt-[44px] ml-8 ">
                <img src="/Greychair.png" alt="" className="bg-s_cards" />
              </div>
              <div className="font-bold">Cupboards</div>
              <ul className="flex gap-2">
                <li className="text-#A2A2A2">$45.00</li>
                <li>$44.00</li>
              </ul>
              <div className="flex">
                <img src="/Staryellow.png" alt="" />
                <img src="/Staryellow.png" alt="" />
                <img src="/Staryellow.png" alt="" />
                <img src="/Stargrey.png" alt="" />
                <img src="/Stargrey.png" alt="" />
              </div>
            </div>
            <div>
              <div className="w-[213px] h-[262px] mt-[44px] ml-8 ">
                <img src="/Greychair.png" alt="" className="bg-s_cards" />
              </div>
              <div className="font-bold">Cupboards</div>
              <ul className="flex gap-2">
                <li className="text-#A2A2A2">$45.00</li>
                <li>$44.00</li>
              </ul>
              <div className="flex">
                <img src="/Staryellow.png" alt="" />
                <img src="/Staryellow.png" alt="" />
                <img src="/Staryellow.png" alt="" />
                <img src="/Stargrey.png" alt="" />
                <img src="/Stargrey.png" alt="" />
              </div>
            </div>
            <div>
              <div className="w-[213px] h-[262px] mt-[44px] ml-8 ">
                <img src="/Goldchair.png" alt="" className="bg-s_cards" />
              </div>
              <div className="font-bold">Cupboards</div>
              <ul className="flex gap-2">
                <li className="text-#A2A2A2">$45.00</li>
                <li>$44.00</li>
              </ul>
              <div className="flex">
                <img src="/Staryellow.png" alt="" />
                <img src="/Staryellow.png" alt="" />
                <img src="/Staryellow.png" alt="" />
                <img src="/Stargrey.png" alt="" />
                <img src="/Stargrey.png" alt="" />
              </div>
            </div>
            <div>
              <div className="w-[213px] h-[262px] mt-[44px] ml-8 ">
                <img src="/Greychair.png" alt="" className="bg-s_cards" />
              </div>
              <div className="font-bold">Cupboards</div>
              <ul className="flex gap-2">
                <li className="text-#A2A2A2">$45.00</li>
                <li>$44.00</li>
              </ul>
              <div className="flex">
                <img src="/Staryellow.png" alt="" />
                <img src="/Staryellow.png" alt="" />
                <img src="/Staryellow.png" alt="" />
                <img src="/Stargrey.png" alt="" />
                <img src="/Stargrey.png" alt="" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
export default Shoppingoption;
