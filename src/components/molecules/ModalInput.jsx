import { useState } from "react";
import { View, TextInput, FlatList, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Text } from 'react-native';
import Icon from "../atoms/Icon";
import Colors from "../../constants/styles";

export default function ModalInput({
  placeholder = 'Search',
  type = 'search',
  data = [],
}) {

  const styles = StyleSheet.create({
    container: {
      width: '100%',
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
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
    },
    searchContainerOpen: {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    dropdownContainer: {
      width: '100%',
      maxHeight: 5 * 48,
      backgroundColor: Colors['white'],
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
    },
    dropdownShadow: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
      zIndex: 1,
    },
    dropdownRow: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 48,
      width: '100%',
      paddingLeft: 16,
    },
    searchInput: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '80%',
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: Colors['fontBlack'],
    },
    numberContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 48,
      width: 100,
      backgroundColor: Colors['white'],
      borderRadius: 4,
    },
    numberInput: {
      flex: 1,
      fontSize: 16,
      color: Colors['fontBlack'],
      paddingRight: 16,
    },
    icon: {
      paddingHorizontal: 16,
    },
  });


  const [searchQuery, setSearchQuery] = useState('');
  const [amountValue, setAmountValue] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [currentData, setCurrentData] = useState(data);


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

  const handleAmount = (text) => {
    if (text.length <= 3 && !isNaN(text)) {
      setAmountValue(text);
    }
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setSearchQuery(item.name);
    setDropdownVisible(false);
  };

  const renderDropdownItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleSelectItem(item)}>
      <View style={styles.dropdownRow}>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, dropdownVisible ? styles.dropdownShadow : null]}>
      {type === "search" && (
        <View style={[styles.searchContainer, dropdownVisible ? styles.searchContainerOpen : null]}>
          <View style={styles.searchInput}>
            <View style={styles.icon}>
              <Icon name="magnifying-glass" size={32} color={Colors['fontGray']} />
            </View>
            <TextInput
              placeholder={placeholder}
              value={searchQuery}
              onChangeText={handleSearch}
              style={styles.input}
            />
          </View>
          {searchQuery ? (
            <TouchableWithoutFeedback onPress={() => {setSearchQuery(''), setDropdownVisible(false)}}>
              <View style={styles.icon}>
                <Icon name="close" size={32} color={Colors['fontGray']} />
              </View>
            </TouchableWithoutFeedback>
          ) : null}
        </View>
      )}
      {type === "number" && (
        <View style={styles.numberContainer}>
          <View style={styles.icon}>
            <Icon name="hash" size={16} color={Colors['fontGray']} />
          </View>
          <TextInput
            placeholder={placeholder}
            value={amountValue}
            onChangeText={handleAmount}
            style={styles.input}
          />
        </View>
      )}
      {searchQuery && dropdownVisible ? (
        <FlatList
          data={currentData}
          renderItem={renderDropdownItem}
          style={styles.dropdownContainer}
          keyExtractor={(item) => item.id}
        />
      ) : null}
    </View>

  );
};