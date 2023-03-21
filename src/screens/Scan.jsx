import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView,TouchableOpacity } from 'react-native';
import ScanCards from '../components/molecules/ScanCard'
import SearchBar from '../components/molecules/SearchBar';
import Icon from '../components/atoms/Icon';
import Colors from '../constants/styles';


//FakeData-------------
const dataArray = [
  { id: "1", title: "Apple", quantity: 2, unit: "Pcs", category: "Produce", purchaseDate: "23/02/2023", ExpiryDate: "23/03/2023", },
  { id: "2", title: "Apple", quantity: 2, unit: "Pcs", category: "Produce", purchaseDate: "23/02/2023", ExpiryDate: "23/03/2023", },
  { id: "3", title: "Apple", quantity: 2, unit: "Pcs", category: "Produce", purchaseDate: "23/02/2023", ExpiryDate: "23/03/2023", },
];
//--------------


function editHandler() {
  console.log("Scan Card Edit Pressed")
}

function ScanScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
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
    }
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <SearchBar />
          <TouchableOpacity onPress={() => {console.log("Filter Pressed");}}>
            <Icon name='filter' size={32} color={Colors.primaryBlack} />
          </TouchableOpacity>
        </View>
        
        <View style={{ alignItems: 'center' }}>
          {dataArray.map((item) => (
              <ScanCards key={item.id} data={item} onEdit={editHandler} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default ScanScreen;