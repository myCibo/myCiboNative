import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const handleSearchPress = () => {
  console.log("Search button pressed");
  // perform search action here
};
const SearchIcon = ({action}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSearchPress} style={styles.container}>
        <MaterialIcons
          name="search"
          size={24}
          color="#7B817F"
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    alignItems: "center",
  },
});

export default SearchIcon;
