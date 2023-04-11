import { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from "react-native";
import Icon from "../atoms/Icon";
import Colors from "../../constants/styles";

export default function ShoppingListItem({
    item = {},
    onRemove,
}) {
    const [checked, setChecked] = useState(false);

    console.log('shoppinglist', item);

    const handleChecked = () => {
        setChecked(!checked);
    };

    const handleRemove = (itemId) => {
        onRemove(itemId);
    };

    const styles = StyleSheet.create({
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 48,
            borderBottomWidth: 1,
            borderBottomColor: Colors['primaryGray'],
            backgroundColor: checked ? Colors['lightGreen'] : null,
        },
        firstCell: {
            flex: 3,
            justifyContent: 'center',
            alignItems: 'flex-start',
            overflow: 'hidden',
        },
        secondCell: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
            overflow: 'hidden',
        },
        thirdCell: {
            flex: 2,
            justifyContent: 'center',
            alignItems: 'flex-start',
            overflow: 'hidden',
        },
        font: {
            fontSize: 14,
            color: Colors['fontGray'],
        },
        icon: {
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 16,
        },
    });

    return (
        <TouchableOpacity onPress={handleChecked} style={styles.row}>
            <View style={styles.icon}>
                <Icon name={checked ? "check-circle" : "circle"} size={20} color={checked ? Colors['primaryGreen'] : Colors['fontGray']} />
            </View>
            <View style={styles.firstCell}>
                <Text style={styles.font}>
                    {item.itemName}
                </Text>
            </View>
            <View style={styles.secondCell}>
                <Text style={styles.font}>
                    {item.amount}
                </Text>
            </View>
            <View style={styles.thirdCell}>
                <Text style={styles.font}>
                    {item.unit}
                </Text>
            </View>
            <TouchableOpacity onPress={() => handleRemove(item.id)} style={styles.icon}>
                <Icon name="trash" size={20} color={Colors['fontGray']} />
            </TouchableOpacity>
        </TouchableOpacity>
    );
}
