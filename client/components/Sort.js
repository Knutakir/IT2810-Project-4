import React, { useState } from 'react';
import {
    View,
    Text,
    Picker,
    StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Sort() {
    const [sortingType, setSortingType] = useState('name');
    const [sortingOrder, setSortingOrder] = useState(-1);

    return (
        <View style={styles.view}>
            <Text style={styles.text}>Sort by</Text>
            <View style={[styles.pickerView, styles.shadow]}>
                <Picker
                    selectedValue={sortingType}
                    style={styles.picker}
                    onValueChange={itemValue => setSortingType(itemValue)}
                >
                    <Picker.Item label="Mountain" value="name" color="rgb(64, 54, 50)" />
                    <Picker.Item label="Height" value="height" color="rgb(64, 54, 50)" />
                    <Picker.Item label="Country" value="country" color="rgb(64, 54, 50)" />
                    <Picker.Item label="Rating" value="rating" color="rgb(64, 54, 50)" />
                </Picker>
            </View>
            <Text style={styles.text}>in order</Text>
            <Ionicons
                style={[styles.sortingOrder, styles.shadow]}
                name={(sortingOrder === 1) ? ('md-arrow-round-up') : ('md-arrow-round-down')}
                size={28}
                color="#403632"
                onPress={() => setSortingOrder(-sortingOrder)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: '#d1a797',
    },
    pickerView: {
        backgroundColor: '#f0d5c9',
        borderRadius: 5,
        margin: 10,
    },
    picker: {
        height: 50,
        width: 150,
        color: 'rgb(64, 54, 50)',
    },
    sortingOrder: {
        fontSize: 25,
        padding: 10,
        paddingLeft: 13,
        paddingRight: 13,
        backgroundColor: '#f0d5c9',
        borderRadius: 5,
        color: 'rgb(64, 54, 50)',
        marginLeft: 10,
    },
    shadow: {
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
    },
});

export default Sort;