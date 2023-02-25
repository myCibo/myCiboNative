import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FridgeScreen from "../screens/Fridge";
import HomeScreen from "../screens/Home";
import RecipeScreen from "../screens/Recipes";
import ScanScreen from "../screens/Scan";
import ShoppingScreen from "../screens/Shopping";

const Tab = createBottomTabNavigator();

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
            backgroundColor: focused ? "#FFFFFF" : "#BA2D1B",
          };
          let iconColor = focused ? "#BA2D1B" : "#FFFFFF";
          let iconBorderStyle = focused
            ? { borderColor: "#BA2D1B", borderWidth: 5, borderRadius: 30 }
            : {};
          let iconPadding =
            route.name === "Scan" ? { paddingLeft: 10, paddingRight: 10 } : {};

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Fridge") {
            iconName = "fridge";
          } else if (route.name === "Scan") {
            iconName = "camera";
            iconBgStyle = {
              backgroundColor: "#FFFFFF",
              borderRadius: 30,
            };
            iconColor = "#BA2D1B";
          } else if (route.name === "Recipes") {
            iconName = "food";
          } else if (route.name === "Shopping") {
            iconName = "cart";
          }

          return (
            <View style={[{ padding: 5 }, iconBorderStyle, iconPadding]}>
              <View
                style={[
                  { backgroundColor: "#BA2D1B", borderRadius: 30, padding: 5 },
                  iconBgStyle,
                ]}
              >
                <MaterialCommunityIcons
                  name={iconName}
                  color={iconColor}
                  size={size}
                />
              </View>
            </View>
          );
        },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#FFFFFF",
        tabBarStyle: {
          display: "flex",
          backgroundColor: "#BA2D1B",
          height: 90,
          paddingBottom: 10,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Fridge" component={FridgeScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="Recipes" component={RecipeScreen} />
      <Tab.Screen name="Shopping" component={ShoppingScreen} />
    </Tab.Navigator>
  );
}

const NavigationFooter = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default NavigationFooter;
