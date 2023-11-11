import React from "react";
import { Link as MainLink } from "react-scroll";

const Categories = () => {
  return (
    <div className="pt-32 pb-0 md:pb-32 lg:px-24 md:px-8 px-6">
      <h1 className="text-2xl font-semibold mb-5">Shop Our Categories...</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-0 md:px-10">
        <MainLink to="Products" className="cursor-pointer">
          <div className="w-full h-[200px] lg:h-[250px] overflow-hidden rounded-md imgdiv">
            <img
              src="images/smartphones.jpg"
              alt=""
              className="mb-5 w-full sm:h-full object-cover"
            />
            <h1 className="absolute bottom-3 left-3 text-white font-semibold z-10 ">
              SmartPhones
            </h1>
          </div>
        </MainLink>
        <MainLink to="Products" className="cursor-pointer">
          <div className="w-full h-[200px] lg:h-[250px]  overflow-hidden rounded-md imgdiv ">
            <img
              src="images/laptops.jpg"
              alt=""
              className="mb-5 rounded-md h-full w-full"
            />
            <h1 className="absolute bottom-3 left-3 text-white font-semibold z-10">
              Laptops
            </h1>
          </div>
        </MainLink>
        <MainLink to="Products" className="cursor-pointer">
          <div className="w-full h-[200px] lg:h-[250px] overflow-hidden rounded-md imgdiv ">
            <img
              src="images/fragrances.jpg"
              alt=""
              className="mb-5 rounded-md w-full h-full"
            />
            <h1 className="absolute bottom-3 left-3 text-white font-semibold z-10">
              Fragrance
            </h1>
          </div>
        </MainLink>
        <MainLink to="Products" className="cursor-pointer">
          <div className="w-full h-[200px] lg:h-[250px] overflow-hidden rounded-md imgdiv ">
            <img
              src="images/skincare.jpg"
              alt=""
              className="mb-5 rounded-md w-full h-full"
            />
            <h1 className="absolute bottom-3 left-3 text-white font-semibold z-10">
              Skincare
            </h1>
          </div>
        </MainLink>
        <MainLink to="Products" className="cursor-pointer">
          <div className="w-full h-[200px] lg:h-[250px] overflow-hidden rounded-md imgdiv ">
            <img
              src="images/groceries.jpg"
              alt=""
              className="mb-5 rounded-md w-full h-full"
            />
            <h1 className="absolute bottom-3 left-3 text-white font-semibold z-10">
              Groceries
            </h1>
          </div>
        </MainLink>
        <MainLink to="Products" className="cursor-pointer">
          <div className="w-full h-[200px] lg:h-[250px]  overflow-hidden rounded-md imgdiv ">
            <img
              src="images/home decoratives.jpg"
              alt=""
              className="mb-5 rounded-md w-full h-full"
            />
            <h1 className="absolute bottom-3 left-3 text-white font-semibold z-10">
              Home Decoratives
            </h1>
          </div>
        </MainLink>
      </div>
    </div>
  );
};

export default Categories;
