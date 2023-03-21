
import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "../atoms/Icon";
import Colors from "../../constants/styles";

// export default function ScanCard() {
    //data is and object that consist the title, quantity, categry. purchaseDate, ExpiaryDate

    export default function ScanCard({data, onEdit}) {

    //Fake Data 
    // const data = {
    //     id:"12345",
    //     title: "Apple",
    //     quantity: 2,
    //     unit: "Pcs",
    //     category: "Produce",
    //     purchaseDate: "23/02/2023",
    //     ExpiryDate: "23/03/2023",
    // }

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
            paddingLeft:10,
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
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.quantity}> - {data.quantity} {data.unit}</Text>
                </View>
                <Text style={styles.category}>{data.category}</Text>
                <Text style={styles.expiry}>Expires on: {data.ExpiryDate}</Text>
            </View>
            <View style={styles.rightContainer}>
                <TouchableOpacity
                    onPress={onEdit}>
                    <Icon name='edit' size={14} backgroundColor={'red'} color={'#525252'} />
                </TouchableOpacity>
            </View>
        </View>
    );
};