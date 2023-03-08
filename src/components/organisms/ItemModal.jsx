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
  
  export default function ItemModal({
    showItemModal,
    itemType,
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
      },
      title: {
        fontSize: 22,
        fontWeight: "bold",
      },
      optionIcon: {
        width: 24,
        height: 24,
      },
    });

    const [showExpanded, setShowExpanded] = useState(false);
  
    const handleCancelOptionPress = () => {
      console.log("Cancel option pressed");
      onToggleItemModal();
    };
  
    return (
      <Modal
        isVisible={showItemModal}
        onBackdropPress={onToggleItemModal}
        backdropOpacity={0.8}
        backdropTransitionOutTiming={0}
        style={styles.modal}
      >
        <View>
        {itemType === "edit" && (
          <TouchableWithoutFeedback onPress={handleCancelOptionPress}>
            <View style={styles.optionRow}>
              <Text style={styles.title}>Edit {title}</Text>
              <TouchableWithoutFeedback onPress={handleCancelOptionPress}>
                <Icon name="close" size={32} color={Colors['primaryBlack']} />
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
          
        )}
        </View>
      </Modal>
    );
  }
  