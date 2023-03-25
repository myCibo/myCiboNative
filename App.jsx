import React from 'react';
// import { View, Text, Button } from 'react-native';

import NavigationFooter from './src/navigation/NavigationFooter';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './AuthProvider';


export default function App() {
  return (
    <AuthProvider>
      <NavigationFooter />
    </AuthProvider>
  );
}
