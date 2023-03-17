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
import ModalSearch from "../molecules/ModalSearch";
import ModalInput from "../molecules/ModalInput";
import ModalDropdown from "../molecules/ModalDropdown";
import ModalDatePicker from "../molecules/ModalDatePicker";
import { getIngredients, getMeasurements, getCategories } from '../../constants/FoodData';
import { calculateExpirationDate, calculateExpirationTime } from "../../utils/expirationCalculator";

export default function ItemModal({
  showItemModal,
  type = 'add', // type is either 'add' or 'edit'
  onToggleItemModal,
  expanded = false,
  data = {},
  onSave = () => { console.log('onSaveItem default') },
}) {

  const ingredientList = getIngredients();
  const measurementList = getMeasurements();
  const categoryList = getCategories();
  const ingredientObject = data || {};

  const [selectedItem, setSelectedItem] = useState(ingredientObject || null);
  const [selectedMeasurement, setSelectedMeasurement] = useState(ingredientObject?.measurement || null);
  const [selectedQuantity, setSelectedQuantity] = useState(ingredientObject?.amount || '');
  const [selectedCategory, setSelectedCategory] = useState(ingredientObject?.category || null);
  const [selectedPurchaseDate, setSelectedPurchaseDate] = useState(ingredientObject?.purchaseDate || null);
  const [selectedExpirationDate, setSelectedExpirationDate] = useState(ingredientObject?.expirationDate || null);

  const [disabled, setDisabled] = useState(true);
  const [showExpanded, setShowExpanded] = useState(expanded);

  useEffect(() => {
    if (showExpanded && selectedItem && selectedMeasurement && selectedQuantity && selectedCategory && selectedPurchaseDate && selectedExpirationDate) {
      setDisabled(false);
    } else if (!showExpanded && selectedItem && selectedMeasurement && selectedQuantity) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [selectedItem, selectedMeasurement, selectedQuantity, selectedCategory, selectedPurchaseDate, selectedExpirationDate]);

  const resetState = () => {
    console.log("Resetting state")
    // setSelectedItem(null);
    // setSelectedMeasurement(null);
    // setSelectedQuantity('');
    // setSelectedCategory(null);
    // setSelectedPurchaseDate(null);
    // setSelectedExpirationDate(null);
  };

  const handleToggleExpanded = () => {
    console.log("Toggling expanded");
    setShowExpanded(!showExpanded);
  };

  const handleCloseModal = (event) => {
    if (!event || (event.target === event.currentTarget)) {
      console.log("Modal closed");
      resetState();
      onToggleItemModal();
    }
  };

  const handleCancelOptionPress = () => {
    console.log("Cancel option pressed");
    resetState();
    onToggleItemModal();
  };

  const handlePurchaseDate = (date) => {
    console.log("Purchase date selected", date);
    setSelectedPurchaseDate(date);
  };

  const handleExpirationDate = (date) => {
    console.log("Expiration date selected", date);
    setSelectedExpirationDate(date);
  };

  const handleItemSelect = (item) => {
    console.log("Item selected", item);
    setSelectedItem(item);
    setSelectedMeasurement(item.measurement);
    setSelectedCategory(item.category);

    const purchaseDate = selectedPurchaseDate || new Date();
    setSelectedPurchaseDate(purchaseDate);
    setSelectedExpirationDate(calculateExpirationDate(purchaseDate, item.expirationTime));
  };

  const handleMeasurementSelect = (measurement) => {
    console.log("Measurement selected", measurement);
    setSelectedMeasurement(measurement);
  };

  const handleQuantityChange = (quantity) => {
    console.log("Quantity changed", quantity);
    setSelectedQuantity(quantity);
  };

  const handleCategorySelect = (category) => {
    console.log("Category selected", category);
    setSelectedCategory(category);
  };

  const handleSaveItem = () => {
    console.log("Save item pressed");
    let ingredient = {};
    if (expanded === true) {
      ingredient = {
        id: ingredientObject.id || Date.now(),
        name: selectedItem.name,
        measurement: selectedMeasurement,
        amount: selectedQuantity,
        category: selectedCategory,
        purchaseDate: selectedPurchaseDate,
        expirationDate: selectedExpirationDate,
        expiration: calculateExpirationTime(selectedPurchaseDate, selectedExpirationDate),
      };
    } else {
      ingredient = {
        id: ingredientObject.id || Date.now(),
        name: selectedItem.name,
        measurement: selectedMeasurement,
        amount: selectedQuantity,
        category: selectedItem.category,
        purchaseDate: new Date(),
        expirationDate: calculateExpirationDate(new Date(), selectedItem.expirationTime),
        expiration: calculateExpirationTime(selectedPurchaseDate, selectedExpirationDate),
      };
    }
      onSave(ingredient);
      resetState();
      onToggleItemModal();
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
      },
      viewModal: {
        flex: 1,
        width: "100%",
        gap: showExpanded ? 16 : 32,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
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
            <Text style={styles.title}>{type === 'edit' ? `Edit ${ingredientObject?.name}` : 'Add New Item'}</Text>
            <TouchableOpacity onPress={handleCancelOptionPress}>
              <View>
                <Icon name="close" size={32} color={Colors['primaryBlack']} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.category}>
            <Text style={styles.categoryTitle}>Item Name</Text>
            <View style={styles.row}>
              <ModalSearch
                placeholder={'Find Ingredient'}
                data={ingredientList}
                onChange={handleItemSelect}
                selected={selectedItem}
              />
            </View>
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryTitle}>Amount</Text>
            <View style={styles.row}>
              <ModalInput
                placeholder={'0'}
                type='number'
                onChange={handleQuantityChange}
                selected={selectedQuantity}
              />
              <ModalDropdown
                placeholder={'Select Measurement'}
                data={measurementList}
                onChange={handleMeasurementSelect}
                selected={selectedMeasurement}
              />
            </View>
          </View>
          {showExpanded === true && (
            <View style={styles.category}>
              <Text style={styles.categoryTitle}>Food Type</Text>
              <View style={styles.row}>
                <ModalDropdown
                  placeholder={'Select Category'}
                  data={categoryList}
                  onChange={handleCategorySelect}
                  selected={selectedCategory}
                />
              </View>
            </View>
          )}
          {showExpanded === true && (
            <View style={styles.category}>
              <Text style={styles.categoryTitle}>Purchase Date</Text>
              <View style={styles.row}>
                <ModalDatePicker
                  onDateChange={handlePurchaseDate}
                  selected={selectedPurchaseDate}
                />
              </View>
            </View>
          )}
          {showExpanded === true && (
            <View style={styles.category}>
              <Text style={styles.categoryTitle}>Expiration Date</Text>
              <View style={styles.row}>
                <ModalDatePicker
                  onDateChange={handleExpirationDate}
                  selected={selectedExpirationDate}
                />
              </View>
            </View>
          )}
          <View style={styles.bottom}>
            {showExpanded === false && (
              <CustomButton
                text='More Options'
                backgroundColor={Colors.primaryYellow}
                onPress={handleToggleExpanded}
              />
            )}
            <CustomButton
              text={type === 'add' ? 'Add New Item' : 'Confirm Changes'}
              backgroundColor={Colors.primaryGreen}
              disabled={disabled}
              onPress={handleSaveItem}
            />
          </View>
        </View>
      </Modal>
    );
  }
