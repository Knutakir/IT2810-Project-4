import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import commonStyles from './commonStyles';

function ModifyResultContainer({children, type}) {
    const [hidden, setHidden] = useState(true);

    return (
        <View style={styles.outerView}>
            <TouchableOpacity style={styles.button} activeOpacity={1} onPress={() => setHidden(!hidden)}>
                <View style={styles.textView}>
                    <Text style={[styles.containerText, commonStyles.text]}>{`${type} results`}</Text>
                    <Ionicons
                        name={hidden ? ('md-arrow-dropup') : ('md-arrow-dropdown')}
                        size={24}
                        color="#d1a797"
                    />
                </View>
            </TouchableOpacity>
            {!hidden && (
                <View>
                    {children}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    outerView: {
        margin: 7,
        padding: 3,
    },
    button: {
        padding: 3,
    },
    textView: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    containerText: {
        textDecorationLine: 'underline',
        marginRight: 10,
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