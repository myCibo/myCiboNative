import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking  } from 'react-native';
import LabelHero from '../atoms/LabelHero';
import { LinearGradient } from 'expo-linear-gradient';

// import { useNavigation } from '@react-navigation/native';


const RecipeCard = ({ imageSrc, link, title, label }) => {

  // const navigation = useNavigation();

  const handleCardPress = () => {
    // navigation.navigate({link});
    Linking.openURL(link);

  };


  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.card}>

        <Image style={styles.image} source={imageSrc} />
        <LinearGradient
       colors={[ 'transparent','rgba(0,0,0,0.6)']}
       style={styles.gradient}
      />
        <View style={styles.textContainer}>
        <LabelHero message={label}/>
        <Text style={styles.title}>{title}</Text>
        </View>

      </View>
    </TouchableOpacity>


  );
};

const styles = StyleSheet.create({
  card: {
    width: 352,
    height: 257,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',

    // position: relative,
    // padding: 16,

    elevation: 5,
    shadowOffset: { width: 0, height: 8 },
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 20,
    borderRadius:6,

},
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius:6,

    
    // marginRight: 16,

  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,

    borderRadius:6,

  },

  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 24,
    color:'#EDF3F4',
    fontWeight: 'medium',

    marginTop:5,
    marginBottom:13,
    marginLeft:5,
    

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
