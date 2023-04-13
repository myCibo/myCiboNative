import { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, TouchableWithoutFeedback, TouchableHighlight, Text, Keyboard, Platform, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from "../atoms/Icon";
import Colors from "../../constants/styles";

export default function ModalSearch({
  placeholder = 'Search',
  data = [],
  onChange,
  selected,
}) {

  const [searchQuery, setSearchQuery] = useState(selected?.name || '');
  const [currentData, setCurrentData] = useState(data);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);


  const handleSearch = (text) => {
    const newData = data.filter((item) => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setCurrentData(newData);
    setSearchQuery(text);

    setIsDropdownVisible(true);
    if (text === '' || newData.length === 0) {
      setIsDropdownVisible(false);
    }
  };

  const handleSelectItem = (item) => {
    console.log('handleSelectedItem', item);
    if (item === null) {
      setSearchQuery('');
      onChange(null);
      return;
    }
    setSearchQuery(item.name);
    onChange(item);
    Keyboard.dismiss();
    setIsDropdownVisible(false);
  };

  const handleCloseIcon = () => {
    handleSelectItem(null);
    setIsDropdownVisible(false)
  }

  // const handleBlur = () => {
  //   setIsFocused(false);
  //   setDropdownVisible(false);
  // };

  // const handleFocus = () => {
  //   setIsFocused(true);
  // };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: isDropdownVisible ? 6 * 48 : 48,
      position: 'relative',
    },
    searchContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 48,
      width: '100%',
      backgroundColor: Colors['white'],
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      borderBottomLeftRadius: isDropdownVisible ? 0 : 4,
      borderBottomRightRadius: isDropdownVisible ? 0 : 4,
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: isDropdownVisible ? 0.2 : 0,
          shadowRadius: 4,
        },
        android: {
          elevation: isDropdownVisible ? 5 : 0,
        },
      }),
    },
    dropdownContainer: {
      position: 'absolute',
      top: 48,
      height: 5 * 48,
      width: '100%',
      backgroundColor: Colors['white'],
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
      zIndex: 11,
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        },
        android: {
          elevation: 6,
        },
      }),
    },
    dropdownRow: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 48,
      width: '100%',
      paddingLeft: 16,
      borderBottomWidth: 1,
      borderBottomColor: Colors['creamyWhite'],
    },
    lastDropdownRow: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 48,
      width: '100%',
      paddingLeft: 16,
    },
    searchInput: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '70%',
    },
    input: {
      fontSize: 16,
      color: Colors['fontBlack'],
    },
    icon: {
      paddingHorizontal: 16,
    },
  });

  const renderCloseIcon = () => {
    if (searchQuery !== '') {
      return (
        <TouchableWithoutFeedback onPress={() => { handleCloseIcon() }}>
          <View style={styles.icon}>
            <Icon name="close" size={32} color={Colors['fontGray']} />
          </View>
        </TouchableWithoutFeedback>
      )
    }
  }

  const renderDropdown = () => {
    if (isDropdownVisible) {
      return (
        <View style={styles.dropdownContainer}>
          <FlatList
            data={currentData}
            renderItem={({ item, index }) => (
              <TouchableHighlight
                onPress={() => handleSelectItem(item)}
                activeOpacity={0.9}
                underlayColor={Colors['lightGreen']}
              >
                <View style={index === data.length - 1 ? styles.lastDropdownRow : styles.dropdownRow}>
                  <Text>{item.name}</Text>
                </View>
              </TouchableHighlight>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      );
    }
  };


  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setIsDropdownVisible(false)}
      activeOpacity={1}
    >
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.searchInput}>
            <View style={styles.icon}>
              <Icon name="magnifying-glass" size={32} color={Colors['fontGray']} />
            </View>
            <TextInput
              placeholder={placeholder}
              value={searchQuery}
              onChangeText={handleSearch}
              style={styles.input}
              onFocus={() => setIsDropdownVisible(true)}
              onBlur={() => { }}
            />
          </View>
          {renderCloseIcon()}
        </View>
        {renderDropdown()}
      </View>
    </TouchableOpacity>
  );
};