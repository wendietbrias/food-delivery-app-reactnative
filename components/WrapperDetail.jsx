import { View, Text, TouchableOpacity } from "react-native";
import { HeartIcon, ChevronLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const WrapperDetailsModal = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: "100%",
        paddingVertical: 20,
        paddingHorizontal: 25,
        backgroundColor: "#fff",
        borderBottomStartRadius: 35,
        borderBottomEndRadius: 35,
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{
            width: 40,
            height: 40,
            borderWidth: 1,
            borderColor: "#828282",
            borderRadius: 50,
            backgroundColor: "transparent",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ChevronLeftIcon size={25} color="#828282" />
        </TouchableOpacity>
        <Text
          style={{
            color: "#828282",
            fontFamily: "GeometriaLight",
            fontSize: 13,
          }}
        >
          Set Details
        </Text>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderWidth: 1,
            borderColor: "#828282",
            borderRadius: 50,
            backgroundColor: "transparent",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HeartIcon size={22} color="#F240AE" />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontFamily: "GeometriaBold",
          fontSize: 17,
          textAlign: "center",
          marginTop: 20,
        }}
      >
        {data}
      </Text>
    </View>
  );
};

export default WrapperDetailsModal;
