import { useState } from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";

import Header from "./src/components/header";
import Categories from "./src/components/categories";
import Products from "./src/components/products";

export default function App() {
  const [cat, setCat] = useState("");
  const [cartList, setAddToCart] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      <Header cart={cartList}></Header>
      <Categories sendSelectedCategory={(value) => setCat(value)}></Categories>
      <Products
        category={cat}
        setAddToCart={(prod) => setAddToCart([...cartList, prod])}
      ></Products>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    marginTop: StatusBar.currentHeight || 0,
  },
});
