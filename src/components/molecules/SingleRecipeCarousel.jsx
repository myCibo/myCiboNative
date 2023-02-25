import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking  } from 'react-native';
import LabelHero from '../atoms/LabelHero';
import { LinearGradient } from 'expo-linear-gradient';

// import { useNavigation } from '@react-navigation/native';


const SingleRecipeCarousel = ({ imageSrc, link, title, label }) => {

  // const navigation = useNavigation();

  const handleCardPress = () => {
    // navigation.navigate({link});
    Linking.openURL(link);

  };


  return (
    <TouchableOpacity onPress={handleCardPress} style={styles.container}>
      <View style={styles.card}>
   
        <Image style={styles.image} source={imageSrc} />
        <LinearGradient
       colors={[ 'transparent','rgba(3,3,3,0.6)']}
       style={styles.gradient}
      />
        {/* <View style={styles.textContainer}> */}
         {/* heart has to be places insdie here */}
        {/* </View> */}


      </View>
      <Text style={styles.title}>{title}</Text>

    </TouchableOpacity>


  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin:5,
    },
  card: {
    width: 134,
    height: 124,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,

    // position: relative,
    // padding: 16,

    elevation: 5,
    shadowOffset: { width: 0, height: 8 },
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 20,
    // borderRadius:4,

},
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    // marginRight: 16,
    borderRadius:6,

  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    borderRadius: 4,

  },
  // textContainer: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   justifyContent: 'flex-end',
  //   alignItems: 'flex-start',
  // },
  title: {
    fontSize: 16,
    color:'2B2F2E',
    fontWeight: 'regular',

    marginTop:5,
    marginBottom:13,
    marginLeft:2,

  },

});
export default SingleRecipeCarousel;
