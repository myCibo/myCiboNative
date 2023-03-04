import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import Modal from "react-native-modal";

export default function OptionsModal({
  showOptions,
  onToggleModal,
  title,
  options = [
    { text: "option text", icon: "../../assets/images/list-icon.png" },
  ],
  color,
}) {
  const styles = StyleSheet.create({
    optionRow: {
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      flexDirection: "row",
      paddingLeft: 20,
      paddingRight: 10,
      justifyContent: "space-between", // Add this
    },
    optionText: {
      fontSize: 18,
      fontWeight: "600",
      padding: 16,
    },
    optionIcon: {
      width: 24,
      height: 24,
      marginRight: 16,
    },
    modal: {
      position: "absolute",
      backgroundColor: "#E9E6E3",
      overflow: "hidden",
      marginHorizontal: 0,
      bottom: "10%",
      width: "100%",
      paddingBottom: 16,
      paddingTop: 16,
    },
    modalBackdrop: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    title: {
      fontSize: 22,
      fontWeight: "bold",
      paddingTop: 16,
    },
    optionCancelIcon: {
      width: 24,
      height: 24,
      marginRight: 16,
    },
  });

  const handleEditOptionPress = () => {
    console.log("Edit option pressed");
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
      backdropOpacity={0.5}
      backdropTransitionOutTiming={0}
      style={styles.modal}
    >
      <View>
        <TouchableWithoutFeedback onPress={handleDeleteOptionPress}>
          <View style={styles.optionRow}>
<<<<<<< HEAD
            <Text style={{ color: 'white' }}>What</Text>
            <Image source={require('assets/images/list-icon.png')}></Image>
=======
            <Text style={styles.title}>{title}</Text>
            <TouchableWithoutFeedback onPress={handleDeleteOptionPress}>
              <Image
                source={require("../../assets/images/remove-icon.png")}
                style={styles.optionCancelIcon}
              />
            </TouchableWithoutFeedback>
>>>>>>> da05bb9ded053b9134c7acac7b36068c40486a22
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={handleEditOptionPress}>
          <View style={styles.optionRow}>
            <Text style={styles.optionText}>Edit</Text>
            <TouchableWithoutFeedback onPress={handleEditOptionPress}>
              <Image
                source={require("../../assets/images/edit-icon.png")}
                style={styles.optionIcon}
              />
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={handleDeleteOptionPress}>
          <View style={styles.optionRow}>
            <Text style={styles.optionText}>Remove</Text>
            <TouchableWithoutFeedback onPress={handleDeleteOptionPress}>
              <Image
                source={require("../../assets/images/remove-icon.png")}
                style={styles.optionIcon}
              />
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
}
