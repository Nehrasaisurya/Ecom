import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState();
  const [filter, setfilter] = useState(data);

  const fetchData = async () => {
    const url = "https://dummyjson.com/products";

    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result.products);
      setfilter(result.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const smartphones = () => {
    let filterdata = data.filter((item) => item.category === "smartphones");
    setfilter(filterdata);
  };
  const laptops = () => {
    let filterdata = data.filter((item) => item.category === "laptops");
    setfilter(filterdata);
  };
  const fragrances = () => {
    let filterdata = data.filter((item) => item.category === "fragrances");
    setfilter(filterdata);
  };
  const skincare = () => {
    let filterdata = data.filter((item) => item.category === "skincare");
    setfilter(filterdata);
  };
  const groceries = () => {
    let filterdata = data.filter((item) => item.category === "groceries");
    setfilter(filterdata);
  };
  const homedeco = () => {
    let filterdata = data.filter((item) => item.category === "home-decoration");
    setfilter(filterdata);
  };

  return (
    <div className="lg:px-24 md:px-8 px-6 py-20" id="Products">
      <h1 className="text-2xl font-semibold">Visit Our Products...</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-7 my-10">
        <div className="flex gap-2 md:gap-7">
          <button
            className="border border-[#C6877D] bg-[#f8f9fa] px-4 py-2 font-semibold rounded-3xl"
            onClick={() => smartphones()}
          >
            SmartPhones
          </button>
          <button
            className="border border-[#C6877D] bg-[#f8f9fa] px-4 py-2 font-semibold rounded-3xl "
            onClick={() => laptops()}
          >
            Laptops
          </button>
          <button
            className="border border-[#C6877D] bg-[#f8f9fa] px-4 py-2 font-semibold rounded-3xl "
            onClick={() => fragrances()}
          >
            Perfumes
          </button>
        </div>
        <div className="flex gap-1 md:gap-7">
          <button
            className="border border-[#C6877D] bg-[#f8f9fa] px-4 py-2 font-semibold rounded-3xl "
            onClick={() => skincare()}
          >
            Skincare
          </button>
          <button
            className="border border-[#C6877D] bg-[#f8f9fa] px-4 py-2 font-semibold rounded-3xl "
            onClick={() => groceries()}
          >
            Groceries
          </button>
          <button
            className="border border-[#C6877D] bg-[#f8f9fa] px-4 py-2 font-semibold rounded-3xl "
            onClick={() => homedeco()}
          >
            Home Decoratives
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 px-0 md:px-10">
        {filter &&
          filter.slice(0, 8).map((item) => (
            <Link to={`/${item.id}`} key={item.id}>
              <div
                key={item.id}
                className=" rounded-xs bg-white pb-2"
                style={{
                  boxShadow:
                    " 0 0 2px 0.1px rgb(0 0 0 / 0.2), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                }}
              >
                <div className="w-full aspect-[5/4] object-cover relative">
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="w-full h-full rounded-xs "
                  />
                  <h1 className="text-xs font-bold absolute bottom-2 right-2 ">
                    {"⭐".repeat(Math.round(item.rating))}
                  </h1>
                </div>

                <div className="pt-2 pb-1 px-2 ">
                  <p className="text-lg capitalize font-bold">{item.title}</p>
                  <p className="text-sm opacity-80">
                    {item?.description.length < 30
                      ? item?.description
                      : item?.description.slice(0, 30) + "...."}
                  </p>
                  <p className="">
                    <span className="text-sm font-bold opacity-90">
                      $.
                      {Math.floor(
                        item.price -
                          (item.price * item.discountPercentage) / 100
                      )}
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Products;
