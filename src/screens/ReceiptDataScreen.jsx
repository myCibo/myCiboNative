// src/screens/ReceiptDataScreen.js
import React from "react";
import { View, Text, ScrollView } from "react-native";

const ReceiptDataScreen = ({ route }) => {
  const { data } = route.params;

  return (
    <ScrollView>
      <View>
        <Text>Data received from TabScanner:</Text>
        <Text>{JSON.stringify(data, null, 2)}</Text>
      </View>
    </ScrollView>
  );
};

export default ReceiptDataScreen;
