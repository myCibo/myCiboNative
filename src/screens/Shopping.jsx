import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ShoppingList from "../components/molecules/ShoppingList";
import LabelledIcon from "../components/molecules/LabelledIcon";
import Colors from "../constants/styles";

const Shopping = () => {
  const [shoppingLists, setShoppingLists] = useState([
    {
      id: 42,
      listName: "Walmart",
      list: [
        { id: 12, itemName: "Milk", amount: 1, unit: "Litre" },
        { id: 32, itemName: "Eggs", amount: 12, unit: "Item" },
      ],
    },
    {
      id: 17,
      listName: "IGA",
      list: [{ id: 52, itemName: "Potatoes", amount: 44, unit: "Item" }],
    },
    {
      id: 12,
      listName: "Save On Foods",
      list: [{ id: 37, itemName: "Rice", amount: 32, unit: "Grams" }],
    },
    {
      id: 23,
      listName: "Today",
      list: [
        { id: 24, itemName: "Beef", amount: 50, unit: "Grams" },
        { id: 27, itemName: "Chicken", amount: 20, unit: "Grams" },
        { id: 29, itemName: "Salt", amount: 12, unit: "Grams" },
      ],
    },
  ]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      backgroundColor: Colors["creamyWhite"],
    },
    header: {
      flexDirection: "row",
      justifyContent: "flex-end",
      width: "100%",
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    contentContainer: {
      width: "100%",
      paddingHorizontal: 20,
      gap: 20,
    },
  });

  const handleNewListEntry = (data) => {
    console.log("New list entry: ", data)
    const newList = {
      id: Date.now(),
      listName: data,
      list: [],
    };
    setShoppingLists((prevShoppingLists) => [...prevShoppingLists, newList]);
  };

  const handleUpdateListEntry = (id, list) => {
    console.log("Updated list entry: ", id, list)
    setShoppingLists((prevShoppingLists) =>
      prevShoppingLists.map((shoppingList) =>
        shoppingList.id === id ? { ...shoppingList, list } : shoppingList
      )
    );
  };

  const handleRemoveListEntry = (id) => {
    console.log("Removed list entry: ", id)
    setShoppingLists((prevShoppingLists) =>
      prevShoppingLists.filter((shoppingList) => shoppingList.id !== id)
    );
  };

  const renderingCategories = () => {
    return shoppingLists.map((shoppingList) => {
      return (
        <ShoppingList
          key={shoppingList.id}
          data={shoppingList}
          onUpdateList={(list) => handleUpdateListEntry(shoppingList.id, list)}
          onRemoveList={() => handleRemoveListEntry(shoppingList.id)}
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LabelledIcon
          label="New List"
          iconPos={0}
          iconName="add"
          variant="add"
          onNewList={handleNewListEntry}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {renderingCategories()}
      </ScrollView>
    </View>
  );
};

export default Shopping;