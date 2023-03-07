import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import OptionsModal from "../organisms/OptionsModal";
import Colors from "../../constants/styles";
import Icon from "../atoms/Icon";

export default function IngredientItem({
  ingredientName = "Milk",
  ingredientExpiration = 3,
}) {
  const [showOptions, setShowOptions] = useState(false);
  const handleToggleModal = () => {
    setShowOptions(!showOptions);
  };

  const color =
    ingredientExpiration < 1
      ? Colors['primaryBlack']
      : ingredientExpiration < 2
        ? Colors['primaryRed']
        : ingredientExpiration < 5
          ? Colors['primaryYellow']
          : Colors['primaryGreen'];
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
    <TouchableWithoutFeedback onPress={handleToggleModal}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{ingredientName}</Text>
          <Text style={[styles.text, styles.expirationText]}>
            Expires in {ingredientExpiration} Days
          </Text>
        </View>
        <View>
          <Icon name="dots-vertical" size={26} color={Colors['white']} />
        </View>
        <OptionsModal
          onToggleModal={handleToggleModal}
          showOptions={showOptions}
          optionsType="ingredient"
          title={ingredientName}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
