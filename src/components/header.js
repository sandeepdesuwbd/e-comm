import { View, Text, Image, StyleSheet } from "react-native";

export default function Header(props) {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Image
          source={require("../../assets/app-icons/lady-icon-3.jpg")}
          style={styles.profileImage}
        />
        <Text style={styles.name}> Jenny </Text>
      </View>
      <Text style={styles.title}>E-Comm</Text>
      <View style={styles.mainContainer}>
        <Image
          source={require("../../assets/app-icons/add-to-cart.jpeg")}
          style={styles.cartImage}
        />
        <Text style={styles.cartCount}>
          {props?.cart ? props.cart.length : 0}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "lightgray",
  },
  cartImage: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cartCount: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
