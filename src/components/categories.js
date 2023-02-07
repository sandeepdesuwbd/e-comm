import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
} from "react-native";
import Loader from "./loader";

import { getCategories } from "../services/categories";

const Categories = (props) => {
  const [categories, setCategories] = useState([]);
  const [cat, setCat] = useState("All");

  useEffect(() => {
    getCategories().then((res) => {
      if (res?.data?.length) {
        res.data.unshift("All");
        setCategories(res.data);
      }
    });
  }, []);

  const selectedCategory = (item) => {
    setCat(item);
    if (cat !== item && item !== "All") {
      props.sendSelectedCategory(item);
    } else {
      props.sendSelectedCategory("");
    }
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={[styles.item, cat === item ? styles.selected : ""]}
        onPress={() => selectedCategory(item)}
      >
        <Text style={styles.title}>{item}</Text>
      </TouchableOpacity>
    );
  };

  if (categories.length) {
    return (
      <View style={styles.container}>
        <FlatList
          data={categories}
          renderItem={renderItem}
          horizontal={true}
          keyExtractor={(item) => `item_${item}`}
        />
      </View>
    );
  }
  return <Loader></Loader>;
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  item: {
    padding: 10,
    margin: 5,
  },
  selected: {
    backgroundColor: "#FBD9E0",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 20,
    borderColor: "#FBD9E0",
  },
  title: {
    fontSize: 16,
    textTransform: "capitalize",
  },
});

export default Categories;
