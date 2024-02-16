import React from "react";
import Items from "./Items";
import useProducts from "../utils/useProducts";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((store) => store.app.products);

  const [demoProducts, setDemoProducts] = useProducts();

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
          className="p-2 text-md font-medium rounded-xl bg-red-400 hover:bg-red-300 mx-4"
        >
          Men's Clothing
        </button>
        <button
          onClick={filterJewelery}
          className="p-2 text-md font-medium rounded-xl bg-blue-400 hover:bg-blue-300 mx-4"
        >
          Jewelery
        </button>

        <button
          onClick={filterElectronics}
          className="p-2 text-md font-medium rounded-xl bg-yellow-400 hover:bg-yellow-300 mx-4"
        >
          Electronics
        </button>
        <button
          onClick={filterWomensClothes}
          className="p-2 text-md font-medium rounded-xl bg-purple-400 hover:bg-purple-300 mx-4"
        >
          Women's clothing
        </button>
      </div>
      <div className="mt-10 flex flex-wrap">
        {demoProducts.map((product) => (
          <Items product={product} key={product.id} button="Add to Cart" />
        ))}
      </div>
    </div>
  );
};

export default Products;
