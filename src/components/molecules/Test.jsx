import { useState, useRef, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, Dimensions, PanResponder, TouchableOpacity } from 'react-native';
import Icon from '../atoms/Icon';
import Colors from '../../constants/styles';

export default function ModalDropdown({
    placeholder = 'Item',
    data = [],
}) {
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const dropdownRef = useRef(null);

    const window = Dimensions.get('window');

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            position: 'relative',
        },
        searchContainer: {
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
            top: 48,
            left: 0,
            width: '100%',
            backgroundColor: Colors['white'],
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            zIndex: 1,
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
        },
        icon: {
            paddingHorizontal: 16,
        },
        iconOpen: {
            transform: [{ rotate: '90deg' }],
        },
    });

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: () => setOpen(true),
            onPanResponderRelease: () => setOpen(false),
            onPanResponderTerminate: () => setOpen(false),
        })
    ).current;

    const handleSelect = (item) => {
        setSelectedItem(item);
        setOpen(false);
    };

    const renderDropdown = () => {
        const dropdownHeight = Math.min(data.length * 48, window.height * 0.5);
        const dropdownTop = Math.min(48, window.height - dropdownHeight - 48);
        return (
            <View style={[styles.dropdownContainer, { top: dropdownTop, height: dropdownHeight }]} ref={dropdownRef} {...panResponder.panHandlers}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.dropdownRow} onPress={() => handleSelect(item)}>
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        );
    };

    useEffect(() => {
        if (open && dropdownRef.current) {
            dropdownRef.current.setNativeProps({
                style: { height: 'auto' },
            });
        }
    }, [open]);

    return (
        <View style={styles.container}>
            <View style={[styles.searchContainer, open && styles.searchContainerClosed]} {...panResponder.panHandlers}>
                <View style={{ flex: 1 }}>
                    <Text>{selectedItem ? selectedItem.name : placeholder}</Text>
                </View>
                <View style={[styles.icon, open && styles.iconOpen]}>
                    <Icon name="arrow-down" size={24} color={Colors['fontGray']} />
                </View>
            </View>
            {open && renderDropdown()}
        </View>
    );
}