import { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, Platform } from 'react-native';
import Colors from '../../constants/styles';

const CustomButton = ({
  text = "Submit",
  onPress = () => { console.log('Button pressed') },
  height = 48,
  width = 200,
  backgroundColor = Colors['primaryGreen'],
  textColor = Colors['white'],
  fontSize = 18,
  variant = 'default',
  disabled = false,
}) => {

  const border = variant === 'border' ? true : false;


  const [bgColor, setBgColor] = useState(backgroundColor);
  const [fontColor, setFontColor] = useState(textColor);


  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: disabled ? Colors.primaryGray : bgColor,
      padding: 10,
      width: width,
      height: height,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: border ? '#475753' : 'transparent',
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        },
        android: {
          elevation: 5,
        },
      }),
    },
    buttonText: {
      color: fontColor,
      fontSize: fontSize,
    },
  });

  const handlePress = () => {
    if (disabled) {
      console.log('Button disabled')
      return;
    }
    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.button}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;