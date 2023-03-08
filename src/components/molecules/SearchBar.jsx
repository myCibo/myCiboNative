import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import SearchIcon from "../atoms/SearchIcon";

const SearchBar = () => {


  return (
    <View style={styles.container}>
        <SearchIcon />
        <TextInput
          style={styles.input}
          placeholder="Search Recipe"
          placeholderTextColor="#7B817F"
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48,
    width: 284,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#2643615A',
    paddingHorizontal: 12,
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 8,
    color: '#7B817F',
  },
  icon: {
    marginRight: 8,
  },
});

export default SearchBar;
