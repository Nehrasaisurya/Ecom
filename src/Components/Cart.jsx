import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cartitem from "./Cartitem";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../Constants/cartSlice";
import { useEffect } from "react";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    const updatedItemCosts = cartItems.map((item) =>
      parseInt(
        Math.floor(item.price - (item.price * item.discountPercentage) / 100)
      )
    );
    setItemCosts(updatedItemCosts);

    const newTotalCost = updatedItemCosts.reduce(
      (total, cost) => total + cost,
      0
    );
    const newFinalCost = newTotalCost + cartItems.length;
    setfinalcost(newFinalCost);
  }, [cartItems]);

  const [itemCosts, setItemCosts] = useState([]);

  const updateItemCost = (index, newCost) => {
    const updatedCosts = [...itemCosts];
    updatedCosts[index] = newCost;
    setItemCosts(updatedCosts);
    updateTotalCost(updatedCosts);
  };

  const updateTotalCost = (updatedCosts) => {
    const newTotalCost = updatedCosts.reduce((total, cost) => total + cost, 0);
    const newFinalCost = newTotalCost + cartItems.length;
    setfinalcost(newFinalCost);
  };

  const handleRemoveItem = (index) => {
    dispatch(removeItem(cartItems[index]?.id));

    const updatedItemCosts = [...itemCosts];
    updatedItemCosts.splice(index, 1);
    setItemCosts(updatedItemCosts);

    updateTotalCost(updatedItemCosts);
  };

  const totalCost = itemCosts.reduce((total, cost) => total + cost, 0);

  const [finalcost, setfinalcost] = useState(totalCost + cartItems.length);

  return (
    <div className="lg:px-24 md:px-8 px-6 py-20 bg-[#F1F3F6] h-full" id="Cart">
      <div className="">
        <div className="flex flex-col md:flex-row mx-auto">
          <div className="w-full md:w-8/12 mb-2 md:m-4">
            <div
              className="h-[68vh] bg-white mb-2 rounded-sm p-4 overflow-y-scroll custom-scroll"
              style={{
                boxShadow:
                  " 0 0 2px 0.1px rgb(0 0 0 / 0.2), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
              }}
            >
              {cartItems.length > 0 ? (
                cartItems.map((items, index) => (
                  <Cartitem
                    items={items}
                    index={index}
                    updateItemCost={updateItemCost}
                    handleRemoveItem={handleRemoveItem}
                    key={index}
                  />
                ))
              ) : (
                <div className="text-black text-center text-lg font-bold flex items-center justify-center flex-col h-[60vh]">
                  <h1>
                    Cart's feeling a bit light – let's fill it with fabulous
                    finds!
                  </h1>
                  <Link to="/">
                    <p className="mt-3 underline text-blue-600">Explore now</p>
                  </Link>
                </div>
              )}
            </div>
            <div
              className="w-full py-4 bg-white mt-6 flex justify-end px-4"
              style={{
                boxShadow:
                  " 0 0 2px 0.1px rgb(0 0 0 / 0.2), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
              }}
            >
              <button className="bg-[#FB641B] text-white px-10 py-3 font-semibold tracking-wide">
                Place Order
              </button>
            </div>
          </div>
          <div
            className="h-full md:w-4/12 mt-2 mb-2 md:m-4"
            style={{
              boxShadow:
                " 0 0 2px 0.1px rgb(0 0 0 / 0.2), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            }}
          >
            <div className="bg-white w-full p-4 rounded-sm text-md">
              <h1 className="font-semibold text-2xl mb-3">Price Details:</h1>
              <div className="flex justify-between mt-3 ">
                <h1>Price:</h1>
                <h1>$.{parseInt(totalCost)}.00</h1>
              </div>
              <div className="flex justify-between mt-2 ">
                <h1>No. of Items:</h1>
                <h1>{cartItems.length}</h1>
              </div>
              <div className="flex justify-between mt-2 ">
                <h1>Platform Fee:</h1>
                <h1>$.{cartItems.length}.00</h1>
              </div>

              <div className="flex justify-between mt-2 border-black border-opacity-30 border-b-[1px] pb-3">
                <h1>Delivery Fee:</h1>
                <h1 className="text-green-600">Free</h1>
              </div>
              <div className="flex justify-between font-bold text-md pt-3 ">
                <h1>Total Amount:</h1>
                <h1 className="text-blue-700">
                  $.
                  {parseInt(finalcost)}.00
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
