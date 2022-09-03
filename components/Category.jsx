import { ScrollView, Text, TouchableOpacity } from "react-native";
import { categoryList } from "../constants/data";

const Category = () => {
  return (
    <ScrollView
      style={{ marginTop: 15 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categoryList?.map((category, idx) => (
        <TouchableOpacity
          key={idx}
          style={{
            marginRight: 10,
            borderColor: "#F240AE",
            borderWidth: 1,
            paddingHorizontal: 7,
            paddingVertical: 7,
            borderRadius: 8,
          }}
        >
          <Text style={{ fontFamily: "GeometriaLight", fontSize: 13 }}>
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Category;
