import { View, StyleSheet, Dimensions, TouchableOpacity, Text, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import SingleRecipeCarousel from '../molecules/SingleRecipeCarousel';
import Carousel from './Carousel';


const RecipeCarouselLib = ({ data }) => {
  // const [link, setLink] = useState("#");

  function CarouselHeader({ title = "this is title" }) {
    return <Text style={styles.categoryName}>{title}</Text>;
  }


  return (
    <>

      {data.mainCourse && data.mainCourse.length > 2 && (
        <Carousel
          data={data.mainCourse}
          title="Main Course"
          CardComponent={SingleRecipeCarousel}
          Header={CarouselHeader}
        />
      )}
      {data.dessert && data.dessert.length > 2 && (
        <Carousel
          data={data.dessert}
          title="Dessert"
          CardComponent={SingleRecipeCarousel}
          Header={CarouselHeader}
        />
      )}
      {data.appetizer && data.appetizer.length > 2 && (
        <Carousel
          data={data.appetizer}
          title="Appetizer"
          CardComponent={SingleRecipeCarousel}
          Header={CarouselHeader}
        />
      )}
      {data.salad && data.salad.length > 2 && (
        <Carousel
          data={data.salad}
          title="Salad"
          CardComponent={SingleRecipeCarousel}
          Header={CarouselHeader}
        />
      )}
      {data.soup && data.soup.length > 2 && (
        <Carousel
          data={data.soup}
          title="Soup"
          CardComponent={SingleRecipeCarousel}
          Header={CarouselHeader}
        />
      )}
      {data.sideDish && data.sideDish.length > 2 && (
        <Carousel
          data={data.sideDish}
          title="Side Dish"
          CardComponent={SingleRecipeCarousel}
          Header={CarouselHeader}
        />
      )}
      {data.beverage && data.beverage.length > 2 && (
        <Carousel
          data={data.beverage}
          title="Beverage"
          CardComponent={SingleRecipeCarousel}
          Header={CarouselHeader}
        />
      )}
      {data.breakfast && data.breakfast.length > 2 && (
        <Carousel
          data={data.breakfast}
          title="Breakfast"
          CardComponent={SingleRecipeCarousel}
          Header={CarouselHeader}
        />
      )}
      {data.snack && data.snack.length > 2 && (
        <Carousel
          data={data.snack}
          title="Snack"
          CardComponent={SingleRecipeCarousel}
          Header={CarouselHeader}
        />
      )}
    </>

  );
};


const styles = StyleSheet.create({
  categoryName: {
    color: "#0D302F",
    fontSize: 16,
    textTransform: "uppercase",
    marginVertical: 10,
  },

});

export default RecipeCarouselLib;
