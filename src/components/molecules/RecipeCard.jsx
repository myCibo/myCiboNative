import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, Platform } from 'react-native';
import LabelInventory from "../atoms/LabelInventory";
import { useNavigation } from '@react-navigation/native';
import ShortSummary from '../atoms/ShortSummary';
import Colors from '../../constants/styles';
import { LinearGradient } from 'expo-linear-gradient';

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
      width: 200,
      height: 150,
      flexDirection: 'column',
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
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      borderRadius: 8,
    },
    contentContainer: {
      position: 'absolute',
      justifyContent: 'space-between',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      // bottom: 0,
      // width: '100%',
      // height: 80,
      // display: 'flex',
      // justifyContent: 'space-evenly',
      // i need this to be opacity 0.5
      // backgroundColor: 'rgba(0,0,0,0.5)',
      padding: 10,
      // gap: 8,
      // backgroundColor: Colors.fontBlack,
      borderBottomRightRadius: 8,
      borderBottomLeftRadius: 8,
    },
    title: {
      alignSelf: 'flex-start',
      fontSize: 22,
      color: Colors.white,
    },
    gradient: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: 8,

    },
    // description: {
    //   color: Colors.fontBlack,
    //   fontSize: 16,
    //   // marginBottom: ,
    // },
    inventory: {
      alignSelf: 'flex-end',
      // display:'none',
      // position: 'absolute',
    }

  });

  return (
    <TouchableOpacity onPress={() => handleCardPress(id)}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: image }} />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.6)']}
          style={styles.gradient}
        />
        <View style={styles.contentContainer}>
          {/* <Text style={styles.title}>{title}</Text> */}
          <View style={styles.inventory}>
            <LabelInventory totalItems={totalMissingIngredients} />
          </View>
          
            <ShortSummary style={styles.title} text={title} maxLength={25} />
        
          {/* <Text style={styles.description}>{desc}</Text> */}

          

        </View>
      </View>
    </TouchableOpacity>


  );
};

export default RecipeCard;
