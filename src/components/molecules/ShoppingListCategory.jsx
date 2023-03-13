import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  TouchableHighlight,
} from "react-native";
import OptionsModal from "../organisms/OptionsModal";
import ListModal from "../organisms/ListModal";
import ShoppingListItem from "./ShoppingListItem";
import Icon from "../atoms/Icon";
import Colors from "../../constants/styles";
import LabelledIcon from "./LabelledIcon";


export default function ShoppingListCategory({
  listCategoryName = "Walmart",
  listCount = 3,
  data = {},
  onRemove,
}) {

  // data is an object with the following structure:
  // {
  //   name: "Walmart",
  //   list: [
  //     { name: "Milk", amount: 24, unit: "Grams" },
  //     { name: "Eggs", amount: 24, unit: "Grams" },
  //   ],
  // }


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

  // the handle remove function needs to remove the item from the list object being fed into this component
  const handleRemove = (item) => {
    onRemove(item);
  };

  const handleToggleOptionsModal = () => {
    setShowOptionsModal(!showOptionsModal);
  };

  const handleToggleListModal = () => {
    setShowListModal(!showListModal);
  };

  // Define some example items for the shopping list
  const shoppingListItems = [
    { itemName: "Milk", amount: "24", unit: "Ounces" },
    { itemName: "Eggs", amount: "12", unit: "Unit" },
    { itemName: "Bread", amount: "1", unit: "Unit" },
  ];

  const styles = {
    container: {
      position: 'relative',
      flex: open ? 1 : 0,
      minWidth: '100%'
    },
    cardContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 48,
      backgroundColor: open ? Colors['primaryGreen'] : Colors['white'],
      borderRadius: 4,
      borderWidth: 1,
      borderColor: Colors['primaryBlack']
    },
    cardContainerContent: {
      width: '70%',
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "row",
    },
    cardContainerText: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      gap: 32,
    },
    text: {
      fontSize: 16,
      color: open ? Colors['white'] : Colors['fontBlack'],
    },
    dropdownContainer: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    dropdownHeader: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: 88,
      borderBottomWidth: 1,
      borderColor: Colors['fontGray'],
      paddingHorizontal: 48,
      paddingVertical: 16,
    },
    dropdownFont: {
      fontSize: 16,
      color: Colors['fontBlack'],
    },
    dropdownRow: {
      width: '100%',
    },
    dropdownFooter: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 16,
      borderBottomWidth: 1,
      borderColor: Colors['fontGray'],
    },
    icon: {
      paddingHorizontal: 16,
    },
    iconOpen: {
      transform: [{ rotate: open ? '0deg' : '-90deg' }],
    },
  };

  const renderShoppingList = () => {
    return (
      <View style={styles.dropdownContainer}>
        <View style={styles.dropdownHeader}>
          <Text style={styles.dropdownFont}>Name</Text>
          <Text style={styles.dropdownFont}>Amount</Text>
        </View>
        {shoppingListItems.map((item, index) => {
          return (
            <View key={index} style={styles.dropdownRow}>
              <ShoppingListItem item={item} onRemove={handleRemove} />
            </View>
          );
        })}
        <View style={[styles.dropdownRow, styles.dropdownFooter]}>
          <LabelledIcon icon="plus" label=" New Item" variant="list" />
        </View>
      </View>
    );
  };


  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <TouchableWithoutFeedback onPress={handleOpen}>
          <View style={styles.cardContainerContent}>
            <View style={[styles.icon, styles.iconOpen]}>
              <Icon name={'arrow-down'} color={open ? Colors['white'] : Colors['primaryBlack']} size={15} />
            </View>
            <View style={styles.cardContainerText}>
              <Text style={styles.text}>{listCategoryName}</Text>
              <Text style={[styles.text, { color: open ? Colors['white'] : Colors['fontGray'] }]}>{listCount}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleToggleOptionsModal}>
          <View style={styles.icon}>
            <Icon name="dots-vertical" size={26} color={open ? Colors['white'] : Colors['primaryBlack']} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      {open && renderShoppingList()}
      <OptionsModal
        onToggleModal={handleToggleOptionsModal}
        onToggleListModal={handleToggleListModal}
        showOptions={showOptionsModal}
        optionsType="list"
        title={listCategoryName}
      />
      <ListModal
        onToggleListModal={handleToggleListModal}
        showListModal={showListModal}
        type="edit"
        title={listCategoryName}
        data={{ listCategoryName, listCount }}
        placeholder={listCategoryName}
      />
    </View>
  );
}
