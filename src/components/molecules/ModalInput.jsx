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
    },
    dropdownContainer: {
      width: '100%',
      maxHeight: 5 * 48,
    },
    dropdownShadow: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    dropdownRow: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 48,
      width: '100%',
      backgroundColor: Colors['white'],
      paddingLeft: 16,
    },
    searchInput: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: Colors['fontBlack'],
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
        <View style={styles.searchContainer}>
          <View style={styles.searchInput}>
            <View style={styles.icon}>
              <Icon name="magnifying-glass" size={32} color={Colors['fontGray']} />
            </View>
            <TextInput
              placeholder="Find Ingredient"
              value={searchQuery}
              onChangeText={handleSearch}
              style={styles.input}
            />
          </View>
          {searchQuery ? (
            <TouchableWithoutFeedback style={styles.icon} onPress={() => setSearchQuery('')}>
              <View style={styles.icon}>
                <Icon name="close" size={32} color={Colors['primaryBlack']} />
              </View>
            </TouchableWithoutFeedback>
          ) : null}
        </View>
      )}
      {type === "number" && (
        <View style={styles.numberContainer}>
          <Icon name="hash" size={32} color={Colors['fontGray']} />
          <TextInput
            placeholder=""
            value={amountValue}
            onChangeText={handleSearch}
            style={styles.input}
          />
        </View>
      )}
      {dropdownVisible === true && (
        <FlatList
          data={currentData}
          renderItem={renderDropdownItem}
          style={styles.dropdownContainer}
        />
      )}
    </View>

  );
};