import React , { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const LabelHero = ({message}) => {

  return (

      <View style={[styles.container]}>
         <Text style={styles.labelText}>{message.toUpperCase()}</Text>
      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor : '#F0A047',
    padding: 6,
    flexDirection: 'row', 
    
    alignSelf: 'flex-start',
  },
  labelText:{
    color:'#F6F3F0',
    fontSize: 16,
  },
});

export default LabelHero;
