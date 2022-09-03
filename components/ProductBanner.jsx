import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";

const ProductBanner = () => {
  return (
    <View style={styles.bannerMain}>
      <View>
        <Text style={styles.titleText}>Free food delivery</Text>
        <Text style={styles.titleText}>With 15% discount</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Take Now</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require("../assets/images/sushi-banner.png")}
        style={styles.imageBanner}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bannerMain: {
    width: "100%",
    paddingVertical: 25,
    paddingHorizontal: 25,
    position: "relative",
    backgroundColor: "#01F9C5",
    borderRadius: 8,
    elevation: 10,
  },
  titleText: {
    fontFamily: "GeometriaBold",
    fontSize: 15,
    marginBottom: 5,
  },
  bannerText: {},
  button: {
    width: 120,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#fff",
    marginTop: 15,
    borderRadius: 5,
    paddingVertical: 8,
  },
  buttonText: {
    color: "#000",
    fontFamily: "GeometriaBold",
  },
  imageBanner: {
    width: 190,
    height: 190,
    position: "absolute",
    right: -15,
    top: -24,
  },
});

export default ProductBanner;
