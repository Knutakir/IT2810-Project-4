import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { vw } from 'react-native-expo-viewport-units';
import ListItem from './ListItem';

function List({
    sortingType,
    sortingOrder,
}) {

    const clickListItem = (country) => {
        alert(country);
    };

    return (
        <View style={styles.list}>
            <ListItem name='Mount Everest' country='Nepal' height={1243} rating='2.4' clickItem={() => clickListItem('Mount Everest')} />
            <ListItem name='K2' country='Nepal' height={15553} rating='4.4' clickItem={() => clickListItem('K2')} />
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        width: vw(90),
    },
});

const mapStateToProps = state => ({
    sortingType: state.sorting.sortingType,
    sortingOrder: state.sorting.sortingOrder,
});

List.propTypes = {
    sortingType: PropTypes.string,
    sortingOrder: PropTypes.number,
};

List.defaultProps = {
    sortingType: 'height',
    sortingOrder: -1,
};

export default connect(mapStateToProps)(List);