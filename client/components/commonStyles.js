import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
    text: {
        color: '#d1a797',
    },
    shadow: {
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
    },
});

export default commonStyles;