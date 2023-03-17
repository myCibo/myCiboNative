import { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from '../atoms/Icon';
import Colors from '../../constants/styles';

export default function ModalDropdown({
    placeholder = 'Item',
    data = [],
    onChange,
}) {

    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleSelect = (item) => {
        setSelectedItem(item);
        onChange(item)
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(!open);
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            height: open ? 7 * 48 : 48,
            position: 'relative',
        },
        itemContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 48,
            width: '100%',
            backgroundColor: Colors['white'],
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            borderBottomLeftRadius: open ? 0 : 4,
            borderBottomRightRadius: open ? 0 : 4,
            ...Platform.select({
                ios: {
                    shadowColor: 'black',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: open ? 0.2 : 0,
                    shadowRadius: 4,
                },
                android: {
                    elevation: open ? 5 : 0,
                },
            }),
        },
        dropdownContainer: {
            position: 'absolute',
            width: '100%',
            top: 48,
            height: 5 * 48,
            backgroundColor: Colors['white'],
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            zIndex: 10,
            ...Platform.select({
                ios: {
                    shadowColor: 'black',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                },
                android: {
                    elevation: 5,
                },
            }),
        },
        dropdownRow: {
            flexDirection: 'row',
            alignItems: 'center',
            height: 48,
            width: '100%',
            paddingLeft: 16,
            borderBottomWidth: 1,
            borderBottomColor: Colors['creamyWhite'],
        },
        lastDropdownRow: {
            flexDirection: 'row',
            alignItems: 'center',
            height: 48,
            width: '100%',
            paddingLeft: 16,
        },
        item: {
            fontSize: 16,
            color: Colors['fontBlack'],
            paddingLeft: 16,
        },
        icon: {
            paddingHorizontal: 16,
        },
        iconOpen: {
            transform: [{ rotate: open ? '90deg' : '0deg' }],
        },
    });

    const renderDropdown = () => {
        return (
            <View style={styles.dropdownContainer}>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => (
                        <TouchableHighlight
                            onPress={() => handleSelect(item)}
                            activeOpacity={0.9}
                            underlayColor={Colors['lightGreen']}
                        >
                            <View style={index === data.length - 1 ? styles.lastDropdownRow : styles.dropdownRow}>
                                <Text>{item.name}</Text>
                            </View>
                        </TouchableHighlight>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={handleOpen}>
                <View style={styles.itemContainer}>
                    <View style={styles.item}>
                        <Text>{selectedItem ? selectedItem.name : placeholder}</Text>
                    </View>
                    <View style={[styles.icon, styles.iconOpen]}>
                        <Icon name="arrow-down" size={24} color={Colors['fontGray']} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
            {open && renderDropdown()}
        </View>

    );
}
