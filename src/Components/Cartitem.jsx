import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeItem } from "../Constants/cartSlice";
const Cartitem = ({ items, index, updateItemCost }) => {
  const dispatch = useDispatch();
  const [cost, setCost] = useState(
    parseInt(
      Math.floor(items.price - (items.price * items.discountPercentage) / 100)
    )
  );
  const [noofproducts, setNoOfProducts] = useState(1);

  const decrease = () => {
    if (noofproducts > 1) {
      setNoOfProducts((x) => x - 1);
      const newCost =
        cost -
        Math.floor(
          items.price - (items.price * items.discountPercentage) / 100
        );
      setCost(newCost);

      updateItemCost(index, newCost);
    }
  };

  const increase = () => {
    setNoOfProducts((x) => x + 1);
    const newCost =
      cost +
      Math.floor(items.price - (items.price * items.discountPercentage) / 100);
    setCost(newCost);

    updateItemCost(index, newCost);
  };

  const handleRemove = () => {
    dispatch(removeItem(items?.id));
  };

  return (
    <div className="border-b border-b-black border-opacity-20 mb-4 pb-3">
      <div className="flex items-start px-0 md:px-3 py-2">
        <div className="w-5/12 md:w-3/12 aspect-[7/8]">
          <img
            src={items?.thumbnail}
            className="w-full h-full rounded-sm mr-3"
            alt=""
          />
          <p className="flex gap-2 items-center justify-center mt-4">
            <button
              onClick={decrease}
              className="w-6 h-6 rounded-full border border-black flex items-center justify-center border-opacity-40"
            >
              <AiOutlineMinus className="text-sm text-black " />
            </button>

            <span className="border border-black w-10 h-7 flex justify-center items-center  border-opacity-40 font-bold">
              {noofproducts}
            </span>
            <button
              onClick={increase}
              className="w-6 h-6 rounded-full border border-black flex items-center justify-center  border-opacity-40"
            >
              <AiOutlinePlus className="text-sm text-black" />
            </button>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center md:justify-between gap-3 md:gap-3 w-12/12 md:w-10/12 ml-5 md:ml-10">
          <div className="w-full py-0 md:py-2">
            <h1 className="text-[10px] font-semibold uppercase text-[#C6877D]">
              {items?.category}
            </h1>
            <h1 className="text-xl md:text-3xl font-bold mt-0 uppercase">
              {items?.title}
            </h1>
            <h1 className="text-xs  opacity-80 pb-1">
              {items?.description.length < 60
                ? items?.description
                : items?.description.slice(0, 60) + "..."}
            </h1>
            <div className="flex items-center gap-2 mt-2 mb-1">
              <h1 className="text-sm">
                {"⭐".repeat(Math.round(items?.rating))}
              </h1>
              <h1 className="text-xs underline underline-offset-1">
                {items?.stock * 10}+reviews
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-lg font-bold">$.{cost}</p>
              <span className="line-through font-semibold text-xs opacity-70">
                $.{items?.price}
              </span>
              <h1 className="text-xs font-semibold text-green-500">
                ({items?.discountPercentage}% OFF)
              </h1>
            </div>

            <h1 className="text-xs font-bold text-green-500 uppercase">
              Free Delivery
            </h1>
            <div className="flex justify-between items-center w-full md:w-8/12">
              <button
                onClick={handleRemove}
                className="bg-[#C6877D] text-white font-semibold px-3 py-1 rounded-sm tracking-wide uppercase flex justify-center items-center gap-2 mt-4"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
