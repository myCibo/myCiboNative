import { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, TouchableHighlight, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from "../atoms/Icon";
import Colors from "../../constants/styles";

export default function ModalSearch({
  placeholder = 'Search',
  data = [],
  onChange,
}) {

  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [currentData, setCurrentData] = useState(data);
  const [isFocused, setIsFocused] = useState(false);


  const handleSearch = (text) => {
    const newData = data.filter((item) => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setCurrentData(newData);
    setSearchQuery(text);

    setDropdownVisible(true);
    if (text === '' || newData.length === 0) {
      setDropdownVisible(false);
    }
  };

  const handleSelectItem = (item) => {
    setSearchQuery(item.name);
    onChange(item);
    setDropdownVisible(false);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setDropdownVisible(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: dropdownVisible ? 6 * 48 : 48,
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
      borderBottomLeftRadius: dropdownVisible ? 0 : 4,
      borderBottomRightRadius: dropdownVisible ? 0 : 4,
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: dropdownVisible ? 0.2 : 0,
          shadowRadius: 4,
        },
        android: {
          elevation: dropdownVisible ? 5 : 0,
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
    if (searchQuery !== '' && isFocused) {
      return (
        <TouchableOpacity onPress={() => { setSearchQuery(''), setDropdownVisible(false) }}>
          <View style={styles.icon}>
            <Icon name="close" size={32} color={Colors['fontGray']} />
          </View>
        </TouchableOpacity>
      )
    }
  }

  const renderDropdown = () => {
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
    )
  }

  return (
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
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={styles.input}
          />
        </View>
        {renderCloseIcon()}
      </View>
      {dropdownVisible && renderDropdown()}
    </View >

  );
};