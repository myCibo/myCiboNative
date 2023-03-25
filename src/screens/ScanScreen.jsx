import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import ScanCard from "../components/molecules/ScanCard";
import SearchBar from "../components/molecules/SearchBar";
import Icon from "../components/atoms/Icon";
import Colors from "../constants/styles";
import LabelledIcon from "../components/molecules/LabelledIcon";
import { useNavigation } from "@react-navigation/native";
import TabScanner from "../api/TabScanner";

function ScanScreen() {
  const [ingredientsData, setIngredientsData] = useState([]);
  const navigation = useNavigation();

  const handleAddIngredient = (ingredient) => {
    const updatedIngredientsData = [...ingredientsData, ingredient];
    setIngredientsData(updatedIngredientsData);
  };

  const handleUpdateIngredient = (ingredient) => {
    const updatedIngredientsData = ingredientsData.map((item) => {
      if (item.id === ingredient.id) {
        return ingredient;
      }
      return item;
    });
    setIngredientsData(updatedIngredientsData);
  };

  const handleDeleteIngredient = (ingredientId) => {
    const updatedIngredientsData = ingredientsData.filter(
      (item) => item.id !== ingredientId
    );
    setIngredientsData(updatedIngredientsData);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: Colors.creamyWhite,
    },
    scroll: {
      width: "100%",
      alignItems: "center",
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
    scannedDataContainer: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: Colors.primaryWhite,
      marginVertical: 10,
      borderRadius: 10,
      width: "100%",
    },
    scannedDataTitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
    },
    scannedDataText: {
      fontSize: 16,
    },
    scanButton: {
      backgroundColor: Colors.primaryRed,
      padding: 10,
      borderRadius: 10,
      marginBottom: 10,
    },
    scanButtonText: {
      color: Colors.white,
      fontWeight: "bold",
      fontSize: 18,
    },
  });

  const handleScanReceipt = async () => {
    try {
      const result = await TabScanner.scanReceipt();
      const scannedData = result.products.map((product) => {
        return {
          id: product.id,
          name: product.name,
          amount: product.quantity,
          unit: product.unit,
          category: product.category,
          purchaseDate: product.purchase_date,
          expirationDate: product.expiry_date,
          expiresInDays: product.expires_in_days,
        };
      });
      setIngredientsData(scannedData);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Unable to scan receipt");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <SearchBar />
          <TouchableOpacity
            onPress={() => {
              console.log("Filter Pressed");
            }}
          >
            <Icon name="filter" size={32} color={Colors.primaryBlack} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            alignSelf: "flex-end",
            padding: 15,
            margin: 4,
          }}
        >
          <LabelledIcon
            label="Add Item"
            iconPos={0}
            iconName="add"
            variant="item"
            onNew={handleAddIngredient}
          />
        </View>
        <TouchableOpacity style={styles.scanButton} onPress={handleScanReceipt}>
          <Text style={styles.scanButtonText}>Scan Receipt</Text>
        </TouchableOpacity>
        {ingredientsData.length > 0 && (
          <View style={styles.scannedDataContainer}>
            <Text style={styles.scannedDataTitle}>Scanned Data</Text>
            {ingredientsData.map((ingredient) => (
              <ScanCard
                key={ingredient.id}
                ingredient={ingredient}
                onUpdate={handleUpdateIngredient}
                onDelete={handleDeleteIngredient}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

export default ScanScreen;
