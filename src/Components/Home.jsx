import React from "react";
import { Link as MainLink } from "react-scroll";

const Home = () => {
  return (
    <div
      className="w-full h-[93vh] flex items-center justify-center py-20 lg:px-24 md:px-8 px-6 bg-fixed bg-blue-100"
      id="Home"
    >
      <div className="flex flex-col items-center justify-between h-screen py-10">
        <span></span>
        <span></span>
        <span></span>
        <div className="w-9/12 text-center">
          <h1 className="font-bold text-4xl">
            Discover a World of Products, From Gadgets to Groceries, All in One
            Place!
          </h1>
          <div className="flex justify-center ">
            <MainLink to="Products">
              <button className="bg-[#C6877D] px-4 py-2 text-white rounded-full mt-7 flex items-center gap-2 font-semibold">
                Shop Now
              </button>
            </MainLink>
          </div>
        </div>
        <div className="w-full md:w-6/12 mb-0 md:-mb-10">
          <img src="images/home.png" alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
