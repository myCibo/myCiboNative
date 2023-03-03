import React from 'react';
import { View, Text } from 'react-native';
import RecipeCarousel from '../components/organisms/RecipeCarousel';

function ScanScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <RecipeCarousel title="Yuckery" />
    </View>
  );
}

export default ScanScreen;