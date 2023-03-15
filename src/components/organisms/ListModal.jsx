import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
} from "react-native";
import { useState, useEffect } from "react";
import Modal from "react-native-modal";
import Icon from "../atoms/Icon";
import Colors from "../../constants/styles";
import CustomButton from "../atoms/CustomButton";
import ModalInput from "../molecules/ModalInput";
import ModalSearch from "../molecules/ModalSearch";
import ModalDropdown from "../molecules/ModalDropdown";
import { getIngredients, getMeasurements } from '../../constants/FoodData';

export default function ListModal({
    showListModal,
    type = 'item',
    onToggleListModal,
    data = {},
    onSave,
}) {
    // type is either 'item' or 'list' or 'edit'

    // data will be one of these two objects:

    // data = {
    //     ingredient: {
    //         itemName: 'Milk',
    //         amount: 1,
    //         unit: 'Cup',
    //     }
    // }

    // data = {
    //     listName: 'Walmart'
    // }

    const ingredientList = getIngredients();
    const measurementList = getMeasurements();
    const groceryObject = data || {};

    const [selectedItem, setSelectedItem] = useState(groceryObject?.ingredient?.itemName || null);
    const [selectedMeasurement, setSelectedMeasurement] = useState(groceryObject?.ingredient?.unit || null);
    const [selectedQuantity, setSelectedQuantity] = useState(groceryObject?.ingredient?.amount || null);
    const [listName, setListName] = useState(groceryObject?.listName || '');
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (type === 'item' && selectedItem && selectedMeasurement && selectedQuantity) {
            setDisabled(false);
        } else if (type !== 'item' && listName) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [selectedItem, selectedMeasurement, selectedQuantity, type, listName]);

    const handleCancelOptionPress = () => {
        console.log("Cancel option pressed");
        onToggleListModal();
    };

    const handleSaveOptionPress = () => {
        console.log("Save option pressed");
        if (type === 'item') {
            onSave({
                itemName: selectedItem,
                unit: selectedMeasurement,
                amount: selectedQuantity,
            });
        } else {
            onSave(listName);
        }
        onToggleListModal();
    };

    const handleItemSelect = (item) => {
        console.log("Item selected");
        setSelectedItem(item);
    };

    const handleMeasurementSelect = (measurement) => {
        console.log("Measurement selected");
        setSelectedMeasurement(measurement);
    };

    // flag
    const handleQuantitySelect = (quantity) => {
        console.log("Quantity selected");
        setSelectedQuantity(quantity);
    };

    const handleQuantityChange = (quantity) => {
        console.log("Quantity changed");
        setSelectedQuantity(quantity);
    };

    // flag
    const handleItemChange = (item) => {
        console.log("Item changed");
        setSelectedItem(item);
    };

    // flag
    const handleMeasurementChange = (measurement) => {
        console.log("Measurement changed");
        setSelectedMeasurement(measurement);
    };

    const handleListNameChange = (name) => {
        console.log("List name changed");
        setListName(name);
    };

    const styles = StyleSheet.create({
        modal: {
            position: "absolute",
            backgroundColor: Colors['creamyWhite'],
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            marginHorizontal: 0,
            marginVertical: 0,
            paddingHorizontal: 16,
            paddingVertical: 16,
            bottom: 0,
            width: "100%",
            gap: 32,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        optionRow: {
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            flexDirection: "row",
            borderColor: Colors['white'],
        },
        title: {
            fontSize: 22,
            fontWeight: "bold",
        },
        optionIcon: {
            width: 30,
            height: 30,
        },
        category: {
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "100%",
            gap: 16,
        },
        categoryTitle: {
            fontSize: 18,
            fontWeight: "bold",
            color: Colors['fontGray'],
        },
        row: {
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "100%",
            gap: 32,
        },
        bottom: {
            flex: 1,
            padding: 32,
            gap: 32,
        },
    });

    return (
        <Modal
            isVisible={showListModal}
            onBackdropPress={onToggleListModal}
            backdropOpacity={0.8}
            backdropTransitionOutTiming={0}
            style={styles.modal}
        >
            <TouchableWithoutFeedback onPress={handleCancelOptionPress}>
                <View style={styles.optionRow}>
                    <Text style={styles.title}>{type === 'edit' ? `Rename ${selectedItem} List` : type === 'add' ? 'Add New Grocery List' : 'Add New Grocery Item'}</Text>
                    <TouchableWithoutFeedback onPress={handleCancelOptionPress}>
                        <Icon name="close" size={32} color={Colors['primaryBlack']} />
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
            {type !== 'item' && (
                <View style={styles.category}>
                    <Text style={styles.categoryTitle}>List Name</Text>
                    <View style={styles.row}>
                        <ModalInput placeholder={'Name your list'} type='text' value={listName} onChange={handleListNameChange} />
                    </View>
                </View>
            )}
            {type === 'item' && (
                <View style={styles.category}>
                    <Text style={styles.categoryTitle}>Item Name</Text>
                    <View style={styles.row}>
                        <ModalSearch placeholder='Find the ingredient' data={ingredientList} onSelect={handleItemSelect} />
                    </View>
                </View>
            )}
            {type === 'item' && (
                <View style={styles.category}>
                    <Text style={styles.categoryTitle}>Amount</Text>
                    <View style={styles.row}>
                        <ModalInput placeholder='0' type='number' value={selectedQuantity} onChange={handleQuantityChange} />
                        <ModalDropdown placeholder={'Select a measurement'} data={measurementList} onSelect={handleMeasurementSelect} />
                    </View>
                </View>
            )}
            <View style={styles.bottom}>
                <CustomButton text={type === 'edit' ? 'Confirm Changes' : type === 'add' ? 'Add New List' : 'Add New Item'} backgroundColor={Colors.primaryGreen} disabled={disabled} onPress={handleSaveOptionPress} />
            </View>
        </Modal>
    );
};



