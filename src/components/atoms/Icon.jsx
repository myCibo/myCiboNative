import React from 'react';
import { View } from 'react-native';
import SVGHome from 'assets/icons/home.svg';

const Icon = ({ name, size, color }) => {
    // const iconFilePath = `assets/icons/${name}.svg`;

    return (
        <View style={{ width: size, height: size }}>
            <SVGHome width={100} height={100} />
        </View>
    );
};

export default Icon;