import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductCount, reduceProductCount } from "../utils/appSlice";

const Items = ({ product, button }) => {
  const products = useSelector((store) => store.app.products);
  const productsCount = useSelector((store) => store.app.productsCount);

  const dispatch = useDispatch();

  const handleAddClick = (product) => {
    dispatch(addProductCount(product));
  };

  const handleReduce = (id) => {
    dispatch(reduceProductCount(id));
  };

  if (!products.length) return;

  return (
    <div className="w-60 mx-14 my-10 cursor-pointer ">
      <div className="mx-16 my-5 ">
        <img className="w-56 h-44 rounded-lg" alt="img" src={product.image} />
      </div>
      <div className="text-center text-lg font-medium mb-2">
        <h2>Name : {product.title}</h2>
        <h3>Price : ${product.price}</h3>
      </div>

      <div className="text-center ">
        <button
          onClick={
            button === "Add to Cart"
              ? () => handleAddClick(product)
              : () => handleReduce(product.id)
          }
          className={
            button === "Add to Cart"
              ? "bg-green-400 text-md font-semibold p-2 rounded-lg"
              : "bg-red-400 text-md font-semibold p-2 rounded-lg"
          }
        >
          {button}
        </button>
      </div>
    </div>
  );
};

export default Items;
