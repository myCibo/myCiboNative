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


export default function ShoppingList({
  data = {},
  onUpdateList,
  onRemoveList,
}) {

  // data is an object with the following structure:
  // {
  //   id: "ADUBHSA-ASDbusdb-ASDUBASD",
  //   name: "Walmart",
  //   userId: "A2132HSA-A41usdb-A52562",
  //   listItems: [
  //       { id: 1, itemName: "Milk", amount: "24", unit: "Ounces" },
  //       { id: 2, itemName: "Eggs", amount: "12", unit: "Unit" },
  //       { id: 3, itemName: "Bread", amount: "1", unit: "Unit" },
  //   ],
  // }

  const shoppingListObject = data || {};

  const [name, setName] = useState(shoppingListObject?.name || null);
  const [listCount, setListCount] = useState(shoppingListObject?.listItems?.length || 0);
  const [listItems, setListItems] = useState(shoppingListObject?.listItems || []);

  console.log("listItemsTop", listItems)

  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [showListModal, setShowListModal] = useState(false);
  const [modalKey, setModalKey] = useState(Date.now());

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleToggleOptionsModal = () => {
    setShowOptionsModal(!showOptionsModal);
  };

  const handleToggleListModal = () => {
    setShowListModal(!showListModal);
    setModalKey(Date.now());
  };

  const handleRemoveItem = (itemId) => {
    const updatedListItems = listItems.filter((item) => item.id !== itemId);
    console.log("updatedList", updatedListItems)
    setListItems(updatedListItems);
    setListCount(updatedListItems.length);
    const updatedData = {
      ...data,
      listItems: updatedListItems
    };
    onUpdateList(updatedData);
  };

  const handleListModalEdit = (newName) => {
    console.log("listModalObject", newName);
    setName(newName);
    const updatedData = {
      ...data,
      name: newName
    };
    onUpdateList(updatedData);
  };

  const handleNewListItem = (newItem) => {
    console.log("new item", newItem);
    const updatedListItems = [...listItems, newItem];
    setListItems(updatedListItems);
    setListCount(updatedListItems.length);
    const updatedData = {
      ...data,
      listItems: updatedListItems
    };
    onUpdateList(updatedData);
  };

  const handleRemoveList = () => {
    console.log("Remove list");
    onRemoveList();
  };


  const styles = {
    container: {
      position: 'relative',
      flex: open ? 1 : 0,
      minWidth: '100%',
      // margin:0
    },
    cardContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 48,
      backgroundColor: open ? Colors['primaryGreen'] : Colors['white'],
      borderRadius: 4,
      borderWidth: 1,
      borderColor: Colors['primaryBlack'],
      // backgroundColor:'red',
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
      borderColor: Colors['primaryGray'],
      paddingHorizontal: 48,
      paddingVertical: 16,
    },
    dropdownFont: {
      fontSize: 16,
      color: Colors['primaryGray'],
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
      borderColor: Colors['primaryGray'],
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
        {listItems.map((item, index) => {
          return (
            <ShoppingListItem key={index} item={item} onRemove={handleRemoveItem} />
          );
        })}
        <View style={[styles.dropdownRow, styles.dropdownFooter]}>
          <LabelledIcon
            icon="plus"
            label=" New Item"
            variant="newListItem"
            color={Colors['fontBlack']}
            fontColor={Colors['fontBlack']}
            onNew={handleNewListItem}
          />
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
              <Text style={styles.text}>{name}</Text>
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
        data={data}
        onRemove={handleRemoveList}
      />
      <ListModal
        key={modalKey}
        onToggleListModal={handleToggleListModal}
        showListModal={showListModal}
        type="edit"
        data={data}
        onSave={handleListModalEdit}
      />
    </View>
  );
}
