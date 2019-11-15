import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import commonStyles from './commonStyles';
import { vw } from 'react-native-expo-viewport-units';

export default function ListItem({
    name,
    country,
    height,
    rating,
    clickItem,
}) {
    return (
        <TouchableOpacity style={[styles.listItem, commonStyles.shadow]} activeOpacity={0.7} onPress={() => clickItem()}>
            <View style={styles.itemColumns}>
                <View style={styles.nameColumn}>
                    <Text style={styles.nameText}>{name}</Text>
                    <Text style={styles.countryText}>{country}</Text>
                </View>
                <View>
                    <View style={styles.rating}>
                        <Ionicons name="md-star" size={25} color="#403632" style={styles.star} />
                        <Text style={styles.rightText}>
                            {parseFloat(rating).toFixed(1)}
                        </Text>
                    </View>
                    <Text style={styles.rightText}>{height} m</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#f0d5c9',
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 5,
    },
    itemColumns: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: 10,
        paddingRight: 20,
        paddingLeft: 20,
    },
    rightText: {
        textAlign: 'right',
        fontSize: 20,
        color: '#403632',
    },
    nameText: {
        fontSize: 25,
        color: '#403632',
    },
    countryText: {
        fontSize: 18,
        color: '#403632',
    },
    rating: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    star: {
        marginRight: 4,
    },
    nameColumn: {
        maxWidth: vw(55),
    },
});

ListItem.propTypes = {
    name: PropTypes.string,
    country: PropTypes.string,
    height: PropTypes.number,
    rating: PropTypes.number,
    clickItem: PropTypes.func.isRequired,
};

ListItem.defaultProps = {
    name: '',
    country: '',
    height: 0,
    rating: 0,
};