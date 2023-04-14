import React, { useState, useEffect } from 'react';
import { View, ScrollView, Dimensions, Text, StyleSheet, Image, ActivityIndicator, Button, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useRoute } from "@react-navigation/native";

import axios from 'axios';
import RecipeIngredients from '../components/organisms/RecipeIngredients'
import RecipeInstruction from '../components/organisms/RecipeInstruction';
import RecipeDetails from '../components/molecules/RecipeDetails';
import IMadeThis from '../components/molecules/IMadeThis';



function DynamicRecipe() {
    const route = useRoute();

    const data = route.params;
    console.log('dynamic recipes', data)

//fakedata
    const fakeIngredients = [  
      {
        "aisle": "Produce",
        "amount": 0.005,
        "consistency": "SOLID",
        "id": 11114,
        "image": "savoy-cabbage.jpg",
        "measures":  {
          "metric":  {
            "amount": 0.0005,
            "unitLong": "kilogram",
            "unitShort": "kilogram",
          },
          "us":  {
            "amount": 0.0005,
            "unitLong": "kilogram",
            "unitShort": "kilogram",
          },
        },
        "name": "bananas",
        "nameClean": "bananas",
        "original": "bananas",
        "originalName": "savoy cabbage",
        "unit": "kilogram",
      },
    ]


    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [analyzedInstructions, setAnalyzedInstructions] = useState("");
    const [extendedIngredients, setExtendedIngredients] = useState("");
    // const [extendedIngredients, setExtendedIngredients] = useState(fakeData);

    const [servings, setServings] = useState("");
    const [readyInMinutes, setReadyInMinutes] = useState("");
    const [healthScore, setHealthScore] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);




    // const handleClose = () => {
    //     setShowModal(false);
    // };

    useEffect(() => {
        // if (!data?.analyzedInstructions) {
            axios.get(`https://api.spoonacular.com/recipes/${data.id}/information?apiKey=${process.env.API_KEY}`)
                .then((response) => {
                    const newData = response.data
                    setTitle(newData.title)
                    setImage(newData.image)
                    setAnalyzedInstructions(newData.analyzedInstructions)
                    setExtendedIngredients(newData.extendedIngredients)
                    setServings(newData.servings)
                    setReadyInMinutes(newData.readyInMinutes)
                    setHealthScore(newData.healthScore)
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        // } else {
        //     setTitle(data.title)
        //     setImage(data.image)
        //     setAnalyzedInstructions(data.analyzedInstructions)
        //     setExtendedIngredients(data.extendedIngredients)
        //     setServings(data.servings)
        //     setReadyInMinutes(data.readyInMinutes)
        //     setHealthScore(data.healthScore)
        //     setIsLoading(false);
        // }
    }, [data.id]);



    const styles = StyleSheet.create({
        headerContainer: {
            width: "100%",
            height: 330,
        },
        image: {
            width: "100%",
            height: "100%",
        },
        overlay: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 60,

            alignItems: "flex-start",
            justifyContent: 'flex-end',
            padding: 10,
        },
        dishTitle: {
            color: "#000",
            fontSize: 25,
            textAlign: "left",
            textTransform: "capitalize",
            paddingHorizontal: 10,
        },
        loader: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            // height:windowHeight,

        },
        title: {
            color: '#0D302F',
            fontSize: 16,
            textTransform: 'uppercase',
            marginTop: 40,
            fontWeight: 'bold',
            alignSelf: 'flex-start',
            textAlign: 'left',
            margin: 20,

        },
        button: {
            width: 320,
            height: 50,
            backgroundColor: '#6B987A',
        },
        popup: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        popupText: {
            fontSize: 20,
            marginBottom: 20,
            textAlign: 'center',
            color: '#FFF',
        },

    });




    if (isLoading) {
        return (
            <View style={styles.loader}>
                {/* <Text>Anything inside this view will show up while loading thre page </Text>*/}
                <ActivityIndicator size="large" color="#b82d1b" />
            </View>
        );
    }


    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.headerContainer}>
                    <Image
                        source={{ uri: image }}
                        style={styles.image}
                    />
                    <LinearGradient
                        colors={['rgba(246, 245, 240, 0.7)', '#F6F5F0']}
                        style={styles.overlay}>
                        <Text style={styles.dishTitle}>{title}</Text>
                    </LinearGradient>
                </View>

                <RecipeDetails
                    timeInMinutes={readyInMinutes}
                    serving={servings}
                    healthScore={healthScore} />

                <Text style={styles.title}>ingredients</Text>
                {extendedIngredients?.length > 0 && <RecipeIngredients data={extendedIngredients} />}

                <Text style={styles.title}>preparation</Text>
                {analyzedInstructions?.length > 0 && <RecipeInstruction data={analyzedInstructions} />}
                
                {/* <IMadeThis apiData= {fakeIngredients}/> */}

                <IMadeThis apiData={extendedIngredients}/>
            </View>
        </ScrollView>
    );
}



export default DynamicRecipe;
