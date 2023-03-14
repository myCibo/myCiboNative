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
import { getIngredients, getMeasurements } from '../../constants/data';

export default function ListModal({
    showListModal,
    type = 'list',
    onToggleListModal,
    title = 'Milk',
    data,
    onSaveGroceryObject,
}) {

    // groceryObject = {
    //     listName: 'Walmart',
    //     ingredientData: {
    //         itemName: 'Milk',
    //         measurement: 'Cup',
    //         quantity: 1,
    //     }
    // }

    const ingredientList = getIngredients();
    const measurementList = getMeasurements();
    const groceryObject = data?.groceryObject || {};

    const [selectedItem, setSelectedItem] = useState(groceryObject?.ingredientData?.itemName || null);
    const [selectedMeasurement, setSelectedMeasurement] = useState(groceryObject?.ingredientData?.measurement || null);
    const [selectedQuantity, setSelectedQuantity] = useState(groceryObject?.ingredientData?.quantity || null);
    const [listName, setListName] = useState(groceryObject?.listName || '');
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (type === 'list' && selectedItem && selectedMeasurement && selectedQuantity && listName) {
            setDisabled(false);
        } else if (type !== 'list' && selectedQuantity && listName) {
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
        const newGroceryObject = {
            listName: listName,
            ingredientData: {
                itemName: selectedItem,
                measurement: selectedMeasurement,
                quantity: selectedQuantity,
            }
        };
        onSaveGroceryObject(newGroceryObject);
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

    const handleQuantitySelect = (quantity) => {
        console.log("Quantity selected");
        setSelectedQuantity(quantity);
    };

    const handleQuantityChange = (quantity) => {
        console.log("Quantity changed");
        setSelectedQuantity(quantity);
    };

    const handleItemChange = (item) => {
        console.log("Item changed");
        setSelectedItem(item);
    };

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
                    <Text style={styles.title}>{type === 'edit' ? `Rename ${title} List` : type === 'add' ? 'Add New Grocery List' : 'Add New Grocery Item'}</Text>
                    <TouchableWithoutFeedback onPress={handleCancelOptionPress}>
                        <Icon name="close" size={32} color={Colors['primaryBlack']} />
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
            {type !== 'list' && (
                <View style={styles.category}>
                    <Text style={styles.categoryTitle}>List Name</Text>
                    <View style={styles.row}>
                        <ModalInput placeholder={'Name your list'} type='text' value={listName} onChange={handleListNameChange} />
                    </View>
                </View>
            )}
            {type === 'list' && (
                <View style={styles.category}>
                    <Text style={styles.categoryTitle}>Item Name</Text>
                    <View style={styles.row}>
                        <ModalSearch placeholder='Find the ingredient' data={ingredientList} onSelect={handleItemSelect} />
                    </View>
                </View>
            )}
            {type === 'list' && (
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



