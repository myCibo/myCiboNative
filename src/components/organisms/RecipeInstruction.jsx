import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Linking, SafeAreaView} from 'react-native';

//Data in this component is coming from spoonacular api, / Get Analyzed Recipe Instructions:
//GET https://api.spoonacular.com/recipes/{id}/analyzedInstructions

const RecipeInstruction = ({ data }) => {  
    
    const styles = StyleSheet.create({
        card: {
            width: 340,
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
        title:{
            color:'#0D302F',
            fontSize:16,
            textTransform: 'uppercase',
            marginVertical: 30,
            fontWeight:'bold',
          }
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
        <SafeAreaView style={{ flex: 1 }}>
          <View>
            <Text style={styles.title}>Preparation</Text>
            {newArray.map((step, index) => (
              <View style={styles.card} key={index}>
                <Text>{step.id}. </Text>
                <Text>{step.step}</Text>
              </View>
            ))}
          </View>
        </SafeAreaView>
      );
};

export default RecipeInstruction;
