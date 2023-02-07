import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Images from "./images";

const Product = ({ product, setAddToCart }) => {
  const { images, title, price, stock, rating } = product;

  const addToCart = () => {
    setAddToCart(product);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log("View")}
    >
      <Images list={images}></Images>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>${price}</Text>
      <View style={styles.details}>
        <Text style={styles.fontSize12}>
          {stock > 0 ? "Availabe " : "Not available "}
        </Text>
        <Text style={styles.fontSize12}>Rating: </Text>
         <Text style={styles.rating}>{rating}</Text>
      </View>
      <TouchableOpacity onPress={addToCart} style={styles.addToCart}>
        <Text style={styles.rating}>Add to cart</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirtection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "lightgray",
    borderRadius: 20,
    padding: 10,
  },
  title: {
    fontSize: 12,
    margin: 3,
  },
  price: {
    fontSize: 12,
    margin: 3,
    fontWeight: "bold",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 12,
  },
  fontSize12:{
    fontSize: 12,
  },
  rating: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  addToCart: {
    margin: 5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "lightblue",
    borderRadius: 20,
    padding: 10,
  },
});

export default Product;
