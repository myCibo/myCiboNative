import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import OptionsModal from "../organisms/OptionsModal";
import ListModal from "../organisms/ListModal";
import Icon from "../atoms/Icon";
import Colors from "../../constants/styles";

export default function ShoppingListCategory({
  listCategoryName = "Walmart",
  listCount = 3,
}) {
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [showListModal, setShowListModal] = useState(false);

  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleChecked = () => {
    setChecked(!checked);
  };

  const handleToggleOptionsModal = () => {
    setShowOptionsModal(!showOptionsModal);
  };

  const handleToggleListModal = () => {
    setShowListModal(!showListModal);
  };

  // Define some example items for the shopping list
  const shoppingListItems = [
    { itemName: "Milk", quantity: "24", measurement: "Ounces" },
    { itemName: "Eggs", quantity: "12", measurement: "Count" },
    { itemName: "Bread", quantity: "1", measurement: "Count" },
  ];

  const styles = {
    container: {
      flex: 1,
      position: 'relative',
      height: '100%',
    },
    cardContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 48,
      width: '100%',
      backgroundColor: open ? Colors['primaryGreen'] : Colors['white'],
      borderRadius: 4,
      borderWidth: 1,
      borderColor: Colors['primaryBlack']
    },
    textContainer: {
      width: "80%",
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "row",
      gap: 10,
    },
    text: {
      fontSize: 16,
      color: Colors['fontBlack'],
      paddingRight: 20,
      paddingLeft: 10,
    },
    dropdownContainer: {
      width: "100%",
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    dropdownRow: {
      width: "100%",
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    dropdownTextContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItem: 'center',
    },
    dropdownFont: {
      fontSize: 16,
      color: Colors['fontGray']
    },
    icon: {
      paddingHorizontal: 16,
    },
    iconOpen: {
      transform: [{ rotate: open ? '90deg' : '0deg' }],
    },
  };

  const renderShoppingList = () => {
    return (
      <View style={styles.dropdownContainer}>
        <View style={styles.dropdownHeader}>
          <Text style={styles.dropdownFont}>Ingredient</Text>
          <Text style={styles.dropdownFont}>Quantity</Text>

          {/* This might be jank, double check */}
          <View style={{ width: '80%', height: 0, borderBottomWidth: 1, borderBottomColor: Colors['fontGray'] }} />

        </View>
        {shoppingListItems.map((item, index) => {
          <View key={index} style={styles.dropdownRow}>
            {!checked && (
              <TouchableWithoutFeedback onPress={handleChecked}>
                <Icon name="circle" size={20} color={Colors['primaryBlack']} />
              </TouchableWithoutFeedback>
            )}
            {checked && (
              <TouchableWithoutFeedback onPress={handleChecked}>
                <Icon name="check-circle" size={20} color={Colors['primaryGreen']} />
              </TouchableWithoutFeedback>
            )}
            <View style={styles.dropdownTextContainer}>
              <Text style={styles.dropdownFont}>
                {item.itemName}
              </Text>
              <Text style={styles.dropdownFont}>
                {item.quantity}
              </Text>
              <Text style={styles.dropdownFont}>
                {item.measurement}
              </Text>
            </View>
            <Icon name="trash" size={20} color={Colors['primaryBlack']} />
          </View>
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <TouchableWithoutFeedback onPress={handleOpen}>
          <View style={styles.textContainer}>
            <Icon name={iconName} color={open ? Colors['primaryBlack'] : Colors['white']} size={15} />
            <Text style={styles.text}>{listCategoryName}</Text>
            <Text style={[styles.text, { color: Colors['fontGray'] }]}>{listCount}</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleToggleOptionsModal}>
          <Icon name="dots-vertical" size={26} color={open ? Colors['primaryBlack'] : Colors['white']} />
        </TouchableWithoutFeedback>
      </View>
      {open && renderShoppingList()}
      <OptionsModal
        onToggleModal={handleToggleOptionsModal}
        onToggleListModal={handleToggleListModal}
        showOptionsModal={showOptionsModal}
        optionsType="list"
        title={listCategoryName}
      />
      <ListModal
        onToggleListModal={handleToggleListModal}
        showListModal={showListModal}
        type="edit"
        title={listCategoryName}
        placeholder={listCategoryName}
      />
    </View>
  );
}
