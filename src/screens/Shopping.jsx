import * as React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import SearchBar from "../components/molecules/SearchBar";
import Icon from "../components/atoms/Icon";
import ShoppingListCategory from "../components/molecules/ShoppingListCategory";
import LabelledIcon from "../components/molecules/LabelledIcon";
import Colors from "../constants/styles";

const Shopping = () => {
  // define the list category data
  const listCategory = [
    {
      category: "Walmart",
      list: [
        { checked: true, name: "Milk", amount: 24, unit: "Grams" },
        { checked: false, name: "Eggs", amount: 24, unit: "Grams" },
      ],
    },
    {
      category: "IGA",
      list: [{ checked: false, name: "Potatoes", amount: 24, unit: "Grams" }],
    },
    {
      category: "Save On Foods",
      list: [{ checked: false, name: "Rice", amount: 24, unit: "Grams" }],
    },
    {
      category: "Today",
      list: [
        { checked: false, name: "Beef", amount: 24, unit: "Grams" },
        { checked: true, name: "Chicken", amount: 24, unit: "Grams" },
        { checked: false, name: "Salt", amount: 24, unit: "Grams" },
      ],
    },
  ];


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      backgroundColor: Colors["creamyWhite"],
    },
    header: {
      flexDirection: "row",
      justifyContent: "flex-end",
      width: "100%",
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    contentContainer: {
      width: "100%",
      paddingHorizontal: 20,
      gap: 20,
    },
  });

  const renderingCategories = () => {
    return listCategory.map((category) => {
      const listCount = category.list.length;
      return (
        <ShoppingListCategory
          key={category.category}
          listCategoryName={category.category}
          listCount={listCount}
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LabelledIcon label="New List" iconPos={0} iconName="add" variant="grocery"/>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {renderingCategories()}
      </ScrollView>
    </View>
    
  );
};

export default Shopping;
