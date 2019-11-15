import React, { useState, useEffect } from 'react';
import {
    View,
    Modal,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { vw } from 'react-native-expo-viewport-units';
import ListItem from './ListItem';
import DetailedContent from './DetailedContent';
import Api from '../api/mountain';
import { setPerformingSearch } from '../actions';

function List({
    // TODO: currentPageNumber,
    sortingType,
    sortingOrder,
    filteringCountry,
    filteringHeight,
    filteringRating,
    searchValue,
    performingSearch,
    onUpdatePerformingSearch,
    // TODO: onUpdateTotalPageNumber,
}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [mountains, setMountains] = useState([]);
    const [selectedMountain, setSelectedMountain] = useState({
        mountain: '',
        mainCountry: '',
        metres: 0,
        locationAndNotes: '',
        formattedAddress: '',
        latitude: 0.0,
        longitude: 0.0,
        rating: 0,
        votes: 0,
    });

    const pressedListItem = pressedMountain => {
        const fetchSingleMountain = async mountainId => {
            const fetchedMountain = await Api.getSingleMountain(mountainId);
            setSelectedMountain(fetchedMountain);
        };

        const mountainId = pressedMountain.id;

        if (mountainId) {
            fetchSingleMountain(mountainId);
        }

        // Show the modal
        setModalVisible(true);
    };

    const searchMountains = async () => {
        const sortingObject = {type: sortingType, order: sortingOrder};
        const filteringObject = {country: filteringCountry, height: filteringHeight, rating: filteringRating};

        try {
            // TODO: implement page number __
            const fetchedMountains = await Api.searchMountains(searchValue, 1, sortingObject, filteringObject);

            // TODO: onUpdateTotalPageNumber(fetchedMountains.totalPageNumber);
            setMountains(fetchedMountains.mountains);
            onUpdatePerformingSearch(false);
        } catch (error) {
            Alert.alert('Error', 'Failed to retrieve mountains.');
        }
    };

    // Refresh the list after changing of search, filtering and soring
    useEffect(() => {
        searchMountains();
    }, [sortingType, sortingOrder, filteringCountry, filteringHeight, filteringRating, searchValue]);

    // Refresh the list after triggering refresh
    useEffect(() => {
        if (performingSearch) {
            searchMountains();
        }
    }, [performingSearch]);

    return (
        <View>
            <View style={styles.list}>
                {mountains.map(mountain => (
                    <ListItem
                        key={mountain.id}
                        name={mountain.mountain}
                        country={mountain.mainCountry}
                        height={mountain.metres}
                        rating={mountain.rating}
                        clickItem={() => pressedListItem(mountain)}
                    />
                ))}
            </View>
            { /* Solution for clicking outside of modal to close (in List.js and DetailedContent.js) found here:
            https://stackoverflow.com/questions/40483034/close-react-native-modal-by-clicking-on-overlay */}
            <Modal animationType="slide" transparent visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                <TouchableOpacity style={styles.modalContainer} activeOpacity={1} onPressOut={() => setModalVisible(false)}>
                    <DetailedContent
                        mountainId={selectedMountain.id}
                        mountain={selectedMountain.mountain}
                        mainCountry={selectedMountain.mainCountry}
                        metres={selectedMountain.metres}
                        locationAndNotes={selectedMountain.locationAndNotes}
                        formattedAddress={selectedMountain.formattedAddress}
                        latitude={selectedMountain.latitude}
                        longitude={selectedMountain.longitude}
                        startRating={selectedMountain.rating}
                        startVotes={selectedMountain.votes}
                        closeModal={() => setModalVisible(false)}
                    />
                </TouchableOpacity>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        width: vw(90),
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    performingSearch: state.searching.performingSearch,
});

const mapDispatchToProps = dispatch => ({
    onUpdatePerformingSearch: performingSearch => dispatch(setPerformingSearch(performingSearch)),
});

List.propTypes = {
    sortingType: PropTypes.string,
    sortingOrder: PropTypes.number,
    filteringCountry: PropTypes.string,
    filteringHeight: PropTypes.array,
    filteringRating: PropTypes.array,
    searchValue: PropTypes.string,
    performingSearch: PropTypes.bool,
    onUpdatePerformingSearch: PropTypes.func,
};

List.defaultProps = {
    sortingType: 'height',
    sortingOrder: -1,
    filteringCountry: 'All',
    filteringHeight: [2000, 8848],
    filteringRating: [0, 5],
    searchValue: '',
    performingSearch: false,
    onUpdatePerformingSearch: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);