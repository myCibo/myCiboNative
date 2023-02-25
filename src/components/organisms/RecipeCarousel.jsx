import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Image, FlatList } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const data = [
    { id: '1', image: require('../../assets/splash.png') },
    { id: '2', image: require('../../assets/splash.png') },
    { id: '3', image: require('../../assets/splash.png') },
    { id: '4', image: require('../../assets/splash.png') },
    { id: '5', image: require('../../assets/splash.png') },
];

const RecipeCarousel = () => {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card}>
            <Image source={item.image} style={styles.cardImage} />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                horizontal={true}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingHorizontal: 20 }}
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
