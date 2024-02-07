import React, { useEffect, useState } from "react";
import { PRODUCTS_API } from "./utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "./utils/appSlice";
import Items from "./Items";

const Products = () => {
  const [demoProducts, setDemoProducts] = useState([]);
  const products = useSelector((store) => store.app.products);

  const dispatch = useDispatch();

  useEffect(() => {
    getProductsData();
  }, []);

  const getProductsData = async () => {
    const data = await fetch(PRODUCTS_API);
    const json = await data.json();
    dispatch(addProducts(json));
    setDemoProducts(json);
  };

  const allProducts = () => {
    setDemoProducts(products);
  };

  const filterMensClothes = () => {
    const menClothes = products.filter(
      (item) => item.category === "men's clothing"
    );
    setDemoProducts(menClothes);
  };

  const filterWomensClothes = () => {
    const menClothes = products.filter(
      (item) => item.category === "women's clothing"
    );
    setDemoProducts(menClothes);
  };

  const filterJewelery = () => {
    const jewelery = products.filter((item) => item.category === "jewelery");
    setDemoProducts(jewelery);
  };

  const filterElectronics = () => {
    const electronics = products.filter(
      (item) => item.category === "electronics"
    );
    setDemoProducts(electronics);
  };

  return (
    <div className="p-6 mx-4 my-6  ">
      <div className="text-center">
        <button
          onClick={allProducts}
          className="p-2 text-md font-medium rounded-xl bg-green-400 hover:bg-green-300 mx-4"
        >
          All
        </button>
        <button
          onClick={filterMensClothes}
          className="p-2 text-md font-medium rounded-xl bg-green-400 hover:bg-green-300 mx-4"
        >
          Men's Clothing
        </button>
        <button
          onClick={filterJewelery}
          className="p-2 text-md font-medium rounded-xl bg-green-400 hover:bg-green-300 mx-4"
        >
          Jewelery
        </button>

        <button
          onClick={filterElectronics}
          className="p-2 text-md font-medium rounded-xl bg-green-400 hover:bg-green-300 mx-4"
        >
          Electronics
        </button>
        <button
          onClick={filterWomensClothes}
          className="p-2 text-md font-medium rounded-xl bg-green-400 hover:bg-green-300 mx-4"
        >
          Women's clothing
        </button>
      </div>
      <div className="mt-10 flex">
        <Items demoProducts={demoProducts} />
      </div>
    </div>
  );
};

export default Products;
