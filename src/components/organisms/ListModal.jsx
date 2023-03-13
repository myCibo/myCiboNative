import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Image,
} from "react-native";
import { useState } from "react";
import Modal from "react-native-modal";
import Icon from "../atoms/Icon";
import Colors from "../../constants/styles";
import CustomButton from "../atoms/CustomButton";
import ModalInput from "../molecules/ModalInput";
import ModalSearch from "../molecules/ModalSearch";
import ModalDropdown from "../molecules/ModalDropdown";

export default function ListModal({
    showListModal,
    type = 'list',
    onToggleListModal,
    title = 'Milk',
    placeholder = 'Enter a list name',
    data,
    color,
}) {

    const ingredientData = [
        { id: 1, name: 'Apples' },
        { id: 2, name: 'Milk' },
        { id: 3, name: 'Grapes' },
        { id: 4, name: 'Rice' },
        { id: 5, name: 'Cereal' },
        { id: 6, name: 'Bread' },
        { id: 7, name: 'Eggs' },
        { id: 8, name: 'Chicken' },
        { id: 9, name: 'Beef' },
        { id: 10, name: 'Pork' },
        { id: 11, name: 'Fish' },
        { id: 12, name: 'Cheese' },
        { id: 13, name: 'Butter' },
        { id: 14, name: 'Sour Cream' },
        { id: 15, name: 'Salsa' },
    ];

    const measurementData = [
        { id: 1, name: 'Cup' },
        { id: 2, name: 'Tbsp' },
        { id: 3, name: 'Tsp' },
        { id: 4, name: 'Oz' },
        { id: 5, name: 'Grams' },
        { id: 6, name: 'Pound' },
        { id: 7, name: 'Liter' },
        { id: 8, name: 'Milliliter' },
        { id: 9, name: 'Pinch' },
        { id: 10, name: 'Dash' },
        { id: 11, name: 'Scoop' },
    ]

    const [disabled, setDisabled] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedMeasurement, setSelectedMeasurement] = useState(null);
    const [selectedQuantity, setSelectedQuantity] = useState(null);


    const handleCancelOptionPress = () => {
        console.log("Cancel option pressed");
        onToggleListModal();
    };

    const handleSaveOptionPress = () => {
        console.log("Save option pressed");
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
                    <ModalInput placeholder={placeholder} type='text' />
                </View>
            </View>
            )}
            {type === 'list' && (
                <View style={styles.category}>
                    <Text style={styles.categoryTitle}>Item Name</Text>
                    <View style={styles.row}>
                        <ModalSearch placeholder='Find Ingredient' data={ingredientData} />
                    </View>
                </View>
            )}
            {type === 'list' && (
                <View style={styles.category}>
                    <Text style={styles.categoryTitle}>Amount</Text>
                    <View style={styles.row}>
                        <ModalInput placeholder='0' type='number' />
                        <ModalDropdown placeholder={'Select Measurement'} data={measurementData} />
                    </View>
                </View>
            )}
            <View style={styles.bottom}>
                <CustomButton text={type === 'edit' ? 'Confirm Changes' : type === 'add' ? 'Add New List' : 'Add New Item'} backgroundColor={Colors.primaryGreen} disabled={type === 'edit' ? false : disabled} />
            </View>
        </Modal>
    );
}