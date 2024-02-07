import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addButtonCount, reduceButtonCount } from "../utils/appSlice";

const Items = ({ demoProducts }) => {
  const products = useSelector((store) => store.app.products);
  const buttonCount = useSelector((store) => store.app.buttonCount);

  console.log(products);
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(addButtonCount());
  };
  const handleReduceClick = () => {
    dispatch(reduceButtonCount());
  };

  if (!products.length) return;
  return (
    <div className="flex flex-wrap ">
      {demoProducts.map((product) => (
        <div className="w-60 mx-14 my-10 cursor-pointer " key={product.id}>
          <div className="mx-16 my-5 ">
            <img
              className="w-56 h-44 rounded-lg"
              alt="img"
              src={product.image}
            />
          </div>
          <div className="text-center text-lg font-medium mb-2">
            <h2>Name : {product.title}</h2>
            <h3>Price : {product.price} RS</h3>
          </div>
          <div className="text-center ">
            {buttonCount !== 0 ? (
              <div className="bg-gray-100 text-green-500 ml-20 mt-3 text-lg w-20 py-1 font-bold rounded-lg">
                <span className="mx-2">
                  <button onClick={handleReduceClick}>-</button>
                </span>
                {buttonCount}
                <span className="mx-2">
                  <button onClick={handleAddClick}>+</button>
                </span>
              </div>
            ) : (
              <button
                onClick={handleAddClick}
                className="bg-gray-100 text-green-500 font-semibold p-2 rounded-lg hover:bg-gray-100"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
