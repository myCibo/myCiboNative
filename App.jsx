import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserContext from './src/contexts/UserContext';
import UserHandler from './src/handlers/UserHandler';
import NavigationFooter from './src/navigation/NavigationFooter';
import "react-native-url-polyfill/auto"
import * as Google from 'expo-auth-session/providers/google';
import axios from 'axios';
import CustomButton from './src/components/atoms/CustomButton';
const userHandler = new UserHandler();

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      let storedUser = await AsyncStorage.getItem('user');
      if (!storedUser) {
        // console.log("no user found")
        const users = await userHandler.getAllUsersPromise();

        
        const currentUser = users[1];
        storedUser = currentUser.id;
        await AsyncStorage.setItem('user', storedUser);
        console.log(currentUser)
        setUser(currentUser);
      } else {
        // console.log("no user found")
        const currentUser = await userHandler.getUserByIdPromise(storedUser);
        setUser(currentUser);
      }
    };
    
    getUser();
  }, []);

  const styles = {
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  if (!user) {
    return (
      <View style={styles.loader}>
        {/* <Text>Anything inside this view will show up while loading thre page </Text>*/}
        <ActivityIndicator size="large" color="#b82d1b" />
      </View>
    );
  }

  return (
    <UserContext.Provider value={user}>
      <NavigationFooter />
    </UserContext.Provider>
  );
}