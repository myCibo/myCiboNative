
import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "../atoms/Icon";
import Colors from "../../constants/styles";

export default function SearchBar({}) {


  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 48,
      flex: 1,
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

  return (
    <View style={styles.container}>
      <Icon name='magnifying-glass' size={24} color={Colors['fontGray']} />
      <TextInput
        style={styles.input}
        placeholder="Search Recipe"
        placeholderTextColor="#7B817F"
      />
    </View>
  );
};