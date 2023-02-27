import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking  } from 'react-native';

const CustomButton = ({ text, onPress, height=50, width= 320,  backgroundColor="#6B987A", textColor="white", }) => {
  
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
    },
    buttonText: {
      color: fontColor,
      fontSize: 18,
      fontWeight: 'bold',
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