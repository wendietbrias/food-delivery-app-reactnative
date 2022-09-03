import {
  View,
  Text,
  ScrollView,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { WrapperDetail } from "../components";
import { subSushi, sushiHomeData } from "../constants/data";

const Detailpage = () => {
  const {
    params: { title },
  } = useRoute();

  const singleSushi = sushiHomeData.find((sushi) => sushi.title === title);

  const RenderItem = ({ item }) => {
    return (
      <View style={{ width: 100, marginRight: 12 }}>
        <Image
          source={item?.uri}
          style={{ width: "100%", height: 80, borderRadius: 6 }}
        />
        <Text
          style={{ fontFamily: "GeometriaBold", fontSize: 12, marginTop: 8 }}
        >
          {item?.title}
        </Text>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        position: "relative",
      }}
      vertical
      showScrollVerticalIndicator={false}
    >
      <StatusBar />
      <WrapperDetail data={title} />
      <ImageBackground
        source={singleSushi?.uri}
        style={{ width: "100%", height: 330, marginTop: 50 }}
      />
      <View
        style={{
          width: "100%",
          borderTopStartRadius: 35,
          borderTopEndRadius: 35,
          position: "absolute",
          bottom: 0,
          left: 0,
          backgroundColor: "#fff",
          elevation: 20,
          paddingHorizontal: 25,
          zIndex: 10,
          paddingVertical: 25,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 14,
          }}
        >
          <View>
            <Text style={{ fontFamily: "GeometriaBold", fontSize: 21 }}>
              {singleSushi?.price}
            </Text>
            <Text
              style={{
                color: "#828282",
                fontFamily: "GeometriaMedium",
                marginTop: 5,
              }}
            >
              {singleSushi?.weight} . x2
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={{
                paddingHorizontal: 10,

                backgroundColor: "#00ccbb",
                borderRadius: 10,
              }}
            >
              <Text style={{ fontSize: 25 }}>+</Text>
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: "GeometriaBold",
                fontSize: 20,
                marginHorizontal: 12,
              }}
            >
              2
            </Text>
            <TouchableOpacity
              style={{
                paddingHorizontal: 10,
                backgroundColor: "#00ccbb",
                borderRadius: 10,
              }}
            >
              <Text style={{ fontSize: 28 }}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: "GeometriaBold", fontSize: 14 }}>
            Set strcture
          </Text>
          <ScrollView
            style={{ marginTop: 12 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {subSushi?.map((sushi, idx) => (
              <RenderItem key={idx} item={sushi} />
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            backgroundColor: "#f2f2f2",
            borderRadius: 8,
            paddingVertical: 10,
            paddingHorizontal: 14,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              flex: 1,
              fontFamily: "GeometriaBold",
              lineHeight: 20,
              fontSize: 14,
            }}
          >
            Free food delivery with 15% discount
          </Text>
          <TouchableOpacity
            style={{
              width: 120,
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "#fff",
              borderRadius: 5,
              paddingVertical: 8,
              marginLeft: 30,
            }}
          >
            <Text
              style={{
                color: "#000",
                fontFamily: "GeometriaBold",
              }}
            >
              Take Now
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#00ccbb",
            width: "100%",
            borderRadius: 10,
            paddingVertical: 8,
            marginTop: 25,
          }}
        >
          <Text
            style={{
              fontFamily: "GeometriaMedium",
              textAlign: "center",

              fontSize: 18,
            }}
          >
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Detailpage;
