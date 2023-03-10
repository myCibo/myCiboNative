import { TouchableWithoutFeedback, Text, Image, View } from 'react-native';
import Icon from '../atoms/Icon';
import Colors from '../../constants/styles';
// import localIconSources from './localIconSources';

export default function LabelledIcon({ icon, label, iconPos = 0, iconName = 'add' }) {
    const styles = {
        container: {
            flexDirection: iconPos ? 'row-reverse' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        }
    };

    return (
        <TouchableWithoutFeedback onPress={() => alert('You clicked on a labelled icon!')}>
            <View style={styles.container}>
                <Icon name={iconName} size={16} color={Colors['primaryBlack']} />
                <Text>{label}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}