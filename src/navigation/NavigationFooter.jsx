import { useState, useEffect, useRef } from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Keyboard,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import CameraScreen from "../screens/CameraScreen";
import ReceiptDataScreen from "../screens/ReceiptDataScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "../components/atoms/Icon";
import Colors from "../constants/styles";
import FridgeScreen from "../screens/Fridge";
import HomeScreen from "../screens/Home";
import RecipeScreen from "../screens/Recipes";
import ShoppingScreen from "../screens/Shopping";
import DynamicRecipe from "../screens/DynamicRecipe";
import ProcessingScreen from "../screens/ProcessingScreen";

import myCiboText from "../../assets/images/myCiboText.png"
import ProfileIcon from "../components/atoms/ProfileIcon"

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Fridge" component={FridgeScreen} />
      <Stack.Screen name="DynamicRecipe" component={DynamicRecipe} />
    </Stack.Navigator>
  );
}

function RecipesStack() {
  return (
    <Stack.Navigator initialRouteName="Recipes">
      <Stack.Screen name="Recipes" component={RecipeScreen} />
      <Stack.Screen name="DynamicRecipe" component={DynamicRecipe} />
    </Stack.Navigator>
  );
}

function CameraStack() {
  return (
    <Stack.Navigator initialRouteName="CameraScreen">
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{ headerShown: false, tabBarVisible: false }}
        unmountOnBlur={false}
        tabBarVisible={false}
      />
      <Stack.Screen name="ReceiptDataScreen" component={ReceiptDataScreen} />
      <Stack.Screen name="ProcessingScreen" component={ProcessingScreen} />
    </Stack.Navigator>
  );
}

function NavigationFooter({logout}) {
  const renderTabIcon = (iconName, isFocused) => {
    const iconColor = isFocused ? Colors.primaryRed : Colors.white;
    const backgroundColor = isFocused ? Colors.white : Colors.primaryRed;
    const iconSize = 35;
    const borderRadius = 25;
    const padding = 5;

    return (
      <View
        style={{
          backgroundColor,
          width: iconSize + padding * 2,
          height: iconSize + padding * 2,
          borderRadius,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon name={iconName} color={iconColor} size={iconSize} />
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          activeTintColor: Colors.white,
          inactiveTintColor: Colors.primaryRed,
          tabBarStyle: {
            backgroundColor: Colors.primaryRed,
            height: 90,
            paddingBottom: 10,
            paddingTop: 10,
            paddingRight: 5,
            paddingLeft: 5,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          },
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: "bold",
            color: Colors.white,
          },
        }}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size, focused }) =>
              renderTabIcon("home", focused),
          }}
        />
        <Tab.Screen
          name="Fridge"
          component={FridgeScreen}
          options={{
            tabBarLabel: "Fridge",
            tabBarIcon: ({ color, size, focused }) =>
              renderTabIcon("fridge", focused),
          }}
        />
        <Tab.Screen
          name="Camera"
          component={CameraStack}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarLabel: "Camera",
            tabBarIcon: ({ color, size, focused }) =>
              renderTabIcon("camera", focused),
          }}
        />
        <Tab.Screen
          name="Recipes"
          component={RecipesStack}
          options={{
            headerShown: false,
            tabBarLabel: "Recipes",
            tabBarIcon: ({ color, size, focused }) =>
              renderTabIcon("book", focused),
          }}
        />
        <Tab.Screen
          name="Shopping Lists"
          component={ShoppingScreen}
          options={{
            tabBarLabel: "Lists",
            tabBarIcon: ({ color, size, focused }) =>
              renderTabIcon("bag", focused),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavigationFooter;
