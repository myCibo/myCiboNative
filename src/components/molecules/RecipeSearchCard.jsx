import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import LabelInventory from '../atoms/LabelInventory';
import { useNavigation } from '@react-navigation/native';
import ShortSummary from '../atoms/ShortSummary';
import Colors from '../../constants/styles';
import { LinearGradient } from 'expo-linear-gradient';

const RecipeSearchCard = ({
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
      height: 80,
      flexDirection: 'row',
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
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
    imageContainer: {
      width: 80,
      height: '100%',
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,

    },
    contentContainer: {
      flex: 1,
      padding: 10,
      justifyContent: 'space-between',
      borderBottomRightRadius: 8,
      borderTopRightRadius: 8,
      paddingVertical: 12, // add padding to the top and bottom

    },
    title: {
      fontSize: 18,
      color: Colors.fontBlack,
    },
    inventory: {
      alignSelf: 'flex-start',
      // display:'none',
      // position: 'absolute',
    },
  });

  return (
    <TouchableOpacity onPress={() => handleCardPress(id)}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: image }} />
        </View>
        <View style={styles.contentContainer}>
          <View style={{ flex: 1 }}>
            <ShortSummary style={styles.title} text={title} maxLength={25} />
          </View>
          <View style={styles.inventory}>
            <LabelInventory totalItems={totalMissingIngredients} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeSearchCard;
