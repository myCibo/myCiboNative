import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking  } from 'react-native';
import LabelInventory from "../atoms/LabelInventory";
// import { useNavigation } from '@react-navigation/native';


const RecipeCard = ({ imageSrc, link, title, desc }) => {

  // const navigation = useNavigation();

  const handleCardPress = () => {
    // navigation.navigate({link});
    Linking.openURL(link);

  };


  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={imageSrc} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{desc}</Text>
          <View style={styles.inventory}>
            <LabelInventory totalItems={10} />
          </View>
        </View>
      </View>
    </TouchableOpacity>


  );
};

const styles = StyleSheet.create({
  card: {
    width: 340,
    height: 125,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    // padding: 16,

    elevation: 5,
    shadowOffset: { width: 0, height: 8 },
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 20,
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
    color:'#0D302F',
    fontWeight: 'bold',
    marginTop: 18,
  },
  description: {
    color:'#7B817F',
    fontSize: 16,
    // marginBottom: ,
  },
  inventory:{
    // display:'none',
    position:'absolute',
    bottom:10,
  }

});
export default RecipeCard;
