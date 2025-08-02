import React from "react";

const Button = ({ className, btnText }) => {
  return (
    <button
      className={`${className}  bg-s_button text-white hover:bg-s_button/70 hover:shadow-lg transition-all duration-300 ease-in-out"
          />`}
    >
      {btnText}
    </button>
  );
};

export default Button;
