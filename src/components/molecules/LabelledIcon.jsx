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
    onNewList = () => {console.log('default onNewList')},
    onNewItem = () => {console.log('default onNewItem')},
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

    // handle new list should pass the name back to the parent component
    const handleNewList = (listName) => {
        console.log('newListName', listName);
        onNewList(listName);
    };

    const handleNewItem = (item) => {
        console.log('newItem', item);
        onNewItem(item);
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
                    data={{ category: data.category ? data.category : 'Dairy' }}
                />
                <ListModal
                    onToggleListModal={handleToggleListModal}
                    showListModal={showListModal}
                    type={variant === 'newListItem' ? 'item' : variant === 'add' ? 'add' : 'edit'}
                    onSaveList={handleNewList}
                    onSaveItem={handleNewItem}
                />
            </View>
        </TouchableOpacity>

    );
}