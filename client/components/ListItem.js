import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';

export default function ListItem({
    name,
    country,
    height,
    rating,
    clickItem,
}) {
    return (
        <TouchableOpacity style={styles.listItem}>
            <Text>teksst</Text>
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
});

/*
    border-radius: 5px;
    background-color: var(--light-pink);
    box-shadow: 3px 3px 8px 1px rgba(0,0,0,0.5);
    margin: 5px 10px;
*/

ListItem.propTypes = {
    name: PropTypes.string,
    country: PropTypes.string,
    height: PropTypes.number,
    rating: PropTypes.string,
    clickItem: PropTypes.func.isRequired,
};

ListItem.defaultProps = {
    name: '',
    country: '',
    height: 0,
    rating: '0',
};