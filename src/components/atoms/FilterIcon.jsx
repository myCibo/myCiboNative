import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const handleFilterPress = () => {
  console.log('Filter button pressed');
  // perform filter action here
};

const FilterIcon = ({ action }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleFilterPress} style={styles.filterContainer}>
        <MaterialIcons name="filter-list" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    alignItems: 'center',
  },
  filterContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FilterIcon;
