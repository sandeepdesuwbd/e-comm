import { useState } from "react";
import { View } from "react-native";

import Categories from "../components/categories";
import Products from "../components/products";

const Dashboard = () => {
  const [cat, setCat] = useState("");
  const [cartList, setAddToCart] = useState([]);
  return (
    <>
      <Categories sendSelectedCategory={(value) => setCat(value)}></Categories>
      <Products
        category={cat}
        setAddToCart={(prod) => setAddToCart([...cartList, prod])}
      ></Products>
    </>
  );
};

export default Dashboard;
