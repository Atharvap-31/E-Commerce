import React from "react";
import Items from "./Items";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const productsCount = useSelector((store) => store.app.productsCount);

  return (
    <div className="flex flex-wrap ">
      {productsCount.length === 0 && (
        <div className="ml-96 text-xl mt-10">
          <h1>Your Cart Is Empty</h1>
          <h2>Please Do Some Shopping</h2>
          <button className="p-2 text-md font-medium rounded-xl bg-green-400 hover:bg-green-300 mx-4">
            <Link to="/">Shop Here</Link>
          </button>
        </div>
      )}
      {productsCount.map((product, i) => (
        <Items product={product} key={product.id} button="Delete Cart" />
      ))}
    </div>
  );
};

export default Cart;
