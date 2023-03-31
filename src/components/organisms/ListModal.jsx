import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import Modal from "react-native-modal";
import Icon from "../atoms/Icon";
import Colors from "../../constants/styles";
import CustomButton from "../atoms/CustomButton";
import ModalInput from "../molecules/ModalInput";
import ModalSearch from "../molecules/ModalSearch";
import ModalDropdown from "../molecules/ModalDropdown";
import { getIngredients, getUnits } from '../../constants/FoodData';

import IngredientHandler from "../../handlers/IngredientHandler";
import UnitHandler from "../../handlers/UnitHandler";
import CategoryHandler from "../../handlers/CategoryHandler";

const ingredientHandler = new IngredientHandler();
const unitHandler = new UnitHandler();
const categoryHandler = new CategoryHandler();

export default function ListModal({
    showListModal,
    type = 'item',  // type is either 'item' or 'list' or 'edit'
    onToggleListModal,
    data = {},
    onSave = () => { console.log('onSaveList default') },
}) {

    const ingredientList = getIngredients();
    const unitList = getUnits();
    const shoppingListObject = data || {};

    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedUnit, setSelectedUnit] = useState(null);
    const [selectedQuantity, setSelectedQuantity] = useState(null);
    const [listName, setListName] = useState(shoppingListObject?.listName || '');
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (type === 'item' && selectedItem && selectedUnit && selectedQuantity) {
            setDisabled(false);
        } else if (type !== 'item' && listName) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [selectedItem, selectedUnit, selectedQuantity, type, listName]);

    const resetState = () => {
        console.log("Resetting state")
        setSelectedItem(null);
        setSelectedUnit(null);
        setSelectedQuantity(null);
        setListName('');
    };

    const handleCloseModal = (event) => {
        if (!event || (event.target === event.currentTarget)) {
            console.log("Modal closed");
            resetState();
            onToggleListModal();
        }
    };

    const handleCancelOptionPress = () => {
        console.log("Cancel option pressed");
        resetState();
        onToggleListModal();

    };

    const handleSaveOptionPress = () => {
        console.log("Save option pressed");
        let newItem = {};
        if (type === 'item') {
            newItem = {
                id: Date.now(),
                itemName: selectedItem.name,
                unit: selectedUnit,
                amount: selectedQuantity,
            }
            console.log('onSaveItem', newItem)
            onSave(newItem);
        } else {
            onSave(listName);
        }
        resetState();
        setDisabled(true);
        onToggleListModal();
    };

    const handleItemSelect = (item) => {
        console.log("Item selected", item);
        setSelectedItem(item);
        setSelectedUnit(item.unit);
    };

    const handleUnitSelect = (unit) => {
        console.log("Unit selected", unit);
        setSelectedUnit(unit);
    };

    const handleQuantityChange = (quantity) => {
        console.log("Quantity changed", quantity);
        setSelectedQuantity(quantity);
    };

    const handleListNameChange = (name) => {
        console.log("List name changed", name);
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
            bottom: 0,
            paddingHorizontal: 16,
            paddingVertical: 16,
            width: "100%",
        },
        viewModal: {
            flex: 1,
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
            onBackdropPress={handleCloseModal}
            onBackButtonPress={handleCloseModal}
            backdropOpacity={0.8}
            backdropTransitionOutTiming={0}
            style={styles.modal}
        >
            <View
                onStartShouldSetResponder={() => true}
                style={styles.viewModal}
            >
                <View style={styles.optionRow}>
                    <Text style={styles.title}>{type === 'edit' ? `Rename ${listName} List` : type === 'add' ? 'Add New Grocery List' : 'Add New Grocery Item'}</Text>
                    <TouchableOpacity onPress={handleCancelOptionPress}>
                        <View>
                            <Icon name="close" size={32} color={Colors['primaryBlack']} />
                        </View>
                    </TouchableOpacity >
                </View>
                {type !== 'item' && (
                    <View style={styles.category}>
                        <Text style={styles.categoryTitle}>List Name</Text>
                        <View style={styles.row}>
                            <ModalInput
                                placeholder={'Name your list'}
                                type='text'
                                selected={listName}
                                onChange={handleListNameChange}
                            />
                        </View>
                    </View>
                )}
                {type === 'item' && (
                    <View style={styles.category}>
                        <Text style={styles.categoryTitle}>Item Name</Text>
                        <View style={styles.row}>
                            <ModalSearch
                                placeholder='Find the ingredient'
                                data={ingredientList}
                                onChange={handleItemSelect}
                            />
                        </View>
                    </View>
                )}
                {type === 'item' && (
                    <View style={styles.category}>
                        <Text style={styles.categoryTitle}>Amount</Text>
                        <View style={styles.row}>
                            <ModalInput
                                placeholder='0'
                                type='number'
                                onChange={handleQuantityChange}
                            />
                            <ModalDropdown
                                placeholder={'Select a unit'}
                                data={unitList}
                                onChange={handleUnitSelect}
                                selected={selectedUnit}
                            />
                        </View>
                    </View>
                )}
                <View style={styles.bottom}>
                    <CustomButton
                        text={type === 'edit' ? 'Confirm Changes' : type === 'add' ? 'Add New List' : 'Add New Item'}
                        backgroundColor={Colors.primaryGreen}
                        disabled={disabled}
                        onPress={handleSaveOptionPress}
                    />
                </View>
            </View>
        </Modal>
    );
};
