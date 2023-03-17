import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import OptionsModal from "../organisms/OptionsModal";
import ItemModal from "../organisms/ItemModal";
import Colors from "../../constants/styles";
import Icon from "../atoms/Icon";

const getExpirationColor = (expiration) => {
  if (expiration < 1) {
    return Colors['primaryBlack'];
  } else if (expiration < 2) {
    return Colors['primaryRed'];
  } else if (expiration < 5) {
    return Colors['primaryYellow'];
  } else {
    return Colors['primaryGreen'];
  }
};

export default function IngredientItem({
  data = {},
  onUpdate,
  onDelete,
}) {

  const ingredientData = data || {};

  const color = getExpirationColor(ingredientData.expiration);

  const [showOptions, setShowOptions] = useState(false);
  const [showItemModal, setShowItemModal] = useState(false);
  const handleToggleModal = () => {
    setShowOptions(!showOptions);
  };
  const handleToggleItemModal = () => {
    setShowItemModal(!showItemModal);
  };

  const handleUpdate = (data) => {
    onUpdate(data);
  };

  const handleDelete = (ingredientId) => {
    onDelete(ingredientId);
  };

  const styles = {
    container: {
      padding: 10,
      height: 50,
      width: "100%",
      backgroundColor: color,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      marginBottom: 10,
    },
    textContainer: {
      width: "90%",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
    },
    text: {
      fontSize: 16,
      color: Colors['white'],
    },
    expirationText: {
      fontSize: 12,
    }
  };

  return (
    <TouchableOpacity onPress={handleToggleModal}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{ingredientData.name}</Text>
          <Text style={[styles.text, styles.expirationText]}>
            Expires in {ingredientData.expiration} Days
          </Text>
        </View>
        <View>
          <Icon name="dots-vertical" size={26} color={Colors['white']} />
        </View>
        <OptionsModal
          onToggleModal={handleToggleModal}
          onToggleItemModal={handleToggleItemModal}
          showOptions={showOptions}
          optionsType="ingredient"
          data={ingredientData}
          onRemove={handleDelete}
        />
        <ItemModal
          onToggleItemModal={handleToggleItemModal}
          showItemModal={showItemModal}
          type="edit"
          expanded={true}
          data={ingredientData}
          onSave={handleUpdate}
        />
      </View>
    </TouchableOpacity>
  );
}
