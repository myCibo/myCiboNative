import React, { useState, useEffect } from 'react';
import { View, ScrollView,Dimensions,  Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
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
        title: {
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
    });



    // const { id, image, title } = route.params;

    // FAKE DATA------------------------------
    const id = "665550";
    const image = "https://picsum.photos/400/300";
    const title = route.params.title;
    //----------------------------------------------------

    const [ingData, setIngData] = useState([]);
    const [insData, setInsData] = useState([]);
    const [detailData, setDetailData] = useState({});
    const [isLoading, setIsLoading] = useState(true); // add isLoading state




    useEffect(() => {
        setIsLoading(false);
        //Change  this if tou want to work on the loader 

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

        setDetailData({
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 16,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 209,
            "healthScore": 18,
            "creditsText": "Full Belly Sisters",
            "license": "CC BY-SA 3.0",
            "sourceName": "Full Belly Sisters",
            "pricePerServing": 157.06,
            "extendedIngredients": [
                {
                    "id": 1001,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "SOLID",
                    "name": "butter",
                    "nameClean": "butter",
                    "original": "1 tbsp butter",
                    "originalName": "butter",
                    "amount": 1.0,
                    "unit": "tbsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 10011135,
                    "aisle": "Produce",
                    "image": "cauliflower.jpg",
                    "consistency": "SOLID",
                    "name": "cauliflower florets",
                    "nameClean": "cauliflower florets",
                    "original": "about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces",
                    "originalName": "about frozen cauliflower florets, thawed, cut into bite-sized pieces",
                    "amount": 2.0,
                    "unit": "cups",
                    "meta": [
                        "frozen",
                        "thawed",
                        "cut into bite-sized pieces"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 473.176,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1038,
                    "aisle": "Cheese",
                    "image": "parmesan.jpg",
                    "consistency": "SOLID",
                    "name": "cheese",
                    "nameClean": "pecorino romano",
                    "original": "2 tbsp grated cheese (I used romano)",
                    "originalName": "grated cheese (I used romano)",
                    "amount": 2.0,
                    "unit": "tbsp",
                    "meta": [
                        "grated",
                        "(I used romano)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 1034053,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "olive-oil.jpg",
                    "consistency": "LIQUID",
                    "name": "extra virgin olive oil",
                    "nameClean": "extra virgin olive oil",
                    "original": "1-2 tbsp extra virgin olive oil",
                    "originalName": "extra virgin olive oil",
                    "amount": 1.0,
                    "unit": "tbsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 11215,
                    "aisle": "Produce",
                    "image": "garlic.png",
                    "consistency": "SOLID",
                    "name": "garlic",
                    "nameClean": "garlic",
                    "original": "5-6 cloves garlic",
                    "originalName": "garlic",
                    "amount": 5.0,
                    "unit": "cloves",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 5.0,
                            "unitShort": "cloves",
                            "unitLong": "cloves"
                        },
                        "metric": {
                            "amount": 5.0,
                            "unitShort": "cloves",
                            "unitLong": "cloves"
                        }
                    }
                },
                {
                    "id": 10720420,
                    "aisle": "Pasta and Rice",
                    "image": "spaghetti.jpg",
                    "consistency": "SOLID",
                    "name": "pasta",
                    "nameClean": "linguine",
                    "original": "6-8 ounces pasta (I used linguine)",
                    "originalName": "pasta (I used linguine)",
                    "amount": 6.0,
                    "unit": "ounces",
                    "meta": [
                        "(I used linguine)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 6.0,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 170.097,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 1032009,
                    "aisle": "Spices and Seasonings",
                    "image": "red-pepper-flakes.jpg",
                    "consistency": "SOLID",
                    "name": "couple of pepper flakes",
                    "nameClean": "red pepper flakes",
                    "original": "couple of pinches red pepper flakes, optional",
                    "originalName": "couple of red pepper flakes, optional",
                    "amount": 2.0,
                    "unit": "pinches",
                    "meta": [
                        "red"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "pinches",
                            "unitLong": "pinches"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "pinches",
                            "unitLong": "pinches"
                        }
                    }
                },
                {
                    "id": 1102047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt-and-pepper.jpg",
                    "consistency": "SOLID",
                    "name": "salt and pepper",
                    "nameClean": "salt and pepper",
                    "original": "salt and pepper, to taste",
                    "originalName": "salt and pepper, to taste",
                    "amount": 2.0,
                    "unit": "servings",
                    "meta": [
                        "to taste"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 11291,
                    "aisle": "Produce",
                    "image": "spring-onions.jpg",
                    "consistency": "SOLID",
                    "name": "scallions",
                    "nameClean": "spring onions",
                    "original": "3 scallions, chopped, white and green parts separated",
                    "originalName": "scallions, chopped, white and green parts separated",
                    "amount": 3.0,
                    "unit": "",
                    "meta": [
                        "white",
                        "green",
                        "separated",
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 3.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 3.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 14106,
                    "aisle": "Alcoholic Beverages",
                    "image": "white-wine.jpg",
                    "consistency": "LIQUID",
                    "name": "white wine",
                    "nameClean": "dry white wine",
                    "original": "2-3 tbsp white wine",
                    "originalName": "white wine",
                    "amount": 2.0,
                    "unit": "tbsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 99025,
                    "aisle": "Pasta and Rice",
                    "image": "breadcrumbs.jpg",
                    "consistency": "SOLID",
                    "name": "bread crumbs",
                    "nameClean": "whole wheat breadcrumbs",
                    "original": "1/4 cup whole wheat bread crumbs (I used panko)",
                    "originalName": "whole wheat bread crumbs (I used panko)",
                    "amount": 0.25,
                    "unit": "cup",
                    "meta": [
                        "whole wheat",
                        "(I used panko)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 59.147,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                }
            ],
            "id": 716429,
            "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
            "readyInMinutes": 45,
            "servings": 2,
            "sourceUrl": "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
            "image": "https://spoonacular.com/recipeImages/716429-556x370.jpg",
            "imageType": "jpg",
            "summary": "You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One serving contains <b>543 calories</b>, <b>17g of protein</b>, and <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. A mixture of butter, white wine, pasta, and a handful of other ingredients are all it takes to make this recipe so yummy. 209 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, <a href=\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, and <a href=\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>.",
            "cuisines": [],
            "dishTypes": [
                "side dish",
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [],
            "occasions": [],
            "winePairing": {
                "pairedWines": [],
                "pairingText": "No one wine will suit every pasta dish. Pasta in a tomato-based sauce will usually work well with a medium-bodied red, such as a montepulciano or chianti. Pasta with seafood or pesto will fare better with a light-bodied white, such as a pinot grigio. Cheese-heavy pasta can pair well with red or white - you might try a sangiovese wine for hard cheeses and a chardonnay for soft cheeses. We may be able to make a better recommendation if you ask again with a specific pasta dish.",
                "productMatches": []
            },
            "instructions": "",
            "analyzedInstructions": [],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429"
        }

        )

        //---------------------------


        // axios.get(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${process.env.API_KEY}`)
        //     .then(response => {
        //         setIngData(response.data.ingredients);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });



        // axios.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${process.env.API_KEY}`)
        //     .then(response => {
        //         setInsData(response.data);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });


        // axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.API_KEY}`)
        //     .then(response => {
        //         setDetailData(response.data);
        //         setIsLoading(false); // set isLoading to false when all data is loaded

        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });


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
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={styles.headerContainer}>
                            {/* <Text>{image}</Text> */}
                            <Image
                                source={{ uri: image }}
                                style={styles.image}
                            />

                            <LinearGradient
                                colors={['rgba(246, 245, 240, 0.7)', '#F6F5F0']}
                                style={styles.overlay}
                            >
                                <Text style={styles.title}>{title}</Text>
                            </LinearGradient>
                        </View>


                        <RecipeDetails
                            timeInMinutes={detailData.readyInMinutes}
                            serving={detailData.servings}
                            healthScore={detailData.healthScore} />


                        {ingData.length > 0 && <RecipeIngredients data={ingData} />}
                        {insData.length > 0 && <RecipeInstruction data={insData} />}
                    
            </View>
        </ScrollView>
    );
}



export default DynamicRecipe;
