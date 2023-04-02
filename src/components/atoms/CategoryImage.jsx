import React from 'react';
import { View, Image } from 'react-native';

const CategoryImage = ({ name = 'default', size = 100 }) => {

  const imageSource = {
    'Baking': require("assets/images/baking.png"),
    'Beverages': require("assets/images/beverages.png"),
    'Canned': require("assets/images/canned.png"),
    'Condiments': require("assets/images/condiments.png"),
    'Dairy': require("assets/images/dairy.png"),
    'Frozen': require("assets/images/frozen.png"),
    'Grains': require("assets/images/grains.png"),
    'Proteins': require("assets/images/proteins.png"),
    'Spices': require("assets/images/spices.png"),
    'Produce': require("assets/images/produce.png"),
    'Nuts': require("assets/images/nuts.png"),
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