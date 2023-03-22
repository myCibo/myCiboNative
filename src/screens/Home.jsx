import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Carousel from '../components/organisms/Carousel';
import CategorySquare from '../components/molecules/CategorySquare';
import Icon from '../components/atoms/Icon';
import Colors from '../constants/styles';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {

  const fridgeCategories = [
    {
      id: '1',
      category: 'Dairy',
      amount: 2,
    },
    {
      id: '3',
      category: 'Vegetables',
      amount: 1,
    },
    {
      id: '4',
      category: 'Grains',
      amount: 1,
    },
    {
      id: '5',
      category: 'Meat',
      amount: 2,
    },
  ];

  const navigation = useNavigation();

  const handleLinkPress = (destination) => {
    navigation.navigate(destination);
  };

  const styles = {
    contentContainer: {
      flex: 1,
      backgroundColor: Colors.creamyWhite,
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      padding: 20,
    },
    headerText: {
      fontSize: 24,
      color: Colors.primaryBlack,
    },
    headerButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerButtonText: {
      fontSize: 20,
      color: Colors.primaryBlack,
    },
  };

  return (
    <ScrollView style={styles.contentContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Fridge</Text>
          <TouchableOpacity style={styles.headerButton} onPress={() => handleLinkPress('Fridge')}>
            <Icon name='list' size={24} color={Colors.primaryBlack} />
            <Text style={styles.headerButtonText}> View All</Text>
          </TouchableOpacity>
        </View>
        <Carousel
          data={fridgeCategories}
          CardComponent={CategorySquare}
        />
      </View>
    </ScrollView>

  );
}

export default HomeScreen;