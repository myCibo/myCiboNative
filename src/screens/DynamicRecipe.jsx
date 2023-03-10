import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useRoute } from "@react-navigation/native";
import axios from 'axios';

import RecipeIngredients from '../components/organisms/RecipeIngredients'
import RecipeInstruction from '../components/organisms/RecipeInstruction';
import RecipeDetails from '../components/molecules/RecipeDetails';


function DynamicRecipe() {
    const route = useRoute();
    // const { id, image, title } = route.params;

    const id = "665550";
    const image = "https://picsum.photos/400/300";
    const title = "jabada";

    const [ingData, setIngData] = useState([]);
    const [insData, setInsData] = useState([]);




    useEffect(() => {


        // FAKE DATA--------------
        setInsData(
            [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Bone the lamb and cut into 1\" cubes.",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "bone",
                                    "localizedName": "bone",
                                    "image": ""
                                },
                                {
                                    "id": 10017224,
                                    "name": "lamb",
                                    "localizedName": "lamb",
                                    "image": "lamb-shanks.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 2,
                            "step": "Combine all ingredients in a large bowl, mix, cover and refrigerate overnight. Skewer cubes and grill over charcoal about 7 min. per side.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 3065,
                                    "name": "skewers",
                                    "localizedName": "skewers",
                                    "image": "wooden-skewers.jpg"
                                },
                                {
                                    "id": 404706,
                                    "name": "grill",
                                    "localizedName": "grill",
                                    "image": "grill.jpg"
                                },
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ],
                            "length": {
                                "number": 7,
                                "unit": "minutes"
                            }
                        }
                    ]
                }
            ]


        )

        setIngData([
            {
                "name": "veg oil",
                "image": "vegetable-oil.jpg",
                "amount": {
                    "metric": {
                        "value": 5.0,
                        "unit": "Tbsps"
                    },
                    "us": {
                        "value": 5.0,
                        "unit": "Tbsps"
                    }
                }
            },
            {
                "name": "cumin",
                "image": "ground-cumin.jpg",
                "amount": {
                    "metric": {
                        "value": 59.147,
                        "unit": "g"
                    },
                    "us": {
                        "value": 0.25,
                        "unit": "cup"
                    }
                }
            },
            {
                "name": "leg of lamb",
                "image": "leg-of-lamb.png",
                "amount": {
                    "metric": {
                        "value": 2.858,
                        "unit": "kgs"
                    },
                    "us": {
                        "value": 10.0,
                        "unit": "pounds"
                    }
                }
            },
            {
                "name": "nutmeg",
                "image": "ground-nutmeg.jpg",
                "amount": {
                    "metric": {
                        "value": 0.5,
                        "unit": "tsps"
                    },
                    "us": {
                        "value": 0.5,
                        "unit": "tsps"
                    }
                }
            },
            {
                "name": "paprika",
                "image": "paprika.jpg",
                "amount": {
                    "metric": {
                        "value": 2.0,
                        "unit": "Tbsps"
                    },
                    "us": {
                        "value": 2.0,
                        "unit": "Tbsps"
                    }
                }
            },
            {
                "name": "plain yogurt",
                "image": "plain-yogurt.jpg",
                "amount": {
                    "metric": {
                        "value": 80.0,
                        "unit": "g"
                    },
                    "us": {
                        "value": 2.822,
                        "unit": "oz"
                    }
                }
            },
            {
                "name": "salt",
                "image": "salt.jpg",
                "amount": {
                    "metric": {
                        "value": 0.25,
                        "unit": "tsps"
                    },
                    "us": {
                        "value": 0.25,
                        "unit": "tsps"
                    }
                }
            },
            {
                "name": "tumeric",
                "image": "turmeric.jpg",
                "amount": {
                    "metric": {
                        "value": 1.0,
                        "unit": "Tbsp"
                    },
                    "us": {
                        "value": 1.0,
                        "unit": "Tbsp"
                    }
                }
            }
        ])
        //---------------------------


        //     axios.get(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${process.env.API_KEY}`)
        //         .then(response => {
        //             setIngData(response.data.ingredients);
        //         })
        //         .catch(error => {
        //             console.log(error);
        //         });



        //     axios.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${process.env.API_KEY}`)
        //         .then(response => {
        //             setInsData(response.data);
        //         })
        //         .catch(error => {
        //             console.log(error);
        //         });
    }, [id]);

    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.headerContainer}>
                    {/* <Text>{image}</Text> */}
                    <Image
                        source={{ uri: image }}
                        style={styles.image}
                    />

                    <LinearGradient
                        colors={['rgba(246, 245, 240, 0.65)', '#F6F5F0']}
                        style={styles.overlay}
                    >
                        <Text style={styles.title}>{title}</Text>
                    </LinearGradient>
                </View>

                {/* // FAKE DATA-------------- */}

                <RecipeDetails timeInMinutes={23} serving={3} calorie={124}/>

                {/*--------------------------- */}

                {ingData.length > 0 && <RecipeIngredients data={ingData} />}
                {insData.length > 0 && <RecipeInstruction data={insData} />}
            </View>
        </ScrollView>
    );
}

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
    title: {
        color: "#000",
        fontSize: 25,
        textAlign: "left",
        textTransform: "capitalize",
        paddingHorizontal: 10,
    },
});

export default DynamicRecipe;
