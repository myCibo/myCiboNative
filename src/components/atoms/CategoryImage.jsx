import React from 'react';
import { View, Image } from 'react-native';

const CategoryImage = ({ name = 'default', size = 100 }) => {

  const imageSource = {
    'Baking': require("assets/images/baking.png"),
    'Breverages': require("assets/images/breverages.png"),
    'Canned': require("assets/images/canned.png"),
    'Condiments': require("assets/images/condiments.png"),
    'Dairy': require("assets/images/dairy.png"),
    'Frozen': require("assets/images/frozen.png"),
    'Fruits': require("assets/images/fruits.png"),
    'Grains': require("assets/images/grains.png"),
    'Meat': require("assets/images/meat.png"),
    'Spices': require("assets/images/spices.png"),
    'Vegetables': require("assets/images/vegetables.png"),
    'default': require("assets/images/dairy.png")
  };

  const styles = {
    image: {
        width: size,
        height: size,
    }
  };

  return (
    <View>
      <Image source={imageSource[name]} style={styles.image} />
    </View>
  );
};

export default CategoryImage;