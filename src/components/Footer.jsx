import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <section className=" relative overflow-x-hidden bg-black w-full h-[210px]">
      <div className="flex items-center justify-between py-16">
        <div className="px-36">
          <ul className="flex gap-2">
            <li>
              <Link to="/" className="hover:text-green-400 text-white">
                Policy
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-green-400 text-white">
                Terms & Condition
              </Link>
            </li>

            <li>
              <Link to="/" className="hover:text-green-400 text-white">
                Help
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <img src="/Vector.png" alt="SimpleWood." className="h-8" />
          <span className="text-xl font-bold text-white">SimpleWood</span>
        </div>
        <div>
          <div className="flex gap-4 text-white/70 text-xl px-36">
            <FaFacebook />
            <FaTwitter />
            <FaYoutube />
            <FaGoogle />
          </div>
        </div>
      </div>
      <div>
        <p className="text-white/30 flex  items-center justify-center">
          Copyring © Viachas Kul. All right reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
