import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { vw } from 'react-native-expo-viewport-units';
import commonStyles from './commonStyles';

function ModifyResultContainer({children, type}) {
    const [hidden, setHidden] = useState(true);

    return (
        <View style={styles.outerView}>
            <TouchableOpacity style={styles.button} activeOpacity={1} onPress={() => setHidden(!hidden)}>
                <View style={styles.textView}>
                    <Text style={[styles.containerText, commonStyles.text]}>{`${type} results`}</Text>
                    <Ionicons
                        name={hidden ? ('md-arrow-dropdown') : ('md-arrow-dropup')}
                        size={24}
                        color="#d1a797"
                    />
                </View>
            </TouchableOpacity>
            {!hidden && (
                <View style={styles.childrenView}>
                    {children}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    outerView: {
        width: vw(90),
        margin: 7,
        padding: 3,
    },
    button: {
        padding: 6,
    },
    textView: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    containerText: {
        textDecorationLine: 'underline',
        marginRight: 10,
    },
    childrenView: {
        flexDirection: 'row',
        backgroundColor: '#403632',
        borderRadius: 5,
        justifyContent: 'center',
    },
});

ModifyResultContainer.propTypes = {
    children: PropTypes.object,
    type: PropTypes.string,
};

ModifyResultContainer.defaultProps = {
    children: null,
    type: '',
};

export default ModifyResultContainer;