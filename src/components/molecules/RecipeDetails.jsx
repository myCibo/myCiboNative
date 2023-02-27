
import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking  } from 'react-native';
// 
// const CustomButton = ({ onPress, title }) => {
const RecipeDetails = () => {


  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#CAE1D1',
      flexDirection: 'row',
      height: 48,
      width: 338,
    },
    column: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      marginRight: 8,
        height:22,
        widthL:auto,
  },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },

  });

  return (
      <View style={styles.container}>
        <View style={styles.column}>
          {/*<Icon name="user" size={24} color="#333" style={styles.icon} />*/}
            {/* <Image source={require('../../assets/icon.png')} style={styles.icon} /> */}


            <Text style={styles.text}>Column 1</Text>
        </View>
        <View style={styles.column}>
          {/*<Icon name="home" size={24} color="#333" style={styles.icon} />*/}
            {/* <Image source={require('../../assets/icon.png')} style={styles.icon} /> */}

            <Text style={styles.text}>Column 2</Text>
        </View>
        <View style={styles.column}>
          {/*<Icon name="gear" size={24} color="#333" style={styles.icon} />*/}
            {/* <Image source={require('../../assets/icon.png')} style={styles.icon} /> */}

            <Text style={styles.text}>Column 3</Text>
        </View>
      </View>
  );
};


export default RecipeDetails;