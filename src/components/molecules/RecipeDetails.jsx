import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";


const RecipeDetails = ({timeInMinutes, serving, calorie}) => {

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#CAE1D1',
      color: '#43615A',
      flexDirection: 'row',
      height: 48,
      width: 338,

      borderRadius:4,
    },
    column: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },

  icon:{
    marginRight: 8,
    height:22,
    width:20,

  },
    text: {
      fontSize: 13,
      color: '#43615A',

    },

  });

  return (
    <View style={styles.container}>
        <View style={styles.column}>
            {/* <Image source={require('../../assets/icon.png')} style={styles.icon} /> */}
            <Image source={ require('../../../assets/icons/book.svg')} style={styles.icon}/>
            <Text style={styles.text}>{timeInMinutes} min</Text>
        </View>
        <View style={styles.column}>
        <Image source={ require('../../../assets/icons/book.svg')} style={styles.icon}/>
          <Text style={styles.text}>{serving} people</Text>
        </View>
        <View style={styles.column}>
        <Image source={ require('../../../assets/icons/book.svg')} style={styles.icon}/>
            <Text style={styles.text}>{calorie}kcal</Text> 
        </View>
      </View>
  );
};


export default RecipeDetails;
