import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4 mr-56">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center text-left font-semibold text-gray-800 hover:text-green-600"
      >
        <span className="mr-2 text-xl text-green-500">
          {isOpen ? "-" : "+"}
        </span>
        <span>{title}</span>
      </button>

      {isOpen && <div className="mt-2 text-sm text-gray-800">{content}</div>}
    </div>
  );
};

const Productpage1details = () => {
  return (
    <div className="max-w- mx-56 mt-10  bg-white rounded-md w-[1242px] mr-36">
      <Accordion
        title="Details"
        content="The sofa quickly and easily turns into a spacious bed.

It is recommended to use as a sleeping place for guests, not intended for daily use as a bed."
      />
      <Accordion
        title="Sizes"
        content=""
      />
      <Accordion
        title="Care Instructions"
        content=""
      />
      <Accordion
        title="Quality and environmental information"
        content=""
      />
      <Accordion
        title="Packing Information"
        content=""
      />
      <Accordion
        title="Instructions and documents"
        content=""
      />
      <Accordion
        title="Product Availability"
        content=""
      />
      <Accordion
        title="Reviews"
        content=""
      />
    </div>
  );
};

export default Productpage1details;
