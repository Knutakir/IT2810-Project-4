import React from 'react';
import {
    View,
    Text,
    Picker,
    StyleSheet,
    Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSortingType, setSortingOrder } from '../actions';
import commonStyles from './commonStyles';

function Sort({
    onUpdateSortingType,
    onUpdateSortingOrder,
    sortingType,
    sortingOrder,
}) {
    return (
        <View style={styles.view}>
            <Text style={commonStyles.text}>Sort by</Text>
            <View style={[styles.pickerView, commonStyles.shadow]}>
                <Picker
                    selectedValue={sortingType}
                    style={styles.picker}
                    itemStyle={styles.pickerItem}
                    onValueChange={itemValue => onUpdateSortingType(itemValue)}
                >
                    <Picker.Item label="Mountain" value="name" color="rgb(64, 54, 50)" />
                    <Picker.Item label="Height" value="height" color="rgb(64, 54, 50)" />
                    <Picker.Item label="Country" value="country" color="rgb(64, 54, 50)" />
                    <Picker.Item label="Rating" value="rating" color="rgb(64, 54, 50)" />
                </Picker>
            </View>
            <View style={styles.inOrderContainer}>
                <Text style={commonStyles.text}>in order</Text>
                <View style={[styles.sortingOrder, commonStyles.shadow]}>
                    <Ionicons
                        style={styles.icon}
                        name={(sortingOrder === 1) ? ('md-arrow-round-up') : ('md-arrow-round-down')}
                        size={28}
                        color="#403632"
                        onPress={() => onUpdateSortingOrder(-sortingOrder)}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 10,
    },
    pickerView: {
        backgroundColor: '#f0d5c9',
        borderRadius: 5,
        margin: 5,
    },
    picker: {
        height: Platform.OS === 'ios' ? 150 : 50,
        width: 150,
        color: 'rgb(64, 54, 50)',
    },
    pickerItem: {
        height: Platform.OS === 'ios' ? 150 : 50,
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
    inOrderContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        color: 'rgb(64, 54, 50)',
    },
});

const mapStateToProps = state => ({
    sortingType: state.sorting.sortingType,
    sortingOrder: state.sorting.sortingOrder,
});

const mapDispatchToProps = dispatch => ({
    onUpdateSortingType: sortingType => dispatch(setSortingType(sortingType)),
    onUpdateSortingOrder: sortingOrder => dispatch(setSortingOrder(sortingOrder)),
});

Sort.propTypes = {
    onUpdateSortingType: PropTypes.func,
    onUpdateSortingOrder: PropTypes.func,
    sortingType: PropTypes.string,
    sortingOrder: PropTypes.number,
};

Sort.defaultProps = {
    onUpdateSortingType: null,
    onUpdateSortingOrder: null,
    sortingType: 'height',
    sortingOrder: -1,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);