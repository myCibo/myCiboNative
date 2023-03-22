import { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import findCategory from "../../utils/findCategory";
import CategoryImage from "../atoms/CategoryImage";
import Colors from "../../constants/styles";

const CategorySquare = ({
  category,
  amount,
}) => {

  const [categoryData, setCategoryData] = useState(findCategory(category));

  const styles = StyleSheet.create({
    container: {
      height: 220,
      width: 130,
      borderRadius: 8,
      justifyContent: "space-between",
      padding: 10,
      backgroundColor: categoryData.color,
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        },
        android: {
          elevation: 5,
        },
      }),
    },
    amount: {
      color: Colors.white,
      textAlign: "right",
    },
    image: {
      alignSelf: "center",
    },
    title: {
      color: Colors.white,
      fontSize: 16,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.amount}>{amount}</Text>
      <View style={styles.image}>
        <CategoryImage name={category} size={100} />
      </View>
      <Text style={styles.title}>{category}</Text>
    </View>
  );
};

export default CategorySquare;
