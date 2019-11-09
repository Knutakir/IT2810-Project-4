import React, { useRef } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Search() {
    const inputRef = useRef(null);

    return (
        <View style={styles.view}>
            <Ionicons style={styles.searchIcon} name="md-search" size={24} color="#403632" onPress={() => inputRef.current.focus()} />
            <TextInput style={styles.searchInput} ref={inputRef} placeholder="search for mountains" placeholderTextColor="#403632a2" />
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

export default Search;