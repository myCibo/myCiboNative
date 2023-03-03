import { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image } from 'react-native';
import OptionsModal from '../organisms/OptionsModal';

export default function IngredientItem({ ingredientName = "Milk", ingredientExpiration = 3}) {
    const [showOptions, setShowOptions] = useState(false);
    const handleToggleModal = () => {
        setShowOptions(!showOptions);
    }

    const color = ingredientExpiration < 1 ? '#323232' : ingredientExpiration < 2 ? '#BA2D1B' : ingredientExpiration< 5 ? '#F0A047' : '#6B987A'
    const styles = {
        container: {
            padding: 10,
            height: 50,
            width:"100%",
            backgroundColor: color,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginBottom: 10,
        }}
    return (
        <TouchableWithoutFeedback onPress={() => alert('You clicked on an ingredient item!')}>
            <View style={styles.container}>
                <Text style={{ color: 'white' }}>{ingredientName}</Text>
                <Text style={{ color: 'white' }}>Expires in {ingredientExpiration} Days</Text>
                <TouchableWithoutFeedback onPress={handleToggleModal} hitSlop={{ top: 200, bottom: 200, left: 200, right: 200 }}><Image  source={require('../../assets/images/option-dots-icon.png')}></Image></TouchableWithoutFeedback>
                <OptionsModal onToggleModal={handleToggleModal} showOptions={showOptions} />
            </View>
        </TouchableWithoutFeedback>
    );
}