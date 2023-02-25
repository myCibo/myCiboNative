import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CategorySquare from "../components/molecules/CategorySquare";
import SearchBar from '../components/molecules/SearchBar';
import FilterIcon from '../components/atoms/FilterIcon';


const FridgeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>FridgeScreen Card-View</Text>
      <View style={styles.header}>
        <SearchBar />
        <FilterIcon />
      </View>
      <View style={styles.row}>
        <CategorySquare
          backgroundColor="#CD592E"
          totalItems={8}
          imageSrc={require("../assets/images/takeout.png")}
          title="Takeout"
          size='small'
        />
        <CategorySquare
          backgroundColor="#F0A047"
          totalItems={4}
          imageSrc={require("../assets/images/dairy.png")}
          title="Dairy"
          size = 'small'
        />
      </View>
      <View style={styles.row}>
        <CategorySquare
          backgroundColor="#6B987A"
          totalItems={12}
          imageSrc={require("../assets/images/produce.png")}
          title="Produce"
          size = 'small'
        />
        <CategorySquare
          backgroundColor="#F3C238"
          totalItems={7}
          imageSrc={require("../assets/images/dry.png")}
          title="Dry"
          size = 'small'
        />
      </View>
      <View style={styles.row}>
        <CategorySquare
          backgroundColor="#D35247"
          totalItems={6}
          imageSrc={require("../assets/images/meat.png")}
          title="Meat"
          size = 'medium'
        />
        <CategorySquare
          backgroundColor="#B3A96C"
          totalItems={22}
          imageSrc={require("../assets/images/spices.png")}
          title="Spices"
          size = 'medium'
        />
      </View>
      <View style={styles.row}>
        <CategorySquare
          backgroundColor="#DDAE55"
          totalItems={10}
          imageSrc={require("../assets/images/canned.png")}
          title="Canned"
          size = 'large'
        />
        <CategorySquare
          backgroundColor="#8F9FC8"
          totalItems={8}
          imageSrc={require("../assets/images/frozen.png")}
          title="Frozen"
          size = 'large'
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    paddingHorizontal: 12,
  },
  card: {
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default FridgeScreen;
