import React, { useState, useEffect } from 'react';

import { View, ScrollView } from 'react-native';
import RecipeHero from '../components/organisms/RecipeHero';
import RecipeCarousel from '../components/organisms/RecipeCarousel';
import axios from 'axios';

//.image
//.titlr

// const data = [
//   { id: '1', imageSrc: 'https://picsum.photos/400/500', title:"title" },
//   { id: '2', imageSrc: 'https://picsum.photos/400/500', title:"title" },
//   { id: '3', imageSrc: 'https://picsum.photos/400/500' , title:"title"},
//   { id: '4', imageSrc: 'https://picsum.photos/400/500' , title:"title"},
//   { id: '5', imageSrc: 'https://picsum.photos/400/500' , title:"title"},
// ];

const data = [
  {
    "id": 716408,
    "title": "Greek-Style Baked Fish: Fresh, Simple, and Delicious",
    "image": "https://spoonacular.com/recipeImages/716408-312x231.jpg",
    "imageType": "jpg"
  },
  {
    "id": 649886,
    "title": "Lemony Greek Lentil Soup",
    "image": "https://spoonacular.com/recipeImages/649886-312x231.jpg",
    "imageType": "jpg"
  },
  {
    "id": 639606,
    "title": "Classic Greek Moussaka",
    "image": "https://spoonacular.com/recipeImages/639606-312x231.jpg",
    "imageType": "jpg"
  },
  {
    "id": 664678,
    "title": "Vegetarian Moussaka With Portabella",
    "image": "https://spoonacular.com/recipeImages/664678-312x231.jpg",
    "imageType": "jpg"
  },
  {
    "id": 645646,
    "title": "Grilled Chicken Gyros With Tzatziki",
    "image": "https://spoonacular.com/recipeImages/645646-312x231.jpg",
    "imageType": "jpg"
  },
  {
    "id": 645265,
    "title": "Great Greek Salad",
    "image": "https://spoonacular.com/recipeImages/645265-312x231.jpg",
    "imageType": "jpg"
  },
  {
    "id": 649354,
    "title": "Layered Greek Salad",
    "image": "https://spoonacular.com/recipeImages/649354-312x231.jpg",
    "imageType": "jpg"
  },
  {
    "id": 645384,
    "title": "Greek Yogurt Chicken Salad",
    "image": "https://spoonacular.com/recipeImages/645384-312x231.jpg",
    "imageType": "jpg"
  },
  {
    "id": 1098350,
    "title": "Light Greek Lemon Chicken Orzo Soup",
    "image": "https://spoonacular.com/recipeImages/1098350-312x231.jpg",
    "imageType": "jpg"
  },
  {
    "id": 649225,
    "title": "Lamb Moussaka",
    "image": "https://spoonacular.com/recipeImages/649225-312x231.jpg",
    "imageType": "jpg"
  }
]

const heroHeader = [{title:"Classic Matzo Ball Soup", image:"https://spoonacular.com/recipeImages/639616-556x370.jpg"}]



 function HomeScreen() {

  // const [data, setData] = useState([]);
  // const [heroHeader, setHeroHeader]= useState([]);

  useEffect(() => {
    //   axios
    //     .get('https://api.spoonacular.com/recipes/complexSearch?cuisine=greek&apiKey=65aee4a4d2a24b9a87d272a0efe3dd5d')
    //     .then((response) => {setData(response.data.results); })
    //     .catch((error) => {console.log(error);});
    // 

    //   axios
    //     .get('https://api.spoonacular.com/recipes/random?number=1&apiKey=65aee4a4d2a24b9a87d272a0efe3dd5d')
    //     .then((response) => {
    //     setHeroHeader(response.data.recipes);
    //     // console.log(response.data.recipes[0].image)


    // })
    //    .catch((error) => {console.log(error);});


  }, []);


  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ height: 105 }}>
        </View>
        {heroHeader.length > 0 ?
          <RecipeHero
            imageSrc={heroHeader[0].image}
            link="#"
            title={heroHeader[0].title}
            label="For You"
          />
 :
 <RecipeHero
            imageSrc= {require('../assets/images/placeholder.jpg')}
            link="#"
            title=""
            label="For You"
          />


 }
        <RecipeCarousel data={data} />
        <RecipeCarousel data={data} />
        <RecipeCarousel data={data} />
        <RecipeCarousel data={data} />
        <RecipeCarousel data={data} />

        {/* <RecipeCarousel data={data} />
        <RecipeCarousel data={data} />
        <RecipeCarousel data={data} /> */}

      </View>
    </ScrollView>
  );
}

export default HomeScreen;
