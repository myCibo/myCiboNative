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
        const styles = StyleSheet.create({
            card: {
                marginLeft: item.isFirst ? 10 : 0, // set margin left for first item
                marginRight: item.isLast ? 10 : 0, // set margin right for last item
            }
        });
        return <CardComponent {...item} style={styles.card} />;
    };

    const modifiedData = data.map((item, index) => ({
        ...item,
        isFirst: index === 0,
        isLast: index === data.length - 1,
    }));

    const styles = StyleSheet.create({
        container: {
            width: '100%', 
            alignSelf: 'center',
        },
        headerStyles: {
            marginLeft: 15,
        },
        flatList:{
            paddingHorizontal: 20, 
            backgroundColor: Colors['creamyWhite'], 
            gap: 10 

        }
        
        
    });

    return (
        <View style={styles.container}>
            <View style={styles.headerStyles}>
                {Header && <Header title={title} />}
            </View>
            <FlatList
                horizontal={horizontal}
                data={modifiedData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatList}
            />
        </View>

    );
};


export default Carousel;
