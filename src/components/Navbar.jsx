import React from "react";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  return (
    <nav
      className={`px-30 lg:px-60 absolute top-0 left-0 right-0 ${
        isHomepage ? "bg-transparent" : "bg-black"
      } text-white z-50 py-6 gap-4 h-[170px]`}
    >
      <div className="flex w-full flex-cols justify-between items-center gap-32">
        <div className="hidden lg:flex lg:flex-shrink-0">
          <input
            type="text"
            placeholder="Search"
            className="w-48 px-3 py-2 border border-gray-500 rounded-full bg-transparent text-white placeholder:text-gray-300"
          />
        </div>
        <div className="flex items-center justify-center gap-2">
          <img src="/Vector.png" alt="SimpleWood." className="h-8" />
          <span className="text-xl font-bold">SimpleWood</span>
        </div>
        <div className="hidden lg:flex items-center gap-4 text-sm">
          <span className="cursor-pointer hover:text-green-400">English</span>
          <span className="cursor-pointer hover:text-green-400">USD</span>
          <FaHeart className="hover:text-green-400" />
          <FaUser className="hover:text-green-400" />
          <FaShoppingCart className="hover:text-green-400" />
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center pt-6 ">
        <ul className="flex flex-wrap gap-8 text-sm">
          <li>
            <Link to="/" className="hover:text-green-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-green-400">
              Products
            </Link>
          </li>
          <li>
            <Link to="/elements" className="hover:text-green-400">
              Elements
            </Link>
          </li>
          <li>
            <Link to="/pages" className="hover:text-green-400">
              Pages
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-green-400">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/sale" className="hover:text-green-400">
              Sale
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
