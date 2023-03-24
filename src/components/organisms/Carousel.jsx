import { View, StyleSheet, Dimensions, TouchableOpacity, Text, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import Colors from '../../constants/styles';

import SingleRecipeCarousel from '../molecules/SingleRecipeCarousel';

const { width: screenWidth } = Dimensions.get('window');

const Carousel = ({ 
    data, 
    title = null, 
    CardComponent, 
    horizontal = true, 
    Header, 
}) => {
    const renderItem = ({ item }) => {
        return <CardComponent {...item} />;
    };

    const styles = StyleSheet.create({
        container: {
            width: '90%', // this is causing the weird padding issue that hides the overflow
            alignSelf: 'center',
        },
        flatList: {
        }
    });

    return (
        <View style={styles.container}>
            {Header && <Header title={title} />}
            <FlatList
                horizontal={horizontal}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                style={styles.flatList}
                contentContainerStyle={{ gap: 10, backgroundColor: Colors['creamyWhite'] }}
            />
        </View>
    );
};

export default Carousel;