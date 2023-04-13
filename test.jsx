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



export default function ItemModal({

  const styles = StyleSheet.create({
    modal: {
      position: "absolute",
      backgroundColor: Colors['creamyWhite'],
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      marginHorizontal: 0,
      marginVertical: 0,
      paddingHorizontal: 16,
      paddingVertical: 16,
      bottom: 0,
      width: "100%",
    },
    viewModal: {
      flex: 1,
      width: "100%",
      gap: showExpanded ? 16 : 32,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    optionRow: {
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      flexDirection: "row",
    },
    title: {
      fontSize: 22,
      fontWeight: "bold",
    },
    optionIcon: {
      width: 24,
      height: 24,
    },
    category: {
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      width: "100%",
      gap: 16,
    },
    categoryTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: Colors['fontGray'],
    },
    row: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: "100%",
      gap: 32,
    },
    bottom: {
      flex: 1,
      padding: showExpanded ? 16 : 32,
      gap: 32,
    },
  });


  return (
    <Modal
      isVisible={showItemModal}
      onBackdropPress={handleCloseModal}
      onBackButtonPress={handleCloseModal}
      backdropOpacity={0.8}
      backdropTransitionOutTiming={0}
      style={styles.modal}
    >
      <View
        onStartShouldSetResponder={() => true}
        style={styles.viewModal}
      >
        <View style={styles.optionRow}>
          <Text style={styles.title}>{type === 'edit' ? `Edit ${selectedName}` : 'Add New Item'}</Text>
          <TouchableOpacity onPress={handleCancelOptionPress}>
            <View>
              <Icon name="close" size={32} color={Colors['primaryBlack']} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryTitle}>Item Name</Text>
          <View style={styles.row}>
            <ModalSearch
              placeholder={'Find Ingredient'}
              data={ingredientList}
              onChange={handleItemSelect}
              selected={selectedItem}
            />
          </View>
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>Amount</Text>
          <View style={styles.row}>
            <ModalInput
              placeholder={'0'}
              type='number'
              onChange={handleQuantityChange}
              selected={selectedQuantity}
            />
            <ModalDropdown
              placeholder={'Select Unit'}
              data={unitList}
              onChange={handleUnitSelect}
              selected={selectedUnit}
            />
          </View>
        </View>
        {showExpanded === true && (
          <View style={styles.category}>
            <Text style={styles.categoryTitle}>Food Type</Text>
            <View style={styles.row}>
              <ModalDropdown
                placeholder={'Select Category'}
                data={categoryList}
                onChange={handleCategorySelect}
                selected={selectedCategory}
              />
            </View>
          </View>
        )}
        {showExpanded === true && (
          <View style={styles.category}>
            <Text style={styles.categoryTitle}>Purchase Date</Text>
            <View style={styles.row}>
              <ModalDatePicker
                onDateChange={handlePurchaseDate}
                selected={selectedPurchaseDate}
              />
            </View>
          </View>
        )}
        {showExpanded === true && (
          <View style={styles.category}>
            <Text style={styles.categoryTitle}>Expiration Date</Text>
            <View style={styles.row}>
              <ModalDatePicker
                onDateChange={handleExpirationDate}
                selected={selectedExpirationDate}
              />
            </View>
          </View>
        )}
        <View style={styles.bottom}>
          {showExpanded === false && (
            <CustomButton
              text='More Options'
              backgroundColor={Colors.primaryYellow}
              onPress={handleToggleExpanded}
            />
          )}
          <CustomButton
            text={type === 'add' ? 'Add New Item' : 'Confirm Changes'}
            backgroundColor={Colors.primaryGreen}
            disabled={disabled}
            onPress={handleSaveItem}
          />
        </View>
      </View>
    </Modal>
  );
}



const FridgeScreen = () => {


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SearchBar placeholder="Search Ingredient, Categories" onSearch={handleSearch} onBack={handleSearchBack} />
        <TouchableOpacity
          onPress={() => {
            console.log("Filter");
          }}

        >
          <Icon name='filter' size={32} color={Colors.primaryBlack} />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >

        {displayData.length > 0 
        ? (renderIngredientsByCategory()) 
        : (<Text> No results found</Text>
        )}
        
      </ScrollView>
    </View>
  );
};



export default FridgeScreen;