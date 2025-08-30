import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import Button from "./mini-components/Button";

export default function ChaircollectionsWithSlider() {
  const { images, currentIndex, setCurrentIndex } = useContext(DataContext);

  //  Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, setCurrentIndex]);

  return (
    <section className="mt-40 w-full">
      {/* Breadcrumb */}
      <div>
        <div className="flex gap-2 pt-16 px-20 mx-36 cursor-pointer">
          <small className="font-bold text-black">Home</small>
          <img src="/Vector v.png" alt="arrow icon" />
          <small className="text-black">New Luma Yoga Collection</small>
        </div>
      </div>

      {/* Image Slider */}
      <div className="grid grid-cols-2 gap-32">
        <div className="px-20 mx-36">
          <div className="relative flex justify-center items-center w-[500px] h-[500px] mt-8 bg-s_cards">
            <img
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              className=" w-[438px] h-[400px] max-w-md object-cover"
            />

            {/* ⬅️ Left Arrow */}
            <button
              onClick={() =>
                setCurrentIndex(
                  currentIndex === 0 ? images.length - 1 : currentIndex - 1
                )
              }
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-200 text-xl"
              aria-label="Previous"
            >
              ←
            </button>

            {/* ➡️ Right Arrow */}
            <button
              onClick={() =>
                setCurrentIndex(
                  currentIndex === images.length - 1 ? 0 : currentIndex + 1
                )
              }
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-200 text-xl"
              aria-label="Next"
            >
              →
            </button>
          </div>
          {/* small chair div*/}
          <div className="flex gap-2 mt-2">
            <img src="/Greychair.png" alt="" className="w-[54px] h-[85px]" />
            <img src="/image16.png" alt="" className="w-[54px] h-[85px]" />
            <img src="/image17.png" alt=""  className="w-[54px] h-[85px]" />
          </div>
        </div>
        {/* right side*/}
        <div className="mt-6 gap-10 w-[500px] h-[500px]">
          <div>
            <h2 className="font-semibold text-3xl">
              Simple Wood Chair <br /> Collection
            </h2>
          </div>
          {/* star viv */}
          <div className="flex gap-14 mt-6">
            <div className="flex">
              <img src="/Staryellow.png" alt="" />
              <img src="/Staryellow.png" alt="" />
              <img src="/Staryellow.png" alt="" />
              <img src="/Stargrey.png" alt="" />
              <img src="/Stargrey.png" alt="" />
            </div>
            <ul className="flex gap-4">
              <li>3 reviews</li>
              <li>Add Your Review</li>
            </ul>
          </div>
          <div className="mt-10">As low as</div>
          <div className="flex items-center justify-between">
            <div className="font-semibold text-3xl">$45.00</div>
            <div>
              <div className="flex">
                <img
                  src="/image18.png"
                  alt=""
                  className="w-4 h-4 rounded-full"
                />
                <div className="font-bold mr-16">IN STOCK</div>
              </div>
              <div>SKU#: 24-MB05</div>
            </div>
          </div>
          <div className="flex place-items-baseline gap-6">
            <span>Quantity</span>
            <Button
              btnText="-  1  +"
              className="bg-white text-black hover:bg-transparent border-black border-2 px-10 py-2  "
            />
          </div>
          <Button btnText="Add to Cart" className="font-bold px-8 py-3 mt-8" />
          <div className="mt-8 flex items-center gap-10">
            <div className="flex gap-2">
              <img src="/greyheart.png" alt="ADD TO WISH LIST" />
              <small>ADD TO WISH LIST</small>
            </div>
            <div className="flex gap-2">
              <img src="/image19.png" alt="ADD TO COMPARE" />
              <small>ADD TO COMPARE</small>
            </div>
            <div className="flex gap-2">
              <img src="/email.png" alt="EMAIL" />
              <small>EMAIL</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
