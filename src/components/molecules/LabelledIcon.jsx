import React, { useState } from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import Icon from '../atoms/Icon';
import Colors from '../../constants/styles';
import ItemModal from '../organisms/ItemModal';
import ListModal from '../organisms/ListModal';
// import localIconSources from './localIconSources';

export default function LabelledIcon({
    data = {},
    label,
    iconPos = 0,
    iconName = 'add',
    variant = 'item',
    color = Colors['fontBlack'],
    fontColor = Colors['fontBlack'],
    onNew = () => {console.log('default')},
}) {

    // variants are 'item' and 'list' and 'edit'

    const [showItemModal, setShowItemModal] = useState(false);
    const [showListModal, setShowListModal] = useState(false);

    const handleToggleItemModal = () => {
        setShowItemModal(!showItemModal);
    };

    const handleToggleListModal = () => {
        setShowListModal(!showListModal);
    };

    const handleNew = (data) => {
        console.log('newObject', data);
        onNew(data);
    };

    const styles = {
        container: {
            flexDirection: iconPos ? 'row-reverse' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        }
    };


    return (
        <TouchableOpacity onPress={variant === 'item' ? handleToggleItemModal : handleToggleListModal}>
            <View style={styles.container}>
                <Icon name={iconName} size={16} color={color} />
                <Text style={{ color: fontColor }}>{label}</Text>
                <ItemModal
                    onToggleItemModal={handleToggleItemModal}
                    showItemModal={showItemModal}
                    type="add"
                    expanded={false}
                    data={{ category: data.category ? data.category : null }}
                    onSave={handleNew}
                />
                <ListModal
                    onToggleListModal={handleToggleListModal}
                    showListModal={showListModal}
                    type={variant === 'newListItem' ? 'item' : variant === 'add' ? 'add' : 'edit'}
                    onSave={handleNew}
                />
            </View>
        </TouchableOpacity>

    );
}