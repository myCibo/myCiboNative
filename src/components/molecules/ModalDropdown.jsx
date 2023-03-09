import { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from '../atoms/Icon';
import Colors from '../../constants/styles';

export default function ModalDropdown({
    placeholder = 'Item',
    data = [],
}) {

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            position: 'relative',
            zIndex: 10,
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
            left: 0,
            backgroundColor: Colors['white'],
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
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
        // dropdownList: {
        //     height: 5 * 48,

        // },
        dropdownRow: {
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
            transform: [{ rotate: '90deg' }],
        },
    });

    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleSelect = (item) => {
        setSelectedItem(item);
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(!open);
    };

    const renderDropdown = () => {
        return (
            <View style={styles.dropdownContainer}>
                <View style={{ height: 48 * 5 }}>
                    <FlatList
                        data={data}
                        contentContainerStyle={{ paddingBottom: 30 }}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handleSelect(item)}>
                                <View style={styles.dropdownRow}>
                                    <Text>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.id}
                    />
                </View>
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
                    <View style={[styles.icon, open && styles.iconOpen]}>
                        <Icon name="arrow-down" size={24} color={Colors['fontGray']} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
            {open && renderDropdown()}
        </View>
    );
}
