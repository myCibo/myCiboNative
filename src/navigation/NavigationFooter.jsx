import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "../components/atoms/Icon";
import colors from "../constants/styles"

import FridgeScreen from "../screens/Fridge";
import HomeScreen from "../screens/Home";
import RecipeScreen from "../screens/Recipes";
import ScanScreen from "../screens/Scan";
import ShoppingScreen from "../screens/Shopping";
import DynamicRecipe from "../screens/DynamicRecipe";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route, color, size }) => ({
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: "bold",
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconBgStyle = {
            backgroundColor: focused ? colors['white'] : colors['primaryRed'],
          };
          let iconColor = focused ? colors['primaryRed'] : colors['white'];
          let iconPadding = {};
          let iconBorderStyle = {};

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Fridge") {
            iconName = "fridge";
          } else if (route.name === "Scan") {
            iconName = "camera";
          } else if (route.name === "Recipes") {
            iconName = "book";
          } else if (route.name === "Lists") {
            iconName = "bag";
          }

          return (
            <View style={[{ 
            },
            ]}>
              <View
                style={[
                  { backgroundColor: colors['primaryRed'], borderRadius: 40, padding: 8 },
                  iconBgStyle,
                ]}
              >
                <Icon
                  name={iconName}
                  color={iconColor}
                  size={35}
                />
              </View>
            </View>
          );
        },
        tabBarActiveTintColor: colors['white'],
        tabBarInactiveTintColor: colors['white'],
        tabBarStyle: {
          display: "flex",
          backgroundColor: colors['primaryRed'],
          height: 100,
          paddingBottom: 10,
          paddingTop: 10,
          paddingRight: 5,
          paddingLeft: 5,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Fridge" component={FridgeScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="Recipes" component={RecipeScreen} />
      <Tab.Screen name="Lists" component={ShoppingScreen} />
    </Tab.Navigator>
    
  );
}

const NavigationFooter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name="DynamicRecipe" component={DynamicRecipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationFooter;
