import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text, FlatList } from 'react-native';
import SingleRecipeCarousel from '../molecules/SingleRecipeCarousel';


const { width: screenWidth } = Dimensions.get('window');


const Carousel = ({ data, CardComponent, horizontal = true, Header }) => {

    const renderItem = ({ item }) => (
        <CardComponent {...item} />
    );

    return (
        <View>
            {Header && <Header />}

            <FlatList
                horizontal={horizontal}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false} // <-- Hide the scrollbar
            />
        </View>
    );
};


const styles = StyleSheet.create({
    categoryName: {
        paddingHorizontal: 20,
        fontFamily: "sans-serif",
        fontWeight: "bold",
        textTransform: 'uppercase',
        fontSize: 16,
    },
});

export default Carousel;
