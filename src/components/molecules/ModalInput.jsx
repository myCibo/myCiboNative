import { useState } from "react";
import { View, TextInput, StyleSheet, TouchableWithoutFeedback, TouchableHighlight, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from "../atoms/Icon";
import Colors from "../../constants/styles";

export default function ModalInput({
  placeholder = 'Search',
  type = 'search',
  data = {},
  onInput,
}) {

  const [amountValue, setAmountValue] = useState('');
  const [textValue, setTextValue] = useState('');


  const handleAmount = (text) => {
    if (text.length <= 3 && !isNaN(text)) {
      setAmountValue(text);
      // onInput(text);
    }
  };

  const handleText = (text) => {
    setTextValue(text);
    // onInput(text);
  };

  const styles = StyleSheet.create({
    container: {
      width: type === 'number' ? 100 : '100%',
      height: 48,
      position: 'relative',
    },
    insideContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: type === 'number' ? 100 : '100%',
      height: 48,
      backgroundColor: Colors['white'],
      borderRadius: 4,
    },
    icon: {
      paddingHorizontal: 16,
    },
    input: {
      fontSize: 16,
      color: Colors['fontBlack'],
    },
  });

  const renderCloseIcon = () => {
    if (textValue !== '') {
      return (
        <TouchableWithoutFeedback onPress={() => { setTextValue('') }}>
          <View style={styles.icon}>
            <Icon name="close" size={32} color={Colors['fontGray']} />
          </View>
        </TouchableWithoutFeedback>
      )
    }
  }

  return (
    <View style={styles.container}>
      {type === "number" && (
        <View style={styles.insideContainer}>
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
      {type === "text" && (
        <View style={styles.insideContainer}>
          <TextInput
            placeholder={placeholder}
            value={textValue}
            onChangeText={handleText}
            style={styles.input}
          />
          {renderCloseIcon()}
        </View>
      )}
    </View >
  );
};