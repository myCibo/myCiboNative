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
import { calculateExpirationDate, calculateExpiresInDays } from "../../utils/expirationCalculator";

import IngredientHandler from "../../handlers/IngredientHandler";
import UnitHandler from "../../handlers/UnitHandler";
import CategoryHandler from "../../handlers/CategoryHandler";

const ingredientHandler = new IngredientHandler();
const unitHandler = new UnitHandler();
const categoryHandler = new CategoryHandler();

export default function ItemModal({
  showItemModal,
  type = 'add', // type is either 'add' or 'edit'
  onToggleItemModal,
  expanded = false,
  data = {},
  onSave = () => { console.log('onSaveItem default') },
}) {

  const [ingredientList, setIngredientList] = useState([]);
  const [unitList, setUnitList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    ingredientHandler.getAllIngredients(data => setIngredientList(data));
    unitHandler.getAllUnits(data => setUnitList(data));
    categoryHandler.getAllCategories(data => setCategoryList(data));
  }, []);

  const [modalData, setModalData] = useState(data);
  const [selectedItem, setSelectedItem] = useState(modalData || null);
  const [selectedIngredientId, setSelectedIngredientId] = useState(modalData?.ingredientId || null);
  const [selectedName, setSelectedName] = useState(modalData?.name || null);
  const [selectedUnit, setSelectedUnit] = useState(modalData?.unit || null);
  const [selectedUnitId, setSelectedUnitId] = useState(modalData?.unitId || null);
  const [selectedQuantity, setSelectedQuantity] = useState(modalData?.amount || '');
  const [selectedCategory, setSelectedCategory] = useState(modalData?.category || null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(modalData?.categoryId || null);
  const [selectedPurchaseDate, setSelectedPurchaseDate] = useState(modalData?.purchaseDate || null);
  const [selectedExpirationDate, setSelectedExpirationDate] = useState(modalData?.expirationDate || null);

  const [disabled, setDisabled] = useState(true);
  const [showExpanded, setShowExpanded] = useState(expanded);

  useEffect(() => {
    if (showExpanded && selectedItem && selectedIngredientId && selectedUnit && selectedUnitId && selectedQuantity && selectedCategory && selectedCategoryId && selectedPurchaseDate && selectedExpirationDate) {
      setDisabled(false);
    } else if (!showExpanded && selectedItem && selectedIngredientId && selectedUnit && selectedUnitId && selectedQuantity) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [selectedItem, selectedIngredientId, selectedUnit, selectedUnitId, selectedQuantity, selectedCategory, selectedCategoryId, selectedPurchaseDate, selectedExpirationDate]);

  useEffect(() => {
    function updateStateFromData() {
      setModalData(data);
      if (data?.ingredientId) {
        const selectedIngredient = ingredientList.find(
          (ingredient) => ingredient.id === data.ingredientId
        );
        setSelectedItem(selectedIngredient || null);
      } else {
        setSelectedItem(null);
      }
      setSelectedIngredientId(data?.ingredientId || null);
      setSelectedName(data?.name || null);
      setSelectedUnit(data?.unit || null);
      setSelectedUnitId(data?.unitId || null);
      setSelectedQuantity(data?.amount || "");
      setSelectedCategory(data?.category || null);
      setSelectedCategoryId(data?.categoryId || null);
      setSelectedPurchaseDate(data?.purchaseDate || null);
      setSelectedExpirationDate(data?.expirationDate || null);
    }

    updateStateFromData();
  }, [data, ingredientList]);

  const resetState = () => {
    console.log("Resetting state")
    setSelectedItem(null);
    setSelectedIngredientId(null);
    setSelectedName(null);
    setSelectedUnit(null);
    setSelectedUnitId(null);
    setSelectedQuantity('');
    setSelectedCategory(null);
    setSelectedCategoryId(null);
    setSelectedPurchaseDate(null);
    setSelectedExpirationDate(null);
  };

  const handleToggleExpanded = () => {
    console.log("Toggling expanded");
    setShowExpanded(!showExpanded);
  };

  const handleCloseModal = (event) => {
    if (!event || (event.target === event.currentTarget)) {
      console.log("Modal closed");
      resetState();
      setShowExpanded(false);
      onToggleItemModal();
    }
  };

  const handleCancelOptionPress = () => {
    console.log("Cancel option pressed");
    resetState();
    setShowExpanded(false);
    onToggleItemModal();
  };

  const handlePurchaseDate = (date) => {
    console.log("Purchase date selected", date);
    setSelectedPurchaseDate(date.toISOString().split('T')[0]);
  };

  const handleExpirationDate = (date) => {
    console.log("Expiration date selected", date);
    setSelectedExpirationDate(date.toISOString().split('T')[0]);
  };

  const handleItemSelect = (item) => {
    console.log("Item selected", item);
    if (item === null) {
      setSelectedItem(null);
      setSelectedIngredientId(null);
      return;
    }
    setSelectedItem(item);
    setSelectedIngredientId(item.id);
    setSelectedUnit(item.unit.name);
    setSelectedUnitId(item.unitId);
    setSelectedCategory(item.category.name);
    setSelectedCategoryId(item.categoryId);

    const purchaseDate = selectedPurchaseDate || new Date();
    setSelectedPurchaseDate(purchaseDate);
    setSelectedExpirationDate(calculateExpirationDate(purchaseDate, item.expirationTime));
  };

  const handleUnitSelect = (unit) => {
    console.log("Unit selected", unit);
    setSelectedUnit(unit.name);
    setSelectedUnitId(unit.id);
  };

  const handleQuantityChange = (quantity) => {
    console.log("Quantity changed", quantity);
    setSelectedQuantity(quantity);
  };

  const handleCategorySelect = (category) => {
    console.log("Category selected", category);
    setSelectedCategory(category.name);
    setSelectedCategoryId(category.id);
  };

  const handleSaveItem = () => {
    console.log("Save item pressed");
    let ingredient = {};
    if (expanded === true) {
      ingredient = {
        id: modalData.id || null,
        name: selectedItem.name,
        ingredientId: selectedItem.id,
        unit: selectedUnit,
        unitId: selectedUnitId,
        amount: selectedQuantity,
        category: selectedCategory,
        categoryId: selectedCategoryId,
        purchaseDate: selectedPurchaseDate,
        expirationDate: selectedExpirationDate,
        expirationTime: selectedItem.expirationTime,
        expiresInDays: calculateExpiresInDays(selectedExpirationDate),
      };
    } else {
      ingredient = {
        id: modalData.id || null,
        name: selectedItem.name,
        ingredientId: selectedItem.id,
        unit: selectedUnit,
        unitId: selectedUnitId,
        amount: selectedQuantity,
        category: selectedItem.category.name,
        categoryId: selectedItem.categoryId,
        purchaseDate: new Date().toISOString().split('T')[0],
        expirationDate: calculateExpirationDate(new Date(), selectedItem.expirationTime),
        expirationTime: selectedItem.expirationTime,
        expiresInDays: calculateExpiresInDays(calculateExpirationDate(new Date(), selectedItem.expirationTime)),
      };
    }
    onSave(ingredient);
    resetState();
    setDisabled(true);
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
          <Text style={styles.title}>{type === 'edit' ? `Edit ${selectedName}` : 'Add New Item'}</Text>
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
              placeholder={'Select Unit'}
              data={unitList}
              onChange={handleUnitSelect}
              selected={selectedUnit}
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
