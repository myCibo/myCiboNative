import { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Text } from 'react-native';
import Icon from '../atoms/Icon';
import Colors from '../../constants/styles';

export default function ModalDropdown({
    data = [],
}) {

    const styles = StyleSheet.create({
        container: {
            width: '100%',
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
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
        },
        searchContainerOpen: {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
        },
        dropdownContainer: {
            width: '100%',
            maxHeight: 5 * 48,
            backgroundColor: Colors['white'],
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
        },
        dropdownShadow: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 5,
            zIndex: 1,
        },
        dropdownRow: {
            flexDirection: 'row',
            alignItems: 'center',
            height: 48,
            width: '100%',
            paddingLeft: 16,
        },
        searchInput: {
            flexDirection: 'row',
            alignItems: 'center',
            width: '80%',
        },
        input: {
            flex: 1,
            fontSize: 16,
            color: Colors['fontBlack'],
        },
        icon: {
            paddingHorizontal: 16,
        },
        iconOpen: {
            transform: [{ rotate: '180deg' }],
        },
    });

    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleInput = (text) => {
        setInput(text);
    };

    const handleSelect = (item) => {
        setInput(item.name);
        setOpen(false);
    };

    const renderDropdown = () => {
        return (
            <View style={styles.dropdownContainer}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.dropdownRow}
                            onPress={() => handleSelect(item)}
                        >
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={handleOpen}>
                <View style={[styles.searchContainer, open && styles.searchContainerOpen]}>
                    <View style={styles.searchInput}>
                        <TextInput
                            style={styles.input}
                            placeholder="Search"
                            value={input}
                            onChangeText={handleInput}
                        />
                    </View>
                    <View style={[styles.icon, open && styles.iconOpen]}>
                        <Icon name="arrow" />
                    </View>
                </View>
            </TouchableWithoutFeedback>
            {open && renderDropdown()}
        </View>
    );
}
