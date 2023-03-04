import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
// import { useCallback } from 'react';
// import * as SplashScreen from 'expo-splash-screen';

const CustomText = (props) => {

    const style = StyleSheet.create({
        font: {
            fontSize: props.fontSize,
            color: props.color,
        }
    });

    const [fontsLoaded] = useFonts({
        'Rubik-Black': require('assets/fonts/Rubik-Black.ttf'),
        'Rubik-Regular': require('assets/fonts/Rubik-Regular.ttf'),
        'Rubik-Light': require('assets/fonts/Rubik-Light.ttf'),
    });

    // const [fontsLoaded, setFontsLoaded] = React.useState(false);

    // React.useEffect(() => {
    //     async function loadFonts() {
    //         await Font.loadAsync({
    //             'Rubik-Black': require('assets/fonts/Rubik-Black.ttf'),
    //         });
    //         await Font.loadAsync({
    //             'Rubik-Regular': require('assets/fonts/Rubik-Regular.ttf'),
    //         });
    //         await Font.loadAsync({
    //             'Rubik-Light': require('assets/fonts/Rubik-Light.ttf'),
    //         });
    //         setFontsLoaded(true);
    //     }
    //     loadFonts();
    // }, []);

    //     const [fontsLoaded] = useFonts({
    //         'Rubik-Black': require('assets/fonts/Rubik-Black.ttf'),
    //       });

    //       const onLayoutRootView = React.useCallback(async () => {
    //         if (fontsLoaded) {
    //           await SplashScreen.hideAsync();
    //         }
    //       }, [fontsLoaded]);

    //       if (!fontsLoaded) {
    //         return null;
    //       }

    console.log(fontsLoaded);

    switch (props.weight) {
        case 'black':
            return fontsLoaded ? (
                <Text style={[style.font, { fontFamily: 'Rubik-Black' }]}>{props.children}</Text>
            ) : <Text style={[style.font, { fontWeight: 'bold' }]}>{props.children}</Text>;
        case 'regular':
            return fontsLoaded ? (
                <Text style={[style.font, { fontFamily: 'Rubik-Regular' }]}>{props.children}</Text>
            ) : <Text style={[style.font, { fontWeight: 'bold' }]}>{props.children}</Text>;
        case 'light':
            return fontsLoaded ? (
                <Text style={[style.font, { fontFamily: 'Rubik-Light' }]}>{props.children}</Text>
            ) : <Text style={[style.font, { fontWeight: '100' }]}>{props.children}</Text>;
    }
};

// SplashScreen.preventAutoHideAsync();


// const [fontsLoaded] = useFonts({
//     'Rubik-Black': require('assets/fonts/Rubik-Black.ttf'),
// });

// useCallback(async () => {
//     if (fontsLoaded) {
//         await SplashScreen.hideAsync();
//     }
// }, [fontsLoaded]);

// if (!fontsLoaded) {
//     return null;
// }

// console.log(fontsLoaded);

// return <Text style={[style.font, { fontFamily: 'Rubik-Black' }]}>{props.children}</Text>

// }


export default CustomText;