import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsHeadset } from "react-icons/bs";
import { BsCreditCard2FrontFill } from "react-icons/bs";

const Features = () => {
  return (
    <div className="lg:px-24 md:px-8 px-6 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 px-0 md:px-10">
        <div className="text-center border border-[#c6877d] py-4 rounded-md">
          <span className="flex items-center justify-center gap-3 text-xl font-semibold">
            <CiDeliveryTruck className="text-4xl text-[#986860]" />
            Free Shipping
          </span>
          <h1>Free shipping on all products</h1>
        </div>
        <div className="text-center border border-[#c6877d] py-4 rounded-md">
          <span className="flex items-center justify-center gap-3 text-xl font-semibold">
            <AiOutlineDollarCircle className="text-3xl text-[#986860]" />
            Money Guarantee
          </span>
          <h1>30 days moneyback</h1>
        </div>
        <div className="text-center border border-[#c6877d] py-4 rounded-md">
          <span className="flex items-center justify-center gap-3 text-xl font-semibold">
            <BsHeadset className="text-4xl text-[#986860]" />
            Online Support
          </span>
          <h1>Technical support 24/7</h1>
        </div>
        <div className="text-center border border-[#c6877d] py-4 rounded-md">
          <span className="flex items-center justify-center gap-3 text-xl font-semibold">
            <BsCreditCard2FrontFill className="text-4xl text-[#986860]" />
            Secure Payment
          </span>
          <h1>All cards are accepted</h1>
        </div>
      </div>
    </div>
  );
};

export default Features;
