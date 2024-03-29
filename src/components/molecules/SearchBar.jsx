import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../constants/styles';
import Icon from '../atoms/Icon';

export default function SearchBar({ placeholder, onSearch, onBack }) {
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleSearch = () => {
    searchValue != "" && onSearch(searchValue)
  };

  const handleChange = (value) => {
    setSearchValue(value)
    value !== "" ? onSearch(value) : handleBack()
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleBack = () => {
    setSearchValue('')
    onBack()
    inputRef.current.blur();
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 48,
      flex: 1,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#2643615A',
      // borderColor: isFocused ? '#000000' : '#2643615A',
      paddingHorizontal: 12,
      backgroundColor: '#FFFFFF',
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    input: {
      flex: 1,
      fontSize: 16,
      marginLeft: 8,
      color: isFocused ? '#000' : '#7B817F',
    },
    leftIcon: {
      width: 24,
      height: 24,
      alignItems: 'center',
      justifyContent: 'center',
      color: 'red',
    },

  });

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        {isFocused || searchValue.length > 0 ? (
          <TouchableOpacity onPress={handleBack}>
            <View style={styles.leftIcon} >
              <Icon name="arrow-back" size={24} color={Colors['fontGray']} />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity >
            <View style={styles.leftIcon}>
              <Icon name="magnifying-glass" size={24} color={Colors['fontGray']} />
            </View>
          </TouchableOpacity>
        )}

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#7B817F"
          value={searchValue}
          onChangeText={handleChange}
          onSubmitEditing={handleSearch}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyPress={(event) => {
            if (event.nativeEvent.key === 'Backspace' && searchValue.length === 0) {
              handleBack();
            }
          }}
          ref={inputRef}
        />
      </View>
      {/* {searchValue.length > 0 && (
        <TouchableOpacity onPress={handleClearSearch}>
          <View style={styles.clearButton}>
            <Icon name="x-bold" size={24} color={Colors['fontGray']} />
          </View>
        </TouchableOpacity>
      )} */}
    </View>
  );
}
