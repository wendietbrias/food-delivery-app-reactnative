import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import { ProductBanner, Category } from "../components";
import avatar from "../assets/images/avatar.png";
import { sushiHomeData } from "../constants/data";
import {
  HeartIcon as HeartIconOutline,
  FireIcon as FireIconOutline,
} from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const Homepage = () => {
  const navigation = useNavigation();

  const RenderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Detail", {
            title: item?.title,
          })
        }
        style={{ width: "47%" }}
      >
        <Image
          style={{ width: "100%", height: 130, borderRadius: 6 }}
          source={item?.uri}
        />
        <View style={{ paddingVertical: 12 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                flex: 1,
                marginRight: 16,
                fontFamily: "GeometriaBold",
                fontSize: 13,
              }}
            >
              {item?.title}
            </Text>
            <TouchableOpacity>
              {item?.liked ? (
                <HeartIcon size={20} color="#F240AE" />
              ) : (
                <HeartIconOutline color="gray" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 3,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "GeometriaMedium",
                color: "#828282",
                fontSize: 12,
              }}
            >
              {item?.weight}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 12,
              }}
            >
              <FireIconOutline size={15} color="crimson" />

              <Text
                style={{
                  color: "crimson",
                  fontSize: 10,
                  fontFamily: "GeometriaBold",
                  marginLeft: 3,
                }}
              >
                Spicy
              </Text>
            </View>
          </View>
          <Text
            style={{ marginTop: 10, fontFamily: "GeometriaBold", fontSize: 14 }}
          >
            {item?.price}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView vertical showScrollVerticalIndicator={false}>
      <View style={styles.mainContainer}>
        <StatusBar style="auto" />
        <View style={styles.avatarContainer}>
          <View>
            <Text style={styles.mainAvatarTxt}>Hi,Kleira</Text>
            <Text style={styles.subAvatarTxt}>Welcome back</Text>
          </View>
          <Image
            source={require("../assets/images/avatar.png")}
            style={styles.Image}
          />
        </View>
        <ProductBanner />
        <View style={styles.category}>
          <Text style={{ fontFamily: "GeometriaBold", fontSize: 17 }}>
            Menu Rolls and Sets
          </Text>
          <Category />
        </View>
        <View style={styles.sushiProducts}>
          {sushiHomeData?.map((item, idx) => (
            <RenderItem item={item} key={idx} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
  },
  avatarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 35,
  },
  mainAvatarTxt: {
    fontFamily: "GeometriaBold",
    fontSize: 20,
  },
  subAvatarTxt: {
    fontFamily: "GeometriaLight",
    marginTop: 5,
  },
  Image: {
    width: 45,
    height: 45,
  },
  category: {
    width: "100%",
    paddingTop: 35,
    paddingBottom: 15,
  },
  sushiProducts: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 12,
  },
});

export default Homepage;
