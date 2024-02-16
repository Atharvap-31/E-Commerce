import { useEffect, useState } from "react";
import { PRODUCTS_API } from "./constant";
import { useDispatch } from "react-redux";
import { addProducts } from "./appSlice";

const useProducts = () => {
  const [demoProducts, setDemoProducts] = useState([]);
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

  return [demoProducts, setDemoProducts];
};

export default useProducts;
