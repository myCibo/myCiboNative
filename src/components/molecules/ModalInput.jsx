import { useState, useEffect, useRef } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
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

  const handleInputFocus = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  useEffect(() => {
    if (selected) {
      setAmountValue(`${selected}`);
      setTextValue(`${selected}`);
    }
  }, [selected]);

  const styles = StyleSheet.create({
    container: {
      width: type === 'number' ? 130 : '100%',
      height: 48,
      position: 'relative',
    },
    insideContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: type === 'number' ? 130 : '100%',
      paddingHorizontal: type === 'number' ? 0 : 16,
      height: 48,
      backgroundColor: Colors['white'],
      borderRadius: 4,
    },
    icon: {
      paddingHorizontal: 16,
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: Colors['fontBlack'],
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

  const textInputRef = useRef(null);

  return (
    <View style={styles.container}>
      {type === "number" && (
        <View style={styles.insideContainer}>
          <View style={styles.icon}>
            <Icon name="hash" size={16} color={Colors['fontGray']} />
          </View>
          <TextInput
            ref={textInputRef}
            placeholder={placeholder}
            keyboardType="numeric"
            value={amountValue}
            onChangeText={handleAmount}
            style={styles.input}
            onFocus={handleInputFocus}
          />
        </View>
      )}
      {type === "text" && (
        <View style={styles.insideContainer}>
          <TextInput
            ref={textInputRef}
            placeholder={placeholder}
            value={textValue}
            onChangeText={handleText}
            style={styles.input}
            onFocus={handleInputFocus}
          />
          {renderCloseIcon()}
        </View>
      )}
    </View >
  );
};