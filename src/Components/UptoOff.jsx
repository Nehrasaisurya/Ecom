import React from "react";

const UptoOff = () => {
  return (
    <div>
      <div className="lg:px-24 md:px-8 px-6 py-32">
        <h1 className="text-2xl font-semibold mb-5">Get Upto 60% Off...</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 px-0 md:px-10">
          <div className="h-[350px] bg-[#8b7c6c] rounded-md py-3">
            <h1 className="text-xl font-semibold text-white mt-6 text-center mb-11">
              Get 27% Off
              <br /> on Electronics
            </h1>
            <img
              src="images/upto-electronics.jpg"
              className="w-full h-2/3 rounded-b-md"
              alt=""
            />
          </div>
          <div className="h-[350px] bg-[#8695AA] rounded-md py-3">
            <h1 className="text-xl font-semibold text-white mt-6 text-center mb-11">
              Get 43% Off
              <br /> on Fragrances
            </h1>
            <img
              src="images/upto-fragrance.jpg"
              className="w-full h-2/3 rounded-b-md"
              alt=""
            />
          </div>
          <div className="h-[350px] bg-[#B7B8B3] rounded-md py-3">
            <h1 className="text-xl font-semibold text-white mt-6 text-center mb-11">
              Get 58% Off
              <br /> on Groceries
            </h1>
            <img
              src="images/upto-groceries.jpg"
              className="w-full h-2/3 rounded-b-md"
              alt=""
            />
          </div>
          <div className="h-[350px] bg-[#819492] rounded-md py-3">
            <h1 className="text-xl font-semibold text-white mt-6 text-center mb-11">
              Get 60% Off
              <br /> on Homedecoratives
            </h1>
            <img
              src="images/upto-decoratives.jpg"
              className="w-full h-2/3 rounded-b-md"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UptoOff;
