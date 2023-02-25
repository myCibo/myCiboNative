import { TouchableWithoutFeedback, Text, Image, View } from 'react-native';
import localIconSources from './localIconSources';

export default function LabelledIcon({ icon, label, iconPos = 0 }) {
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
                <Image source={localIconSources[icon]}></Image>
                <Text>{label}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}