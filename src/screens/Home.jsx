import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
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
import FridgeHandler from '../handlers/FridgeHandler';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

const fridgeHandler = new FridgeHandler();

function HomeScreen() {
  const user = useContext(UserContext);

  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ingredientsData, setIngredientsData] = useState([]);
  const [categoryCards, setCategoryCards] = useState([]);

  const handleLinkPress = (destination) => {
    navigation.navigate(destination);
  };

  useEffect(() => {
    const userId = user.id;
    fridgeHandler.getFridgeItems(userId, (fridgeItems) => {
      const ingredients = fridgeItems.map((item) => ({
        ...item,
        expiresInDays: calculateExpiresInDays(item.expirationDate),
      }));
      setIngredientsData(ingredients);
    });
    fridgeHandler.getCategoryCards(userId, (categoryCards) => {
      setCategoryCards(categoryCards);
    });
  }, []);

  useEffect(() => {
    if (ingredientsData.length === 0) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const priorityIngredients = prioritizeIngredients(ingredientsData);
    axios
      .get(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.API_KEY}&ingredients=${priorityIngredients}&number=5&ranking=1`
      )
      .then((response) => {
        // console.log(response.data)
        const recipes = response.data;
        // console.log('Recipe Object Keys', Object.keys(recipes[0]));
        recipes.forEach((recipe) => {
          recipe.totalMissingIngredients = countMissingIngredients(recipe.missedIngredients, ingredientsData);
        });
        setData(recipes);
        setIsLoading(false);

      })
      .catch((error) => {
        console.log(error);
      });
  }, [ingredientsData]);

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
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Fridge</Text>
          <TouchableOpacity style={styles.headerButton} onPress={() => handleLinkPress('Fridge')}>
            <Icon name='list' size={24} color={Colors.primaryBlack} />
            <Text style={styles.headerButtonText}> View All</Text>
          </TouchableOpacity>
        </View>
        <Carousel
          data={categoryCards}
          CardComponent={CategorySquare}
        />
        {ingredientsData[0] && (
          <>
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
          </>
        )}
      </View>

    </ScrollView>

  );
}

export default HomeScreen;