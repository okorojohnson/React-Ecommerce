import React from "react";
import Button from "./mini-components/Button";
const onClick = () => setShowMore(true);

const CollectionStaircase = () => {
  return (
    <section className="w-full h-[618px] bg-[#F2F2F2]   ">
      <div className="p-16 flex items-center justify-center gap-4">
        <div>
          <div className="">
            <img src="stairs.png" alt="" className="w-[300px] h[232px]" />
          </div>
          <div className="mt-2">
            <Button btnText="Lifestyle" className="w-24 rounded-sm" />
          </div>
          <div>
            <p className="font-bold">
              Staircase Ideas: New Riser Finishes to <br /> Transform Your
              Staircase
            </p>
          </div>
          <div className="">
            <small>
              Our statement staircase ideas can give your hallway a <br /> whole
              new lease of life without any messy building work <br /> or
              plannin...
            </small>
          </div>
        </div>
        <div>
          <div>
            <img src="sheves.png" alt="" className="w-[300px] h[232px]" />
          </div>
          <div className="mt-2">
            <Button btnText="NEWS" className="w-24 rounded-sm bg-[#0081B8]" />
          </div>
          <div>
            <p className="font-bold">
              Staircase Ideas: New Riser Finishes to <br /> Transform Your
              Staircase
            </p>
          </div>
          <div className="">
            <small>
              Our statement staircase ideas can give your hallway a <br /> whole
              new lease of life without any messy building work <br /> or
              plannin...
            </small>
          </div>
        </div>
        <div>
          <div>
            <img src="whitsheves.png" alt="" className="w-[300px] h[232px]" />
          </div>
          <div className="mt-2">
            <Button btnText="Lifestyle" className="w-24 rounded-sm" />
          </div>
          <div>
            <p className="font-bold">
              Staircase Ideas: New Riser Finishes to <br /> Transform Your
              Staircase
            </p>
          </div>
          <div className="">
            <small>
              Our statement staircase ideas can give your hallway a <br /> whole
              new lease of life without any messy building work <br /> or
              plannin...
            </small>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={onClick}
          className="text-#828282 hover:underline font-medium"
        >
          See More
        </button>
      </div>
    </section>
  );
};

export default CollectionStaircase;
