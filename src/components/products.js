import { useState, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import Product from "./product";
import Loader from "./loader";
import { getProducts } from "../services/products";

const Products = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([]);
    getProducts(props.category).then((res) => {
      if (res?.data?.products?.length) {
        setProducts(res.data.products);
      }
    });
  }, [props.category]);

  const renderItem = ({ item }) => {
    return <Product product={item} setAddToCart={props.setAddToCart}></Product>;
  };

  if (products.length) {
    return (
      <FlatList
        data={products}
        renderItem={renderItem}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => `product_${item.id}`}
      />
    );
  }
  return <Loader></Loader>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default Products;
