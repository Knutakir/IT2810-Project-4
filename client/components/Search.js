import React, { useRef } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Text,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSearchValue } from '../actions';

// TODO: is `searchValue` needed in this component?
// eslint-disable-next-line react/prop-types
function Search({onUpdateSearchValue, searchValue}) {
    const inputRef = useRef(null);

    // TODO: Text is just for testing Redux => remove it later :)

    return (
        <View style={styles.view}>
            <Ionicons
                style={styles.searchIcon}
                name="md-search"
                size={24}
                color="#403632"
                onPress={() => inputRef.current.focus()}
            />
            <TextInput
                style={styles.searchInput}
                ref={inputRef}
                placeholder="search for mountains"
                placeholderTextColor="#403632a2"
                onChangeText={value => onUpdateSearchValue(value)}
            />
            <Text>{searchValue}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#f0d5c9',
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 8,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        fontSize: 16,
    },
});

const mapStateToProps = state => ({
    searchValue: state.searching.searchValue,
});

const mapDispatchToProps = dispatch => ({
    onUpdateSearchValue: searchValue => dispatch(setSearchValue(searchValue)),
});

Search.propTypes = {
    onUpdateSearchValue: PropTypes.func,
};

Search.defaultProps = {
    onUpdateSearchValue: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);