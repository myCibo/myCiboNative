import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "../atoms/Icon";
import Colors from "../../constants/styles";
import OptionsModal from "../organisms/OptionsModal";
import ItemModal from "../organisms/ItemModal";
import { formatDate } from "../../utils/expirationCalculator";

// export default function ScanCard() {
//data is and object that consist the title, quantity, categry. purchaseDate, ExpiaryDate

export default function ScanCard({
    data = {},
    onUpdate,
    onDelete
}) {

    //Fake Data 
    // const data = {
    //     id: "12345",
    //     name: "Apple",
    //     amount: 2,
    //     measurement: "Pcs",
    //     category: "Produce",
    //     purchaseDate: "2023-03-17",
    //     expirationDate: "2023-03-17",
    //     expiration: 14,
    // }

    const [ingredientData, setIngredientData] = useState(data);
    const [showOptions, setShowOptions] = useState(false);
    const [showItemModal, setShowItemModal] = useState(false);
    const [date, setDate] = useState(formatDate(ingredientData.expirationDate));
    const [modalKey, setModalKey] = useState(Date.now());

    useEffect(() => {
        setIngredientData(data);
        setDate(formatDate(data.expirationDate));
    }, [data]);

    const handleToggleModal = () => {
        setShowOptions(!showOptions);
    };

    const handleToggleItemModal = () => {
        setShowItemModal(!showItemModal);
        setModalKey(Date.now());
    };

    const handleUpdate = (item) => {
        onUpdate(item);
    };

    const handleDelete = (ingredientId) => {
        onDelete(ingredientId);
    };

    const styles = StyleSheet.create({
        card: {
            width: 348,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 4,
            padding: 15,
            margin: 4,
            shadowColor: '#363636',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.4,
            shadowRadius: 2,
            elevation: 5,
        },
        leftContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        rightContainer: {
            width: 40,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderLeftWidth: 1,
            borderColor: '#ccc',
            paddingLeft: 10,
            // backgroundColor:'red', 

        },
        heading: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 12,

        },
        title: {
            fontSize: 18,
            color: '#0D302F',
            fontWeight: '500',

        },
        quantity: {
            color: '#4A4948',

        },
        category: {
            fontSize: 12,
            fontWeight: 'bold',
            color: '#6B987A',
        },
        expiry: {
            fontSize: 12,
            color: '#7E7D7D',
            fontWeight: '600',
        },
    });

    return (
        <View style={styles.card}>
            <View style={styles.leftContainer}>
                <View style={styles.heading}>
                    <Text style={styles.title}>{data.name}</Text>
                    <Text style={styles.quantity}> - {data.amount} {data.measurement}</Text>
                </View>
                <Text style={styles.category}>{data.category}</Text>
                <Text style={styles.expiry}>Expires: {date}</Text>
            </View>
            <View style={styles.rightContainer}>
                <TouchableOpacity
                    onPress={handleToggleModal}>
                    <Icon name='dots-vertical' size={32} color={Colors['primaryBlack']} />
                </TouchableOpacity>
            </View>
            <OptionsModal
                onToggleModal={handleToggleModal}
                onToggleItemModal={handleToggleItemModal}
                showOptions={showOptions}
                optionsType="scanner"
                data={ingredientData}
                onRemove={handleDelete}
            />
            <ItemModal
                key={modalKey}
                onToggleItemModal={handleToggleItemModal}
                showItemModal={showItemModal}
                type="edit"
                expanded={true}
                data={ingredientData}
                onSave={handleUpdate}
            />
        </View>
    );
};