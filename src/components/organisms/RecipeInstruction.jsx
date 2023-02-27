import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Linking } from 'react-native';



//Data in this component is coming from spoonacular api, / Get Analyzed Recipe Instructions:
//GET https://api.spoonacular.com/recipes/{id}/analyzedInstructions


const RecipeInstruction = ({ data }) => {
    const styles = StyleSheet.create({
        card: {
            width: 340, //hmmmm
            flexDirection: 'row',
            backgroundColor: '#FFFFFF',
            borderRadius: 4,
            margin:12,
            padding: 15,

            fontSize:13,
            color:'#424242',

            elevation: 5,
            shadowOffset: { width: 0, height: 8 },
            shadowColor: '#000000',
            shadowOpacity: 0.1,
            shadowRadius: 20,
        },
    });



    const newArray = [];
    data[0].steps.forEach((fullStep, index) => {

        const step = fullStep.step
        const newStep = { step };
        newStep.id = index + 1;
        

        newArray.push(newStep); // {step, id}
    });




    const renderStep = ({ item }) => {
        return (
            <View style={styles.card}>
                <Text>{item.id}. </Text>
                <Text>{item.step}</Text>
            </View>
        );
    };


    return (

        <FlatList
            data={newArray}
            renderItem={renderStep}
            keyExtractor={(item) => item.id.toString()}
        />

    );
};


export default RecipeInstruction