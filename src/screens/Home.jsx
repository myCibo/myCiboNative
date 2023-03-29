import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
import Carousel from '../components/organisms/Carousel';
import CategorySquare from '../components/molecules/CategorySquare';
import RecipeCard from '../components/molecules/RecipeCard';
import Icon from '../components/atoms/Icon';
import Colors from '../constants/styles';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import countMissingIngredients from '../utils/countMissingIngredients';
import { calculateExpiresInDays } from '../utils/expirationCalculator';
import prioritizeIngredients from '../utils/prioritizeIngredients';
import * as Google from 'expo-auth-session/providers/google';
function HomeScreen() {
  // WebBrowser.maybeCompleteAuthSession();
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "552993921134-4lfc1ep9u4c3ud0h73tqtrhte75ldbtn.apps.googleusercontent.com",
    androidClientId: '552993921134-tj76atrjgaav85pfoovenbgadoi5bnfa.apps.googleusercontent.com',
    selectAccount: true,
    // iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
  });
  if (response?.type === 'success') {
    (async () => {
      const userData = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${response.params.access_token}` },
        }
      );

      const user = await userData.json();
      console.log('user info:', user)
    })();
  }

  const fridgeCategories = [
    {
      id: '1',
      category: 'Dairy',
      amount: 2,
    },
    {
      id: '3',
      category: 'Vegetables',
      amount: 1,
    },
    {
      id: '4',
      category: 'Grains',
      amount: 1,
    },
    {
      id: '5',
      category: 'Meat',
      amount: 2,
    },
  ];

  const ingredientsDataInitial = [
    {
      id: '1',
      name: 'Milk',
      category: 'Dairy',
      unit: 'Litre',
      amount: 1,
      purchaseDate: '2023-03-17',
      expirationDate: '2023-03-24',
      expirationTime: 7,
      expiresInDays: null,
    },
    {
      id: '2',
      name: 'Eggs',
      category: 'Dairy',
      unit: 'Item',
      amount: 1,
      purchaseDate: '2023-03-17',
      expirationDate: '2023-04-14',
      expirationTime: 28,
      expiresInDays: null,
    },
    {
      id: '3',
      name: 'Potatoes',
      category: 'Vegetables',
      unit: 'Item',
      amount: 1,
      purchaseDate: '2023-03-14',
      expirationDate: '2023-04-14',
      expirationTime: 30,
      expiresInDays: null,
    },
    {
      id: '4',
      name: 'Brown rice',
      category: 'Grains',
      unit: 'Grams',
      amount: 1,
      purchaseDate: '2023-03-17',
      expirationDate: '2024-03-17',
      expirationTime: 365,
      expiresInDays: null,
    },
    {
      id: '5',
      name: 'Ground beef',
      category: 'Meat',
      unit: 'Grams',
      amount: 1,
      purchaseDate: '2023-03-17',
      expirationDate: '2023-03-20',
      expirationTime: 3,
      expiresInDays: null,
    },
    {
      id: '6',
      name: 'Chicken',
      category: 'Meat',
      unit: 'Grams',
      amount: 1,
      purchaseDate: '2023-03-17',
      expirationDate: '2023-03-19',
      expirationTime: 2,
      expiresInDays: null,
    },
  ].map((ingredient) => ({
    ...ingredient,
    expiresInDays: calculateExpiresInDays(ingredient.expirationDate),
  }));

  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleLinkPress = (destination) => {
    navigation.navigate(destination);
  };

  useEffect(() => {
    setIsLoading(true);
    const priorityIngredients = prioritizeIngredients(ingredientsDataInitial);
    axios
      .get(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.API_KEY}&ingredients=${priorityIngredients}&number=5&ranking=1`
      )
      .then((response) => {
        // console.log(response.data)
        const recipes = response.data;
        // console.log('Recipe Object Keys', Object.keys(recipes[0]));
        recipes.forEach((recipe) => {
          recipe.totalMissingIngredients = countMissingIngredients(recipe.missedIngredients, ingredientsDataInitial);
        });
        setData(recipes);
        setIsLoading(false);

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const styles = {
    contentContainer: {
      flex: 1,
      backgroundColor: Colors.creamyWhite,
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      paddingHorizontal: 20,
      paddingTop: 16,
      paddingBottom: 8,
    },
    headerText: {
      fontSize: 24,
      color: Colors.primaryBlack,
    },
    headerButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerButtonText: {
      fontSize: 20,
      color: Colors.primaryBlack,
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  if (isLoading) {
    return (
      <View style={styles.loader}>
        {/* <Text>Anything inside this view will show up while loading thre page </Text>*/}
        <ActivityIndicator size="large" color="#b82d1b" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.contentContainer}>
      <Button
        title="Sign in with Google"
        disabled={!request}
        onPress={() => {
          promptAsync();
        }}
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Fridge</Text>
          <TouchableOpacity style={styles.headerButton} onPress={() => handleLinkPress('Fridge')}>
            <Icon name='list' size={24} color={Colors.primaryBlack} />
            <Text style={styles.headerButtonText}> View All</Text>
          </TouchableOpacity>
        </View>
        <Carousel
          data={fridgeCategories}
          CardComponent={CategorySquare}
        />
        <View style={styles.header}>
          <Text style={styles.headerText}>Recipes</Text>
          <TouchableOpacity style={styles.headerButton} onPress={() => handleLinkPress('Recipes')}>
            <Icon name='list' size={24} color={Colors.primaryBlack} />
            <Text style={styles.headerButtonText}> View All</Text>
          </TouchableOpacity>
        </View>
        <Carousel
          data={data}
          CardComponent={RecipeCard}
        />
      </View>
    </ScrollView>

  );
}

export default HomeScreen;