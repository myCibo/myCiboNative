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

  ingredientData.name = ingredientData.name.charAt(0).toUpperCase() + ingredientData.name.slice(1);

  const color = getExpirationColor(ingredientData.expiresInDays);

  const [showOptions, setShowOptions] = useState(false);
  const [showItemModal, setShowItemModal] = useState(false);
  const [modalKey, setModalKey] = useState(Date.now());

  const handleToggleModal = () => {
    setShowOptions(!showOptions);
  };
  const handleToggleItemModal = () => {
    setShowItemModal(!showItemModal);
    setModalKey(Date.now());
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
      backgroundColor: color,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      marginBottom: 10,
    },
    textContainer: {
      width: "100%",
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
      color: ingredientData.expiresInDays > 0 ? Colors['white'] : Colors['primaryRed'],
    }
  };

  return (
    <TouchableOpacity onPress={handleToggleModal}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{ingredientData.name}</Text>
          <Text style={[styles.text, styles.expirationText]}>
            {ingredientData.expiresInDays > 0
              ? `Expires in ${ingredientData.expiresInDays} days`
              : `Expired for ${Math.abs(ingredientData.expiresInDays)} days`}
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
          key={modalKey}
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
