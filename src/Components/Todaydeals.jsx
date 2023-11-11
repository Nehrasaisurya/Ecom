import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Todaydeals = () => {
  const [data, setData] = useState();

  const fetchData = async () => {
    const url = "https://dummyjson.com/products";

    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="lg:px-24 md:px-8 px-3 pt-20  md:py-20 lg:py-0">
      <h1 className="text-2xl font-semibold mb-8">
        Today's best deals for you...
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-0 md:px-10">
        {data ? (
          data.slice(8, 12).map((item) => (
            <Link to={`/${item.id}`} key={item.id}>
              <div
                key={item.id}
                className=" rounded-xs bg-white"
                style={{
                  boxShadow:
                    " 0 0 1px 0.1px rgb(0 0 0 / 0.2), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                }}
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
  );
};

export default Todaydeals;
