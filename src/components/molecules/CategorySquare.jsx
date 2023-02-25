import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CategorySquare = ({
  backgroundColor,
  totalItems,
  imageSrc,
  title,
  size,
}) => {
  let cardHeight, cardWidth, imageHeight, imageWidth, totalItemsFontSize, titleFontSize;
  switch(size) {
    case "small":
      cardHeight = 80;
      cardWidth = 80;
      imageHeight = 50;
      imageWidth = 50;
      totalItemsFontSize = 10;
      titleFontSize = 14;
      break;
    case "medium":
      cardHeight = 150;
      cardWidth = 150;
      imageHeight = 100;
      imageWidth = 100;
      totalItemsFontSize = 14;
      titleFontSize = 20;
      break;
    case "large":
      cardHeight = 220;
      cardWidth = 130;
      imageHeight = 150;
      imageWidth = 126;
      totalItemsFontSize = 20;
      titleFontSize = 30;
      break;
    default:
      cardHeight = 150;
      cardWidth = 150;
      totalItemsFontSize = 14;
      titleFontSize = 20;
  }
  return (
    <View
      style={[
        styles.container,
        { backgroundColor },
        styles.size,
        { width: cardWidth, height: cardHeight },
      ]}
    >
      <Text style={[styles.totalItems,{fontSize:totalItemsFontSize}]}>{totalItems}</Text>
      <Image
        style={[styles.image, { width: imageWidth, height: imageHeight }]}
        source={imageSrc}
      />
      <Text style={[styles.title, {fontSize:titleFontSize}]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    justifyContent: "space-between",
    padding: 8,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  totalItems: {
    color: "white",
    textAlign: "right",
  },
  image: {
    alignSelf: "center",
    marginTop: -20,
  },
  title: {
    color: "white",
    textAlign: "left",
    marginTop: -10,
  },
});

export default CategorySquare;
