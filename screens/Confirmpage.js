import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, StatusBar, TouchableOpacity } from "react-native";

const ConfirmPage = () => {
  const navigate = useNavigation();

  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <StatusBar style="auto" />
      <View
        style={{
          width: "100%",
          paddingTop: 70,
          paddingBottom: 20,
          paddingHorizontal: 30,
        }}
      >
        <Image
          source={require("../assets/images/illustration.png")}
          style={{ width: "100%", height: 420 }}
        />
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <Text
            style={{
              fontFamily: "GeometriaBold",
              fontSize: 28,
              textAlign: "center",
            }}
          >
            Fastest food delivery to your door
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "GeometriaMedium",
              color: "#828282",
              fontSize: 13,
              marginTop: 18,
              paddingHorizontal: 10,
              lineHeight: 18,
            }}
          >
            Fastest food delivery to your doorFastest food delivery to your door
          </Text>
        </View>
        <TouchableOpacity
          style={{
            paddingVertical: 12,
            width: "100%",
            backgroundColor: "#F240AE",
            justifyContent: "center",
            flexDirection: "row",
            borderRadius: 10,
            marginTop: 35,
          }}
          onPress={() => navigate.navigate("Home")}
        >
          <Text
            style={{
              fontFamily: "GeometriaBold",
              color: "white",
              fontSize: 16,
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmPage;
