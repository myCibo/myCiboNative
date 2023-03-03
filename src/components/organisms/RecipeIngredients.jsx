import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Linking } from 'react-native';



//Data in this component is coming from spoonacular api, Ingredient by ID:
//GET https://api.spoonacular.com/recipes/{id}/ingredientWidget.json


const RecipeIngredients = ({ data }) => {
    const styles = StyleSheet.create({
        card: {
            width: 340, //hmmmm
            flexDirection: 'row',
            justifyContent:'flex-start',
            alignContent:'flex-start',
            // backgroundColor: '#FFFFFF',
            borderRadius: 4,
            marginTop:21,
            paddingBottom: 23,

            fontSize:13,
            color:'#424242',
            fontWeight: 'bold', //yup its ot working :))

            borderBottomColor: '#B9B9B9',
            borderBottomWidth: StyleSheet.hairlineWidth,

            // elevation: 5,
            // shadowOffset: { width: 0, height: 8 },
            // shadowColor: '#000000',
            // shadowOpacity: 0.1,
            // shadowRadius: 20,
        },

    });



    const newArray = [];
    data.ingredients.forEach((ingredient, index) => {

        const newIngredient = {}

        newIngredient.id = index + 1
        newIngredient.name = ingredient.name
        newIngredient.unit = ingredient.amount.us.unit
        newIngredient.value = ingredient.amount.us.value

        newArray.push(newIngredient);
    });



    const renderIngredient = ({ item }) => {
        return (
            <View style={styles.card}>
                <Text>{item.value} </Text>
                <Text>{item.unit} </Text>
                <Text>{item.name}</Text>
            </View>
        );
    };


    return (
        // <p>hii</p>

        <FlatList
            data={newArray}
            renderItem={renderIngredient}
            keyExtractor={(item) => item.id.toString()}
        />

    );
};


export default RecipeIngredients