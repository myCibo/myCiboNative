import React, { useState } from 'react';
import { TouchableWithoutFeedback, Text, Image, View } from 'react-native';
import Icon from '../atoms/Icon';
import Colors from '../../constants/styles';
import ItemModal from '../organisms/ItemModal';
// import localIconSources from './localIconSources';

export default function LabelledIcon({ data = {}, label, iconPos = 0, iconName = 'add' }) {
    const styles = {
        container: {
            flexDirection: iconPos ? 'row-reverse' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        }
    };

    const [showItemModal, setShowItemModal] = useState(false);
    const handleToggleItemModal = () => {
        setShowItemModal(!showItemModal);
      };

    return (
        <TouchableWithoutFeedback onPress={handleToggleItemModal}>
            <View style={styles.container}>
                <Icon name={iconName} size={16} color={Colors['primaryBlack']} />
                <Text>{label}</Text>
                <ItemModal
                    onToggleItemModal={handleToggleItemModal}
                    showItemModal={showItemModal}
                    type="add"
                    expanded={false}
                    data={{ category: data.category ? data.category : 'Dairy'}}
                />
            </View>
        </TouchableWithoutFeedback>

    );
}