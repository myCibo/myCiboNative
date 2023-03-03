import { StyleSheet, Text, View, TouchableWithoutFeedback, Image } from 'react-native';
import Modal from "react-native-modal";

export default function OptionsModal({ showOptions, onToggleModal, options = [{ text: 'option text', icon: '../../assets/images/list-icon.png' }], color }) {
  const styles = {
    optionRow: {
      alignItems: 'center',
      justifyContent: 'space-around',
      width: '100%',
      flexDirection: 'row',
    },
    modal: {
      position: 'absolute',
      // bottom: 0,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
      // width: '100%',
    }
  };
  return (
    <Modal
      isVisible={showOptions}
      onBackdropPress={() => {
        onToggleModal();
      }}>
      <View style={styles.modal}>
        {options.map(option => (<TouchableWithoutFeedback key={option.text} onPress={() => alert('You clicked on an option!')}>
          <View style={styles.optionRow}>
            <Text style={{ color: 'white' }}>What</Text>
            <Image source={require('../../assets/images/list-icon.png')}></Image>
          </View>
        </TouchableWithoutFeedback>))}
      </View>
    </Modal>
  );
}
