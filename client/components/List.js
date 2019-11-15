import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Alert,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { vw } from 'react-native-expo-viewport-units';
import ListItem from './ListItem';
import Api from '../api/mountain';

function List({
    // TODO: currentPageNumber,
    sortingType,
    sortingOrder,
    filteringCountry,
    filteringHeight,
    filteringRating,
    searchValue,
    // TODO: onUpdateTotalPageNumber,
}) {
    const [mountains, setMountains] = useState([]);

    const clickListItem = (country) => {
        alert(country);
    };

    useEffect(() => {
        const searchMountains = async () => {
            const sortingObject = {type: sortingType, order: sortingOrder};
            const filteringObject = {country: filteringCountry, height: filteringHeight, rating: filteringRating};

            try {
                // TODO: implement page number __
                const fetchedMountains = await Api.searchMountains(searchValue, 1, sortingObject, filteringObject);

                // TODO: onUpdateTotalPageNumber(fetchedMountains.totalPageNumber);
                setMountains(fetchedMountains.mountains);
            } catch (error) {
                Alert.alert('Error', 'Failed to retrieve mountains.');
            }
        };

        searchMountains();
    }, [sortingType, sortingOrder, filteringCountry, filteringHeight, filteringRating, searchValue]);

    return (
        <View style={styles.list}>
            {mountains.map(mountain => (
                <ListItem
                    key={mountain.id}
                    name={mountain.mountain}
                    country={mountain.mainCountry}
                    height={mountain.metres}
                    rating={mountain.rating}
                    clickItem={() => clickListItem(mountain.mountain)}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        width: vw(90),
    },
});

const mapStateToProps = state => ({
    // TODO: currentPageNumber: state.page.pageNumber,
    sortingType: state.sorting.sortingType,
    sortingOrder: state.sorting.sortingOrder,
    filteringCountry: state.filtering.filteringCountry,
    filteringHeight: state.filtering.filteringHeight,
    filteringRating: state.filtering.filteringRating,
    searchValue: state.searching.searchValue,
});

List.propTypes = {
    sortingType: PropTypes.string,
    sortingOrder: PropTypes.number,
    filteringCountry: PropTypes.string,
    filteringHeight: PropTypes.array,
    filteringRating: PropTypes.array,
    searchValue: PropTypes.string,
};

List.defaultProps = {
    sortingType: 'height',
    sortingOrder: -1,
    filteringCountry: 'All',
    filteringHeight: [2000, 8848],
    filteringRating: [0, 5],
    searchValue: '',
};

export default connect(mapStateToProps)(List);