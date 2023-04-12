import React, { useState, useContext } from 'react';
import { TouchableOpacity, Text, Image, View, Button, StyleSheet } from 'react-native';
import Icon from '../atoms/Icon';
import Colors from '../../constants/styles';
import ItemModal from '../organisms/ItemModal';
import ListModal from '../organisms/ListModal';
import FridgeHandler from '../../handlers/FridgeHandler';
import ShoppingListHandler from "../../handlers/ShoppingListHandler";
import UserContext from '../../contexts/UserContext';


// import localIconSources from './localIconSources';
const fridgeHandler = new FridgeHandler();
const shoppingListHandler = new ShoppingListHandler();

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