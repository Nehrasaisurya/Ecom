import React from "react";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="fixed w-full z-10 py-4 lg:px-24 md:px-8 px-6 " id="Header">
      <div className=" w-full flex justify-between px-2 rounded-md">
        <Link to="/">
          <h1 className="text-[#0e0f15] font-bold flex items-center  text-2xl ">
            EC<span className="text-[#C6877D]">.</span>
          </h1>
        </Link>

        <div className="flex items-center gap-3 text-lg">
          <div className="relative">
            <Link to="/cart">
              <BsHandbag />
              <h1 className="absolute -top-2 -right-2 bg-blue-400 w-4 h-4 text-white rounded-full flex justify-center items-center text-xs">
                {cartItems.length}
              </h1>
            </Link>
          </div>
          <AiOutlineUser />
        </div>
      </div>
    </div>
  );
};

export default Header;
