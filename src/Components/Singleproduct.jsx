import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addItem } from "../Constants/cartSlice";

const Singleproduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [data, setData] = useState();
  const [filterData, setfilterData] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [noofproducts, setnoofproducts] = useState(1);
  const [totalcost, settotalcost] = useState(null);

  const fetchData = async (productId) => {
    const url = "https://dummyjson.com/products";

    try {
      const response = await fetch(url);
      const result = await response.json();
      const finalResult = result.products;
      const filter = finalResult[productId - 1];
      const extradata = finalResult.filter(
        (item) => item?.category === filter?.category
      );
      setfilterData(extradata);
      setData(filter);
      settotalcost(
        Math.floor(
          filter?.price - (filter?.price * filter?.discountPercentage) / 100
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const decrease = () => {
    if (noofproducts > 1) {
      setnoofproducts((x) => x - 1);
      const newCost =
        totalcost -
        Math.floor(
          data?.price - (data?.price * data?.discountPercentage) / 100
        );
      settotalcost(newCost);
    }
  };

  const increase = () => {
    setnoofproducts((x) => x + 1);
    const newCost =
      totalcost +
      Math.floor(data?.price - (data?.price * data?.discountPercentage) / 100);
    settotalcost(newCost);
  };

  const handleaddCartItem = () => {
    dispatch(addItem(data));
  };

  return (
    <div>
      <div className="lg:px-24 md:px-8 px-3 py-20">
        <div className="lg:px-24 md:px-8 px-3">
          <div className="flex items-center justify-center">
            <div className="hidden md:flex flex-col gap-4 mr-4">
              {data &&
                data.images.map((item, index) => (
                  <img
                    key={index}
                    src={item}
                    alt="..."
                    className={` w-12 h-12 rounded-sm ${
                      selectedImageIndex === index
                        ? "border-2 border-blue-500"
                        : ""
                    }`}
                    onMouseEnter={() => setSelectedImageIndex(index)}
                  />
                ))}
            </div>
            <div className="flex flex-col items-center md:flex-row gap-2 mx-auto">
              <img
                src={data?.images[selectedImageIndex]}
                alt="..."
                className="w-full p-3 md:p-0 md:w-6/12 rounded-sm aspect-square"
              />
              <div className="flex md:hidden flex-row gap-4 mr-4 rounded-full">
                {data &&
                  data.images.map((item, index) => (
                    <img
                      key={index}
                      src={item}
                      alt="..."
                      className={`w-10 h-10 rounded-full ${
                        selectedImageIndex === index
                          ? "border-2 border-blue-500"
                          : ""
                      }`}
                      onMouseEnter={() => setSelectedImageIndex(index)}
                    />
                  ))}
              </div>
              <div className="w-full md:w-6/12 py-4 px-3 border-black border-opacity-10 border-none md:border-l-2">
                <h1 className="text-sm font-bold uppercase text-[#C6877D]">
                  {data?.category}
                </h1>
                <h1 className="text-4xl font-semibold mt-5 capitalize">
                  {data?.title}
                </h1>
                <h1 className="text-lg font-semibold opacity-80">
                  {data?.brand}
                </h1>
                <h1 className="text-sm  opacity-80  pb-1">
                  {data?.description.length < 60
                    ? data?.description
                    : data?.description.slice(0, 60) + "..."}
                </h1>
                <div className="flex items-center gap-2 mt-3">
                  <h1 className="text-lg">
                    {"⭐".repeat(Math.round(data?.rating))}
                  </h1>
                  <h1 className="text-xs underline underline-offset-1">
                    {data?.stock * 10}+reviews
                  </h1>
                </div>
                <div className="border-b-[1px] border-opacity-20 pb-3 ">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <span className="mr-2 text-2xl font-bold">
                        $.
                        {Math.floor(
                          data?.price -
                            (data?.price * data?.discountPercentage) / 100
                        )}
                      </span>
                      <span className="line-through text-xs opacity-80">
                        $.{data?.price}
                      </span>
                    </div>
                    <h1 className="text-sm font-semibold text-green-600">
                      ({data?.discountPercentage}% OFF)
                    </h1>
                  </div>
                  <h1 className="text-xs font-bold uppercase opacity-60">
                    Free Delivery
                  </h1>
                </div>

                <div className="flex flex-col mt-5">
                  <div className="flex items-center">
                    <p className="text-lg mr-2 font-semibold opacity-80">
                      Quantity:
                    </p>
                    <button
                      className="px-3 py-2 border-[1px] border-black bg-gray-100"
                      onClick={decrease}
                    >
                      -
                    </button>
                    <p className="px-4 py-2 border-t-[1px] border-b-[1px] border-black">
                      {noofproducts}
                    </p>
                    <button
                      className="px-3 py-2 border-[1px] border-black bg-gray-100"
                      onClick={increase}
                    >
                      +
                    </button>
                  </div>
                  <div className="flex items-end gap-2 mt-3">
                    <p className="text-lg font-semibold opacity-80">
                      Total Price:
                    </p>
                    <p className="text-2xl font-bold mt-2 text-green-700">
                      <span className="text-lg font-semibold text-black">
                        $.
                      </span>
                      {totalcost}
                    </p>
                  </div>
                  <div className="flex justify-between mt-4 gap-5">
                    <button
                      className="bg-gray-200 text-black font-semibold px-5 py-3 rounded-sm w-full flex justify-center items-center gap-2"
                      onClick={() => handleaddCartItem()}
                    >
                      Add to cart
                      <BsCart3 />
                    </button>
                    <button className="bg-[#C6877D] text-white font-semibold px-5 py-2 rounded-sm w-full flex justify-center items-center gap-2">
                      Buy now
                      <BiPurchaseTagAlt />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="text-2xl font-bold mb-4">Similar Products...</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6 md:px-10">
            {filterData ? (
              filterData.slice(0, 4).map((item) => (
                <Link to={`/${item.id}`} key={item.id}>
                  <div
                    key={item.id}
                    className=" rounded-xs bg-white"
                    style={{
                      boxShadow:
                        " 0 0 1px 0.1px rgb(0 0 0 / 0.2), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                    }}
                    onClick={scrollToTop}
                  >
                    <div className="w-full aspect-[5/4] object-cover relative">
                      <img
                        src={item.thumbnail}
                        alt=""
                        className="w-full h-full rounded-xs "
                      />
                      <h1 className="text-xs font-bold absolute bottom-2 right-2  ">
                        {"⭐".repeat(Math.round(item.rating))}
                      </h1>
                    </div>

                    <div className="pt-2 pb-1 px-2 ">
                      <p className="text-lg capitalize font-semibold">
                        {item.title}
                      </p>

                      <p className="text-lg font-semibold opacity-70">
                        <span className="mr-2 text-md">
                          $.
                          {Math.floor(
                            item.price -
                              (item.price * item.discountPercentage) / 100
                          )}
                        </span>
                        <span className="line-through text-xs opacity-80">
                          $.{item.price}
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
