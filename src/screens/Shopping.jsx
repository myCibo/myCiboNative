import { useState, useEffect } from "react";
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
import Icon from '../components/atoms/Icon';
import SearchBar from '../components/molecules/SearchBar';
import { useContext } from 'react';
import UserContext from "../contexts/UserContext";
import ShoppingListHandler from "../handlers/ShoppingListHandler";

const shoppingListHandler = new ShoppingListHandler();

const Shopping = () => {
  const user = useContext(UserContext);

  const [shoppingLists, setShoppingLists] = useState([]);
  const [displayData, setDisplayData] = useState(shoppingLists);

  useEffect(() => {
    shoppingListHandler.getAllShoppingLists(user.id, (data) => {
      setShoppingLists(data);
      setDisplayData(data);
    });
  }, []);

  const handleAddList = (listName) => {
    console.log("New list entry: ", listName)
    const newList = {
      userId: user.id,
      name: listName,
    };
    shoppingListHandler.createShoppingList(newList, (data) => {
      console.log('new list', data)
      const updatedShoppingLists = [...shoppingLists, data];
      setShoppingLists(updatedShoppingLists);
      setDisplayData(updatedShoppingLists);
    });
  };

  const handleUpdateList = (id, updatedList) => {
    console.log("Updated list entry: ", id, updatedList);
    const updatedShoppingLists = shoppingLists.map((shoppingList) =>
      shoppingList.id === id
        ? { ...shoppingList, listItems: updatedList }
        : shoppingList
    );
    setShoppingLists(updatedShoppingLists);
    setDisplayData(updatedShoppingLists);
  };

  const handleDeleteList = (id) => {
    console.log("Removed list entry: ", id);
    shoppingListHandler.deleteShoppingList(id, () => {
      const updatedShoppingLists = shoppingLists.filter(
        (shoppingList) => shoppingList.id !== id
      );
      setShoppingLists(updatedShoppingLists);
      setDisplayData(updatedShoppingLists);
    });
  };
  

  const handleSearch = (value) => {
    const filteredArray = shoppingLists.filter(item => {
      const { name, listItems } = item;
      return (
        name.toLowerCase().startsWith(value.toLowerCase())
        // ||list.some((item) =>
        //   item.itemName.toLowerCase().startsWith(value.toLowerCase())
        // )
      );
    });
    setDisplayData(filteredArray)
  }

  const handleSearchBack = () => {
    setDisplayData(shoppingLists)
    console.log("back is clicked  ")
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      backgroundColor: Colors["creamyWhite"],
    },
    scroll: {
      width: '100%',
      alignItems: 'center',
    },

    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      paddingVertical: 10,
      paddingHorizontal: 20,
      gap: 10,
      marginVertical: 10,
    },
    contentContainer: {
      width: "100%",
      paddingHorizontal: 20,
      gap: 20,
    },
  });

  const renderingShoppingLists = () => {
    return displayData.map((shoppingList) => {
      return (
        <ShoppingList
          key={shoppingList.id}
          data={shoppingList}
          onUpdateList={(listItems) => handleUpdateList(shoppingList.id, listItems)}
          onRemoveList={() => handleDeleteList(shoppingList.id)}
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <SearchBar placeholder="Search List" onSearch={handleSearch} onBack={handleSearchBack} />
        <TouchableOpacity onPress={() => { console.log("Filter Pressed"); }}>
          <Icon name='filter' size={32} color={Colors.primaryBlack} />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={{ width: '100%', alignSelf: 'flex-end', padding: 5, margin: 4 }}>
          <LabelledIcon
            label="New List"
            iconPos={0}
            iconName="add"
            variant="add"
            onNew={handleAddList}
            data={null}
          />
        </View>
        {displayData.length > 0
          ? (renderingShoppingLists())
          : (<Text> No results found</Text>
          )}

      </ScrollView>
    </View>
  );
};

export default Shopping;



  // const [shoppingLists, setShoppingLists] = useState([
  //   {
  //     id: 42,
  //     name: "Walmart",
  //     listItems: [
  //       { id: 12, itemName: "Milk", amount: 1, unit: "Litre" },
  //       { id: 32, itemName: "Eggs", amount: 12, unit: "Item" },
  //     ],
  //   },
  //   {
  //     id: 17,
  //     name: "IGA",
  //     listItems: [{ id: 52, itemName: "Potatoes", amount: 44, unit: "Item" }],
  //   },
  //   {
  //     id: 12,
  //     name: "Save On Foods",
  //     listItems: [{ id: 37, itemName: "Rice", amount: 32, unit: "Grams" }],
  //   },
  //   {
  //     id: 23,
  //     name: "Today",
  //     listItems: [
  //       { id: 24, itemName: "Beef", amount: 50, unit: "Grams" },
  //       { id: 27, itemName: "Chicken", amount: 20, unit: "Grams" },
  //       { id: 29, itemName: "Salt", amount: 12, unit: "Grams" },
  //     ],
  //   },
  // ]);