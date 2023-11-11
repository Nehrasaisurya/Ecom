import React from "react";
import { Link as MainLink } from "react-scroll";

const Cashback = () => {
  return (
    <div className="py-10 lg:px-24 md:px-8 px-6">
      <div className="px-0 md:px-10">
        <div className="bg-[#e7d1ca] flex flex-col md:flex-row h-full md:h-[400px] overflow-hidden rounded-md">
          <img
            src="images/side.jpg"
            alt="..."
            className="w-12/12 md:w-6/12 rounded-l-md"
          />
          <div className="w-12/12 md:w-6/12 p-10">
            <h1 className="text-5xl font-semibold">
              ECOM<span className="text-[#c6877d]">...</span>
            </h1>
            <h1 className="font-semibold mb-5">
              "Discover a World of Products, From Gadgets to Groceries, All in
              One Place!"
            </h1>
            <h1 className="font-semibold opacity-90 text-justify text-sm">
              Your Ultimate Shopping Destination. Explore & Shop Premium
              Products. Discover Quality, Convenience, and Style. Start Your
              E-commerce Journey Today! Explore a vast selection of premium
              products, from fashion to electronics and more, all curated to
              elevate your shopping experience. Start shopping today and
              redefine the way you buy online at ecom.
            </h1>
            <div>
              <MainLink to="Products">
                <button className="bg-[#C6877D] px-4 py-2 text-white rounded-sm mt-7">
                  Shop Now
                </button>
              </MainLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cashback;
