import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LabelInventory = ({ totalItems}) => {
  let backgroundColor; // default background color

  if (totalItems === 0) {
    backgroundColor = '#6B987A';
  } else if (totalItems > 5) {
    backgroundColor = '#BA2D1B';
  }else{
    backgroundColor = '#F0A047';
  }

  return (
      <View style={[styles.container, { backgroundColor}]}>
        {totalItems === 0 && <Text style={styles.labelText}>no missing items</Text>}
        {totalItems <= 5 && totalItems>1 && <Text style={styles.labelText}>Missing {totalItems} items </Text>}
        {totalItems > 5 && <Text style={styles.labelText}>Missing 5+ items </Text>}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal:5,
    alignSelf: 'flex-start',
  },
  totalItems: {
    fontSize: 12,
    color: 'white',
    textAlign: 'right',
  },
  labelText:{
    color:'#F6F3F0',
    fontSize: 14,
  },
  labelDiv:{
    padding:4,
  }
});

export default LabelInventory;
