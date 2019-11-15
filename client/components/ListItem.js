import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

export default function ListItem({
    name,
    country,
    height,
    rating,
    clickItem,
}) {
    return (
        <TouchableOpacity style={styles.listItem} activeOpacity={0.7} onPress={() => clickItem()}>
            <View style={styles.itemColumns}>
                <View>
                    <Text style={styles.nameText}>{name}</Text>
                    <Text style={styles.countryText}>{country}</Text>
                </View>
                <View>
                    <View style={styles.rating}>
                        <Ionicons name="md-star" size={25} color="#403632" style={styles.star} />
                        <Text style={styles.rightText}>
                            {parseFloat(rating).toFixed(2)}
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
        marginLeft: 10,
        marginRight: 10,
    },
    itemColumns: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
});

/*
    TODO:
    box-shadow: 3px 3px 8px 1px rgba(0,0,0,0.5);
*/

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