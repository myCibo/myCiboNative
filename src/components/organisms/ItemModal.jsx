import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState } from "react";
import Modal from "react-native-modal";
import Icon from "../atoms/Icon";
import Colors from "../../constants/styles";
import CustomButton from "../atoms/CustomButton";
import ModalSearch from "../molecules/ModalSearch";
import ModalInput from "../molecules/ModalInput";
import ModalDropdown from "../molecules/ModalDropdown";
import ModalDatePicker from "../molecules/ModalDatePicker";

export default function ItemModal({
  showItemModal,
  type,
  onToggleItemModal,
  title = 'Milk',
  expanded = false,
  data,
  color,
}) {

  const [disabled, setDisabled] = useState(true);
  const [showExpanded, setShowExpanded] = useState(expanded);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedMeasurement, setSelectedMeasurement] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(null);

  const handleToggleExpanded = () => {
    console.log("Toggling expanded");
    setShowExpanded(!showExpanded);
  };

  const handleCancelOptionPress = () => {
    console.log("Cancel option pressed");
    onToggleItemModal();
  };

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
    { id: 12, name: 'Count' },
  ]

  const categoryData = [
    { id: 1, name: 'Dairy' },
    { id: 2, name: 'Meat' },
    { id: 3, name: 'Vegetables' },
    { id: 4, name: 'Fruits' },
    { id: 5, name: 'Grains' },
    { id: 6, name: 'Spices' },
    { id: 7, name: 'Condiments' },
    { id: 8, name: 'Baking' },
    { id: 9, name: 'Misc' },
  ]

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
      gap: showExpanded ? 16 : 32,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    optionRow: {
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      flexDirection: "row",
    },
    title: {
      fontSize: 22,
      fontWeight: "bold",
    },
    optionIcon: {
      width: 24,
      height: 24,
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
      padding: showExpanded ? 16 : 32,
      gap: 32,
    },
  });


  return (
    <Modal
      isVisible={showItemModal}
      onBackdropPress={onToggleItemModal}
      backdropOpacity={0.8}
      backdropTransitionOutTiming={0}
      style={styles.modal}
    >

      <View style={styles.optionRow}>
        <Text style={styles.title}>{type === 'edit' ? `Edit ${title}` : 'Add New Item'}</Text>
        <TouchableOpacity onPress={handleCancelOptionPress}>
          <View>
            <Icon name="close" size={32} color={Colors['primaryBlack']} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Item Name</Text>
        <View style={styles.row}>
          <ModalSearch placeholder='Find Ingredient' data={ingredientData} />
        </View>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Amount</Text>
        <View style={styles.row}>
          <ModalInput placeholder='0' type='number' />
          <ModalDropdown placeholder={'Select Measurement'} data={measurementData} />
        </View>
      </View>
      {showExpanded === true && (
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>Food Type</Text>
          <View style={styles.row}>
            <ModalDropdown placeholder={'Select Category'} data={categoryData} />
          </View>
        </View>
      )}
      {showExpanded === true && (
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>Purchase Date</Text>
          <View style={styles.row}>
            <ModalDatePicker />
          </View>
        </View>
      )}
      {showExpanded === true && (
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>Expiration Date</Text>
          <View style={styles.row}>
            <ModalDatePicker />
          </View>
        </View>
      )}
      <View style={styles.bottom}>
        {showExpanded === false && (
          <CustomButton text='More Options' backgroundColor={Colors.primaryYellow} onPress={() => handleToggleExpanded()} />
        )}
        <CustomButton text={type === 'add' ? 'Add New Item' : 'Confirm Changes'} backgroundColor={Colors.primaryGreen} disabled={disabled} />
      </View>
    </Modal>
  );
}
