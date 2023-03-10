import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import OptionsModal from "../organisms/OptionsModal";
import ItemModal from "../organisms/ItemModal";
import Icon from "../atoms/Icon";

export default function ShoppingListCategory({
  listCategoryName = "Walmart",
  listCount = 3,
}) {
  const [showOptions, setShowOptions] = useState(false);
  const [showItemModal, setShowItemModal] = useState(false);

  const [iconName, setIconName] = useState("arrow-right");

  const handleToggleModal = () => {
    setShowOptions(!showOptions);
  };

  const handleToggleItemModal = () => {
    setShowItemModal(!showItemModal);
  };

  const handleToggleDropdownIcon = () => {
    setIconName(iconName === "arrow-right" ? "arrow-down" : "arrow-right");
    setShowShoppingList(!showShoppingList);
  };

  const [showShoppingList, setShowShoppingList] = useState(false);

  // Define some example items for the shopping list
  const shoppingListItems = [
    { itemName: "Milk", quantity: "24 Grams" },
    { itemName: "Eggs", quantity: "12" },
    { itemName: "Bread", quantity: "1 Loaf" },
  ];
  const styles = {
    container: {
      padding: 10,
      height: 50,
      width: "93%",
      backgroundColor: "white",
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      marginBottom: 10,
      borderWidth: 1,
      borderColor: "black",
    },
    textContainer: {
      width: "80%",
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "row",
    },
    text: {
      fontSize: 16,
      color: "black",
      paddingRight: 20,
      paddingLeft: 10,
    },
  };

  // Render the shopping list as a table
  const renderShoppingList = () => {
    return (
      <View>
        <View style={styles.tableRow}>
          <Text style={[styles.tableHeader, styles.tableEmptyCell]}></Text>
          <Text style={[styles.tableHeader, styles.tableCell]}>Item Name</Text>
          <Text style={[styles.tableHeader, styles.tableCell]}>Quantity</Text>
          <Text style={[styles.tableHeader, styles.tableEmptyCell]}></Text>
        </View>
        {shoppingListItems.map((item, index) => {
          return (
            <View key={index} style={styles.tableRow}>
              <CheckBox style={styles.tableEmptyCell} />
              <Text style={[styles.tableCell, styles.tableText]}>
                {item.itemName}
              </Text>
              <Text style={[styles.tableCell, styles.tableText]}>
                {item.quantity}
              </Text>
              <Icon
                name="trash"
                size={20}
                color={"black"}
                style={styles.tableEmptyCell}
              />
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleToggleDropdownIcon}>
        <View style={styles.textContainer}>
          <Icon name={iconName} color={"black"} size={15} />
          <Text style={styles.text}>{listCategoryName}</Text>
          <Text style={[styles.text, { color: "grey" }]}>{listCount}</Text>
        </View>
      </TouchableWithoutFeedback>

      {/* Render the shopping list dropdown toggle */}
      {showShoppingList && <View>{renderShoppingList()}</View>}

      <TouchableWithoutFeedback onPress={handleToggleModal}>
        <View>
          <Icon name="dots-vertical" size={26} color={"black"} />
        </View>
      </TouchableWithoutFeedback>

      <OptionsModal
        onToggleModal={handleToggleModal}
        onToggleItemModal={handleToggleItemModal}
        showOptions={showOptions}
        optionsType="ingredient"
        title={listCategoryName}
      />
      <ItemModal
        onToggleItemModal={handleToggleItemModal}
        showItemModal={showItemModal}
        type="edit"
        expanded={true}
        title={listCategoryName}
      />
    </View>
  );
}
