import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from '../atoms/Icon';
import Colors from '../../constants/styles';




const RecipeDetails = ({timeInMinutes, serving, healthScore}) => {

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#CAE1D1',
      color: '#43615A',
      flexDirection: 'row',
      height: 50,
      width: 338,
      //width325

      borderRadius:4,
      marginTop:36,

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
      fontWeight: '700',
      color: '#43615A',

    },

  });

  return (
    <View style={styles.container}>
        <View style={styles.column}>
            {/* <Image source={require('../../assets/icon.png')} style={styles.icon} /> */}
            <Icon name='clock' size={22} color={'#43615A'}/>
            <Text style={styles.text}> {timeInMinutes} min</Text>
        </View>
        <View style={styles.column}>
        <Icon name='cooking' size={22} color={'#43615A'}/>
          <Text style={styles.text}> {serving} people</Text>
        </View>
        <View style={styles.column}>
        <Icon name='ecg-heart' size={22} color={'#43615A'}/>
            <Text style={styles.text}> {healthScore}%</Text> 
        </View>
      </View>
  );
};


export default RecipeDetails;
