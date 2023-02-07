import { Image, StyleSheet } from "react-native";

const Images = ({ list }) => {
  const imgUri = list?.length ? list[0] : "https://reactjs.org/logo-og.png";
  return <Image source={{ uri: imgUri }} style={styles.productImage} />;
};

const styles = StyleSheet.create({
  productImage: {
    width: 100,
    height: 150,
  },
});

export default Images;
