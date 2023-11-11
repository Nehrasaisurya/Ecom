import React from "react";
import Home from "./Home";
import Categories from "./Categories";
import Todaydeals from "./Todaydeals";
import UptoOff from "./UptoOff";
import Cashback from "./Cashback";
import Products from "./Products";
import Sale from "./Sale";
import Features from "./Features";
import Footer from "./Footer";

const Body = () => {
  return (
    <div>
      <Home />
      <Categories />
      <Todaydeals />
      <UptoOff />
      <Cashback />
      <Products />
      <Sale />
      <Features />
      <Footer />
    </div>
  );
};

export default Body;
