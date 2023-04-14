import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableHighlight, Platform, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from '../atoms/Icon';
import Colors from '../../constants/styles';
import { Dropdown } from 'react-native-searchable-dropdown-kj';


export default function ModalDropdown({
    placeholder = 'Item',
    data = [],
    onChange,
    selected,
}) {

    // useEffect(() => {
    //     if (selected) {
    //         setSelectedItemName(selected);
    //     }
    // }, [selected]); 'https:\\www.vigcenter.com\

    // const [open, setOpen] = useState(false);
    // const [selectedItemName, setSelectedItemName] = useState(selected || null);

    const [value, setValue] = useState(selected?.id || null);
    const [isFocus, setIsFocus] = useState(false);

    const handleSelectItem = (item) => {
        console.log('handleSelectedItem', item);
        setValue(item.id);
        onChange(item);
    };

    // const handleOpen = () => {
    //     setOpen(!open);
    // };

    // const styles = StyleSheet.create({
    //     container: {
    //         flex: 1,
    //         height: open ? 7 * 48 : 48,
    //         position: 'relative',
    //     },
    //     itemContainer: {
    //         flexDirection: 'row',
    //         justifyContent: 'space-between',
    //         alignItems: 'center',
    //         height: 48,
    //         width: '100%',
    //         backgroundColor: Colors['white'],
    //         borderTopLeftRadius: 4,
    //         borderTopRightRadius: 4,
    //         borderBottomLeftRadius: open ? 0 : 4,
    //         borderBottomRightRadius: open ? 0 : 4,
    //         ...Platform.select({
    //             ios: {
    //                 shadowColor: 'black',
    //                 shadowOffset: { width: 0, height: 2 },
    //                 shadowOpacity: open ? 0.2 : 0,
    //                 shadowRadius: 4,
    //             },
    //             android: {
    //                 elevation: open ? 5 : 0,
    //             },
    //         }),
    //     },
    //     dropdownContainer: {
    //         position: 'absolute',
    //         width: '100%',
    //         top: 48,
    //         height: 5 * 48,
    //         backgroundColor: Colors['white'],
    //         borderBottomLeftRadius: 4,
    //         borderBottomRightRadius: 4,
    //         zIndex: 10,
    //         ...Platform.select({
    //             ios: {
    //                 shadowColor: 'black',
    //                 shadowOffset: { width: 0, height: 2 },
    //                 shadowOpacity: 0.2,
    //                 shadowRadius: 4,
    //             },
    //             android: {
    //                 elevation: 5,
    //             },
    //         }),
    //     },
    //     dropdownRow: {
    //         flexDirection: 'row',
    //         alignItems: 'center',
    //         height: 48,
    //         width: '100%',
    //         paddingLeft: 16,
    //         borderBottomWidth: 1,
    //         borderBottomColor: Colors['creamyWhite'],
    //     },
    //     lastDropdownRow: {
    //         flexDirection: 'row',
    //         alignItems: 'center',
    //         height: 48,
    //         width: '100%',
    //         paddingLeft: 16,
    //     },
    //     item: {
    //         fontSize: 16,
    //         color: Colors['fontBlack'],
    //         paddingLeft: 16,
    //     },
    //     icon: {
    //         paddingHorizontal: 16,
    //     },
    //     iconOpen: {
    //         transform: [{ rotate: open ? '90deg' : '0deg' }],
    //     },
    // });

    // const renderDropdown = () => {
    //     return (
    //         <View style={styles.dropdownContainer}>
    //             <FlatList
    //                 data={data}
    //                 renderItem={({ item, index }) => (
    //                     <TouchableHighlight
    //                         onPress={() => handleSelect(item)}
    //                         activeOpacity={0.9}
    //                         underlayColor={Colors['lightGreen']}
    //                     >
    //                         <View style={index === data.length - 1 ? styles.lastDropdownRow : styles.dropdownRow}>
    //                             <Text>{item.name}</Text>
    //                         </View>
    //                     </TouchableHighlight>
    //                 )}
    //                 keyExtractor={(item) => item.id}
    //             />
    //         </View>
    //     );
    // };

    // return (
    //     <View style={styles.container}>
    //         <TouchableWithoutFeedback onPress={handleOpen}>
    //             <View style={styles.itemContainer}>
    //                 <View style={styles.item}>
    //                     <Text>{selectedItemName ? selectedItemName : placeholder}</Text>
    //                 </View>
    //                 <View style={[styles.icon, styles.iconOpen]}>
    //                     <Icon name="arrow-down" size={24} color={Colors['fontGray']} />
    //                 </View>
    //             </View>
    //         </TouchableWithoutFeedback>
    //         {open && renderDropdown()}
    //     </View>

    // );

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        dropdown: {
            height: 48,
            paddingLeft: 16,
            paddingRight: 8,
            backgroundColor: Colors['white'],
            borderRadius: 4,
            ...Platform.select({
                ios: {
                    shadowColor: 'black',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                },
                android: {
                    elevation: 2,
                },
            }),
        },
        placeholderStyle: {
            fontSize: 16,
        },
        selectedTextStyle: {
            fontSize: 14,
        },
        inputSearchStyle: {
            height: 40,
            fontSize: 16,
        },
    });

    return (
        <View style={styles.container}>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={6 * 48}
                labelField="name"
                valueField="id"
                placeholder={!isFocus ? 'Select item' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    handleSelectItem(item);
                }}
            />
        </View>
    );
}
