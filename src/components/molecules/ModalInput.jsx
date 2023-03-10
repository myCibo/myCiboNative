import { useState } from "react";
import { View, TextInput, StyleSheet, TouchableWithoutFeedback, TouchableHighlight, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from "../atoms/Icon";
import Colors from "../../constants/styles";

export default function ModalInput({
  placeholder = 'Search',
  type = 'search',
  data = [],
}) {

  const [amountValue, setAmountValue] = useState('');


  const handleAmount = (text) => {
    if (text.length <= 3 && !isNaN(text)) {
      setAmountValue(text);
    }
  };

  const styles = StyleSheet.create({
    container: {
      width: 100,
      height: 48,
      position: 'relative',
    },
    numberContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 100,
      height: 48,
      backgroundColor: Colors['white'],
      borderRadius: 4,
    },
    numberInput: {
      fontSize: 16,
      color: Colors['fontBlack'],
      paddingRight: 16,
    },
    icon: {
      paddingHorizontal: 16,
    },
    input: {
      fontSize: 16,
      color: Colors['fontBlack'],
    },
  });

  return (
    <View style={styles.container}>
      {type === "number" && (
        <View style={styles.numberContainer}>
          <View style={styles.icon}>
            <Icon name="hash" size={16} color={Colors['fontGray']} />
          </View>
          <TextInput
            placeholder={placeholder}
            keyboardType="numeric"
            value={amountValue}
            onChangeText={handleAmount}
            style={styles.input}
          />
        </View>
      )}
    </View >

  );
};