import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import commonStyles from './commonStyles';

function CustomButton({onPress, text}) {
    const onButtonPres = () => {
        if (onPress) {
            onPress();
        }
    };

    return (
        <TouchableOpacity
            style={[styles.button, commonStyles.shadow]}
            onPress={() => onButtonPres()}
        >
            <Text>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#f0d5c9',
        borderRadius: 5,
        color: 'rgb(64, 54, 50)',
        padding: 10,
    },
});

CustomButton.propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
};
CustomButton.defaultProps = {
    onPress: null,
    text: '',
};

export default CustomButton;