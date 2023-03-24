import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


// import DynamicRecipe from '../../screens/DynamicRecipe';  // <--- import the DynamicRecipe screen
// import { createStackNavigator } from '@react-navigation/stack';
// import LabelHero from '../atoms/LabelHero';



function truncateTitle(title) {
  const words = title.split(' ');
  if (words.length > 6) {
    return words.slice(0, 6).join(' ') + '...';
  } else {
    return title;
  }
}



const SingleRecipeCarousel = ({ image, id, title }) => {
  const navigation = useNavigation();
  // const stack = createStackNavigator();




  const handlePressRecipe = (id) => {
    console.log(`the post with id:"${id}" is pressed`)
    // <Linking
    navigation.navigate('DynamicRecipe', { id, image, title });
    // stack.navigat
    // Linking.openURL('https://www.example.com')
  };




  return (
    <TouchableOpacity  key={id} onPress={() => handlePressRecipe(id)} style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: image }} />
        <LinearGradient
          colors={['transparent', 'rgba(3,3,3,0.6)']}
          style={styles.gradient}
        />
        {/* <View style={styles.textContainer}> */}
        {/* heart has to be places insdie here */}
        {/* </View> */}


      </View>
      <Text style={styles.title}>{truncateTitle(title)}</Text> 
    </TouchableOpacity>


  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    // height:'auto',
    flexDirection: 'column',
    alignItems: 'flex-start',

  },
  card: {
    width: 200,
    // height: 150,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,


    elevation: 5,
    shadowOffset: { width: 0, height: 8 },
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 20,
    // borderRadius:4,Fstretc

  },
  image: {
    width: '100%',
    height:150,
    resizeMode: 'stretch',
    // resizeMode: 'cover', //IDONOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
    borderRadius: 6,

  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    borderRadius: 4,

  },

  title: {
    fontSize: 16,
    color: '#2B2F2E',
    fontWeight: 'regular',

    marginTop: 5,
    marginBottom: 13,
    marginLeft: 2,

    flexWrap: 'wrap',

  },

});
export default SingleRecipeCarousel;
