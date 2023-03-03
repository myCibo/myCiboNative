import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text, FlatList } from 'react-native';
import SingleRecipeCarousel from '../molecules/SingleRecipeCarousel';


const { width: screenWidth } = Dimensions.get('window');


const RecipeCarousel = ({ data, title }) => {

    // console.log(data)

    const renderItem = ({ item }) => (
        <TouchableOpacity>
             <SingleRecipeCarousel style={styles.card} imageSrc={item.image} link="#" title={item.title}/>
            
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.categoryName}>
                <Text>{title}</Text>
            </View>

            <FlatList
                horizontal={true}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingHorizontal: 20, width: screenWidth }}
                showsHorizontalScrollIndicator={false} // <-- Hide the scrollbar
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        height: 250,
        marginVertical: 10,
        overflow: 'hidden',
    },
    categoryName: {
        paddingHorizontal:20,
        fontFamily: "sans-serif",
        fontWeight:"bold",
        textTransform:'uppercase',
        fontSize:16,

    

    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 5,
        width: 250,
        height: 200,
        marginRight: 20,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
});

export default RecipeCarousel;
