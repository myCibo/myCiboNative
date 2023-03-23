import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import LabelInventory from "../atoms/LabelInventory";
import { useNavigation } from '@react-navigation/native';
import ShortSummary from '../atoms/ShortSummary';


const RecipeCard = ({
  // summary,
  image,
  title,
  totalMissingIngredients = 5,
  id,
}) => {


  const navigation = useNavigation();

  const handleCardPress = (id) => {
    navigation.navigate('DynamicRecipe', { id, image, title });
  };

  const styles = StyleSheet.create({
    card: {
      width: 340,
      height: 125,
      flexDirection: 'row',
      backgroundColor: '#FFFFFF',
      borderRadius: 4,
      // padding: 16,

      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        },
        android: {
          elevation: 5,
        },
      }),
    },
    image: {
      width: 139,
      height: 125,
      resizeMode: 'cover',
      marginRight: 16,

      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
    },
    textContainer: {
      flex: 1,
      justifyContent: 'flex-start',
    },
    title: {
      fontSize: 23,
      color: '#0D302F',
      fontWeight: 'bold',
      marginTop: 18,
    },
    description: {
      color: '#7B817F',
      fontSize: 16,
      // marginBottom: ,
    },
    inventory: {
      // display:'none',
      position: 'absolute',
      bottom: 10,
    }

  });

  return (
    <TouchableOpacity onPress={() => handleCardPress(id)}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          {/* <ShortSummary text={summary} maxLength={100} /> */}
          {/* <Text style={styles.description}>{desc}</Text> */}
          <View style={styles.inventory}>
            <LabelInventory totalItems={missingIngredients} />
          </View>
        </View>
      </View>
    </TouchableOpacity>


  );
};

export default RecipeCard;
