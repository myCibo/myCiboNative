import { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image } from 'react-native';
import OptionsModal from '../organisms/OptionsModal';

export default function IngredientItem({ ingredientName = "Milk", ingredientExpiration = 3 }) {
    const [showOptions, setShowOptions] = useState(false);
    const handleToggleModal = () => {
        setShowOptions(!showOptions);
    }
    return (
        <TouchableWithoutFeedback onPress={() => alert('You clicked on an ingredient item!')}>
            <View style={styles.container}>
                <Text style={{ color: 'white' }}>{ingredientName}</Text>
                <Text style={{ color: 'white' }}>Expires in {ingredientExpiration} Days</Text>
                <TouchableWithoutFeedback onPress={handleToggleModal} hitSlop={{ top: 200, bottom: 200, left: 200, right: 200 }}><Image  source={require('assets/images/option-dots-icon.png')}></Image></TouchableWithoutFeedback>
                <OptionsModal onToggleModal={handleToggleModal} showOptions={showOptions} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '80%',
        height: 50,
        backgroundColor: 'red',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
});
