import { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, TouchableHighlight, Text, Platform } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from "../atoms/Icon";
import Colors from "../../constants/styles";

export default function ModalInput({
  placeholder = 'Search',
  type = 'search',
  onChange,
  selected,
}) {

  const [amountValue, setAmountValue] = useState('');
  const [textValue, setTextValue] = useState('');


  const handleAmount = (text) => {
    if (text.length <= 6 && !isNaN(text)) {
      setAmountValue(text);
      onChange(text);
    }
  };

  const handleText = (text) => {
    setTextValue(text);
    onChange(text);
  };

  useEffect(() => {
    if (selected) {
      setAmountValue(`${selected}`);
      setTextValue(`${selected}`);
    }
  }, [selected]);

  const styles = StyleSheet.create({
    container: {
      width: type === 'number' ? 120 : '100%',
      height: 48,
      position: 'relative',

    },
    insideContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: type === 'number' ? 120 : '100%',
      paddingHorizontal: type === 'number' ? 0 : 16,
      height: 48,
      backgroundColor: Colors['white'],
      borderRadius: 4,
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        },
        android: {
          elevation: 2,
        },
      }),
    },
    icon: {
      paddingHorizontal: 16,
    },
    input: {
      fontSize: 16,
      color: Colors['fontBlack'],
      flex: 1,
    },
  });

  const renderCloseIcon = () => {
    if (textValue !== '') {
      return (
        <TouchableOpacity onPress={() => { setTextValue('') }}>
          <View style={styles.icon}>
            <Icon name="close" size={32} color={Colors['fontGray']} />
          </View>
        </TouchableOpacity>
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