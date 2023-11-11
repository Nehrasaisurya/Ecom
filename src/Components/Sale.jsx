import React from "react";
import { Link as MainLink } from "react-scroll";

const Sale = () => {
  return (
    <div className="py-20 lg:px-24 md:px-8 px-6">
      <div className="bg-[#8d9d8b] flex flex-col md:flex-row rounded-md py-10 xl:py-0">
        <div className="w-full md:w-6/12 flex justify-center items-center flex-col text-white ">
          <h1 className="text-2xl my-10 md:text-4xl font-semibold uppercase text-center">
            Get 10% cashback <br /> on
            <br /> first order over $30
          </h1>
          <MainLink to="Products">
            <button className="bg-[#C6877D] px-4 py-2 text-white rounded-md font-semibold">
              Order Now
            </button>
          </MainLink>
        </div>
        <div className="w-full md:w-6/12">
          <img
            src="images/headset.png"
            alt=""
            className="w-full mt-0 md:-mt-40"
          />
        </div>
      </div>
    </div>
  );
};

export default Sale;
