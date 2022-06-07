import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import { FONT, Colors} from '../Constants';
const Button = ({title, onPress = () => {}}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={{
                height: 55,
                width: '100%',
                backgroundColor: Colors.GREEN_BACKGROUND,
                marginVertical: 20,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius:25
            }}>
            <Text style={{color: Colors.WHITE, fontFamily:FONT.BOLD, fontSize: 18}}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;
