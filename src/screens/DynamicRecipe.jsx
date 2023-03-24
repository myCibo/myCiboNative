import React, { useState, useEffect } from 'react';
import { View, ScrollView, Dimensions, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useRoute } from "@react-navigation/native";
import axios from 'axios';

import RecipeIngredients from '../components/organisms/RecipeIngredients'
import RecipeInstruction from '../components/organisms/RecipeInstruction';
import RecipeDetails from '../components/molecules/RecipeDetails';


function DynamicRecipe() {
    const route = useRoute();


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
            margin:20,

        },
    });


    const { id, image, title } = route.params;

    const [ingData, setIngData] = useState([]);
    const [insData, setInsData] = useState([]);
    const [detailData, setDetailData] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.API_KEY}`)
            .then(response => {
                setDetailData(response.data);
                setIngData(response.data.extendedIngredients);
                setIsLoading(false);


                axios.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${process.env.API_KEY}`)
                    .then(response => {
                        setInsData(response.data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);



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
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
                        timeInMinutes={detailData.readyInMinutes}
                        serving={detailData.servings}
                        healthScore={detailData.healthScore} />

                    <Text style={styles.title}>ingredients</Text>
                    {ingData.length > 0 && <RecipeIngredients data={ingData} />}

                    <Text style={styles.title}>preparation</Text>
                    {insData.length > 0 && <RecipeInstruction data={insData} />}
            </View>
        </ScrollView>
    );
}



export default DynamicRecipe;
