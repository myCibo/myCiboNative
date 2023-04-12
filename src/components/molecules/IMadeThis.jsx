import React, { useState, useContext } from 'react';
import { TouchableOpacity, Text, Image, View, Button, StyleSheet } from 'react-native';
import Icon from '../atoms/Icon';
import Colors from '../../constants/styles';
import ItemModal from '../organisms/ItemModal';
import ListModal from '../organisms/ListModal';
import FridgeHandler from '../../handlers/FridgeHandler';
import UserContext from '../../contexts/UserContext';


// import localIconSources from './localIconSources';
const fridgeHandler = new FridgeHandler();

export default function IMadeThis({ apiData }) {

    const styles = StyleSheet.create({
        button: {
            width: 320,
            height: 50,
            backgroundColor: '#6B987A',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.4,
            shadowRadius: 2,
            elevation: 2,
            borderRadius: 4,
            justifyContent: 'center',
            alignItems: 'center',

            marginVertical: 15,
        },
        buttonText: {
            color: '#fff',
            fontSize: 18,
        },
    });


    // console.log(apiData)
    const user = useContext(UserContext);
    const updateDb = (updatedObj) => {

        if (updatedObj.amount > 0) {
            console.log("no problemo")

            // update the fridge in db
            fridgeHandler.updateFridgeItem(updatedObj.id, updatedObj, (data) => {
                console.log(`Item ${updatedObj.id} updated in fridge db`);
            });

        } else {

            // delete in groccery 
            fridgeHandler.deleteFridgeItem(updatedObj.id, (data) => {
                console.log(`Item ${updatedObj.id} deleted from grocery db`);
            });

            //Add the To shopping list 
            
        }

    }


    const handlePress = () => {
        fridgeHandler.getFridgeItems(user.id, (dbData) => {
            // console.log(dbData)


            //first we need to match the recipe ingredient name with a result from the fridge. If there is a match move on to units

                // we need unit data from the db to compare the existing units, their volumes with those in fridge
                
                // for example a fridge item with amount: 12, unitId: 1 could be like 12 grams, or 120ml.

                // we can then grab the unit data from the constant unit data to try and match the recipe data with a unit from our list.

                // if there is a match

                    // we then convert the recipe unit into one of our database units, so that it can have the right format to enter into the database

                    // we will then substract this amount from the existing fridge item (this can result in a negative value)

                // if there is no match

                    // we substract half of the existing fridge item

            // we map all this to an array and call the backend with a recipeHandler

            const filteredDbArray = dbData.map(dbObj => {
                const matchingApiObj = apiData.find(apiObj => apiObj.name === dbObj.name);

                if (matchingApiObj) {
                    // Matched names: 
                    console.log(`Match found: ${matchingApiObj.name}`);
                    const dbAmount = Number(dbObj.amount);
                    const apiAmount = Number(matchingApiObj.measures.metric.amount);
                    const dbUnit = dbObj.unit;
                    const apiUnit = matchingApiObj.measures.metric.unitShort;

                    if (dbUnit === apiUnit) {
                        // Matched Units : 
                        console.log("matched units")
                        console.log(dbObj.amount)
                        dbObj.amount = (dbAmount - apiAmount).toString();
                        updateDb(dbObj)

                    } else {
                        //*** Unmatched units
                        //we need to call backend to convert them :
                        console.log(`Different units, db:${dbUnit}, api:${apiUnit}`);
                    }

                } else {
                    //Unmatched Names
                    // console.log(`${matchingApiObj} === ${dbObj}`)
                    console.log("no matches")
                }

            });
        });
    };





    return (
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>I Made This</Text>
        </TouchableOpacity>
    );
}