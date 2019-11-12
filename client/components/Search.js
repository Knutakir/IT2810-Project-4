import React, { useRef } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSearchValue } from '../actions';

function Search({onUpdateSearchValue, searchValue}) {
    const inputRef = useRef(null);

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
                value={searchValue}
                style={styles.searchInput}
                ref={inputRef}
                placeholder="search for mountains"
                placeholderTextColor="#403632a2"
                onChangeText={value => onUpdateSearchValue(value)}
            />
            {searchValue.length > 0 && (
                <Ionicons
                    style={styles.searchIcon}
                    name="md-close-circle"
                    size={24}
                    color="#403632"
                    onPress={() => onUpdateSearchValue('')}
                />
            )}
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
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        fontSize: 16,
        color: 'rgb(64, 54, 50)',
        marginRight: 10,
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
    searchValue: PropTypes.string,
};

Search.defaultProps = {
    onUpdateSearchValue: null,
    searchValue: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);