import { useState, useEffect, useRef } from "react";
import { View, KeyboardAvoidingView, Platform, Dimensions, Keyboard, TouchableOpacity, Text, Image } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "../components/atoms/Icon";
import Colors from "../constants/styles"
import FridgeScreen from "../screens/Fridge";
import HomeScreen from "../screens/Home";
import RecipeScreen from "../screens/Recipes";
import ScanScreen from "../screens/Scan";
import ShoppingScreen from "../screens/Shopping";
import DynamicRecipe from "../screens/DynamicRecipe";

import myCiboText from "../../assets/images/myCiboText.png"
import ProfileIcon from "../components/atoms/ProfileIcon"

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();




const HeaderRight = () => {
  return (
    <View style={{ width: 35, height: 35, marginRight: 15 }}>
      <ProfileIcon style={{ width: 80, height: 25 }} />
    </View>
  );
};

const MyTabScreenOptions = {
  headerTitle: "",
  headerStyle: { height: 94 },
  headerRight: () => <HeaderRight />,
};



function MyTabs() {

  return (
    <Tab.Navigator
      screenOptions={({ route, color, size }) => ({
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: "bold",
        },
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconBgStyle = {
            backgroundColor: focused ? Colors['white'] : Colors['primaryRed'],
          };
          let iconColor = focused ? Colors['primaryRed'] : Colors['white'];

          // let iconBorderStyle = focused
          //   ? {
          //     // borderColor: Colors['primaryRed'],
          //     // borderWidth: 5,
          //     // borderRadius: 20
          //   }
          //   : {};
          // let iconPadding =
          //   route.name === "Scan" ? { paddingLeft: 10, paddingRight: 10 } : {};

          // iconBgStyle = {
          //   backgroundColor: Colors['white'],
          //   borderRadius: 30,
          // };
          // iconColor = Colors['primaryRed'];
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
                  { backgroundColor: Colors['primaryRed'], borderRadius: 40, padding: 8 },
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
        tabBarActiveTintColor: Colors['white'],
        tabBarInactiveTintColor: Colors['white'],
        tabBarStyle: {
          display: "flex",
          backgroundColor: Colors['primaryRed'],
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



<Tab.Screen name="Home" component={HomeScreen}
        options={() => ({
          headerTitle: "",
          headerStyle: { height: 94, },
          headerLeft: () => (
            <View style={{ width: 100, height: 25, marginLeft: 15, marginBottom: 2 }}>
              <Image source={myCiboText} style={{ width: 100, height: 30 }} />
            </View>
          ),
          headerRight: () => <HeaderRight />
        })}
      />      
      <Tab.Screen name="Fridge" component={FridgeScreen} options={MyTabScreenOptions} />
      <Tab.Screen name="Scan" component={ScanScreen} options={MyTabScreenOptions} />
      <Tab.Screen name="Recipes" component={RecipeScreen} options={MyTabScreenOptions} />
      <Tab.Screen name="Lists" component={ShoppingScreen} options={MyTabScreenOptions} />
    </Tab.Navigator>

  );
}

const NavigationFooter = () => {
  // const navigation = useNavigation();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MyTabs} options={{ headerShown: false }}/>
        <Stack.Screen name="DynamicRecipe" component={DynamicRecipe} options={MyTabScreenOptions}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationFooter;