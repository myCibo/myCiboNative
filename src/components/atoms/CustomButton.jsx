import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking  } from 'react-native';
import colors from '../utils/styles';
// import { useFonts } from 'expo-font';
// import MyCustomFont from '../../assets/fonts/Rubic-Black.ttf';
// '../../assets/fonts/Rubic-Black.ttf'


const CustomButton = ({ text = "Submit", onPress, height = 50, width = 320,  
                      backgroundColor = colors['primaryGreen'], textColor = colors['white'], fontSize=18 }) => {


  
  const [bgColor, setBgColor] = useState(backgroundColor);
  const [fontColor, setFontColor] = useState(textColor);

  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: bgColor,
      padding: 10,
      width: width,
      height: height,
      borderRadius: 4,

      borderWidth: 1,
      borderColor: '#475753',
      // fontFamily: 'MyCustomFont',
    },
    buttonText: {
      color: fontColor,
      fontSize: fontSize,
      // fontWeight: 'bold',
      // fontFamily: 'MyCustomFont',
    },
  });

  const onPressIn = () => {
    setBgColor('#F6F3F0');
    setFontColor('475753');
  };



  return (
    <TouchableOpacity
      onPressIn={onPressIn}
      onPress={onPress}
      style={styles.button}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;