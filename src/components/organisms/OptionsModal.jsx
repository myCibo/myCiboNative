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

export default function OptionsModal({
  showOptions,
  optionsType,
  onToggleModal,
  onToggleItemModal,
  title,
  // options = [
  //   { text: "option text", icon: "../../assets/images/list-icon.png" },
  // ],
  color,
}) {
  const styles = StyleSheet.create({
    modal: {
      position: "absolute",
      backgroundColor: Colors['creamyWhite'],
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      marginHorizontal: 0,
      marginVertical: 0,
      bottom: 100,
      width: "100%",
      // elevation: 0,
    },
    optionRow: {
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      flexDirection: "row",
      paddingLeft: 32,
      paddingRight: 32,
      paddingBottom: 20,
      paddingTop: 20,
      borderBottomWidth: 1,
      borderColor: Colors['white'],
    },
    optionLastRow: {
      borderBottomWidth: 0,
    },
    title: {
      fontSize: 22,
      fontWeight: "bold",
    },
    optionText: {
      fontSize: 18,
      // fontWeight: "600",
    },
    optionRemoveText: {
      color: Colors['primaryRed'],
    },
    optionIcon: {
      width: 24,
      height: 24,
    },
    optionRemoveIcon: {
      color: Colors['primaryRed'],
    },
  });

  // const [showItemModal, setShowItemModal] = useState(false);
  // const handleItemModal = () => {
  //   setItemModal(!itemModal);
  // };

  const handleEditOptionPress = () => {
    console.log("Edit option pressed");
    onToggleModal();
    onToggleItemModal();
  };

  const handleUploadOptionPress = () => {
    console.log("Upload option pressed");
    onToggleModal();
  };

  const handleDeleteOptionPress = () => {
    console.log("Delete option pressed");
    onToggleModal();
  };

  const handleCancelOptionPress = () => {
    console.log("Cancel option pressed");
    onToggleModal();
  };

  return (
    <Modal
      isVisible={showOptions}
      onBackdropPress={onToggleModal}
      backdropOpacity={0.8}
      backdropTransitionOutTiming={0}
      style={styles.modal}
    >
      <View>
        <TouchableWithoutFeedback onPress={handleCancelOptionPress}>
          <View style={styles.optionRow}>
            <Text style={styles.title}>{title}</Text>
            <TouchableWithoutFeedback onPress={handleCancelOptionPress}>
              <Icon name="close" size={32} color={Colors['primaryBlack']} />
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>

        {optionsType === "ingredient" && (
          <TouchableWithoutFeedback onPress={handleEditOptionPress}>
            <View style={styles.optionRow}>
              <Text style={styles.optionText}>edit</Text>
              <TouchableWithoutFeedback onPress={handleEditOptionPress}>
                <Icon name="edit" size={24} color={Colors['primaryBlack']} />
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        )}

        {optionsType === "list" && (
          <TouchableWithoutFeedback onPress={handleUploadOptionPress}>
            <View style={styles.optionRow}>
              <Text style={styles.optionText}>send a copy</Text>
              <TouchableWithoutFeedback onPress={handleUploadOptionPress}>
                <Icon name="upload" size={24} color={Colors['primaryBlack']} />
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        )}

        <TouchableWithoutFeedback onPress={handleDeleteOptionPress}>
          <View style={[styles.optionRow, styles.optionLastRow]}>
            <Text style={[styles.optionText, styles.optionRemoveText]}>remove</Text>
            <TouchableWithoutFeedback onPress={handleDeleteOptionPress}>
              <Icon name="trash-x" size={32} color={Colors['primaryRed']} />
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
}
